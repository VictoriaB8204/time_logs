<?php


namespace App\Services\DocumentServices;


use App\Helpers\DateFormater;
use App\Helpers\NumberToWordsConverter;
use App\Helpers\StringFormater;
use App\Services\Service;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use PhpOffice\PhpWord\TemplateProcessor;

class InvoiceGenerator
{
    public $generatedFileName;

    public function generate(Request $request){
        $validated = $request->validate([
            'bill_date' => 'required|date',
            'bill_number' => 'required|string',
            'bill_summ' => 'required|integer|min:1',
        ]);

        // Форматирование даты
        $formattedBillDate = (new DateFormater())->billDateForInvoice(new \DateTime($validated['bill_date']));

        // Преобразование суммы в слова
        $sumInWords = NumberToWordsConverter::toWords($validated['bill_summ']);
        $sumInWords = (new StringFormater())->upFirstLatter($sumInWords) . ' рублей 00 копеек';

        // Проверяем и создаем директорию при необходимости
        Storage::makeDirectory('bills');

        // Генерируем безопасное имя файла
        $dateForFileName = Carbon::parse($request->bill_date)->format('d.m.Y');
        $this->generatedFileName = 'ИП_Рындыч_Счет_№' . $validated['bill_number'] . '_от_' . $dateForFileName . '.docx';
        $outputPath = storage_path('app/bills/'.$this->generatedFileName);

        // Удаляем старый файл если существует
        if (file_exists($outputPath)) {
            unlink($outputPath);
        }

        // Генерация DOCX
        $template = new TemplateProcessor(storage_path('templates/Счет.docx'));
        $template->setValue('bill_number', $validated['bill_number']);
        $template->setValue('bill_date', $formattedBillDate);
        $template->setValue('bill_summ', number_format($validated['bill_summ'], 2, ',', ' '));
        $template->setValue('bill_summ_in_words', $sumInWords);

        $template->saveAs($outputPath);

        return $outputPath;
    }

}
