<?php


namespace App\Services\DocumentServices;


use App\Helpers\DateFormater;
use App\Helpers\NumberToWordsConverter;
use App\Helpers\StringFormater;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use PhpOffice\PhpWord\TemplateProcessor;

class ActGenerator
{
    public $generatedFileName;

    public function generate(Request $request){
        $validated = $request->validate([
            'bill_date' => 'required|date',
            'bill_start_date' => 'required|date',
            'bill_end_date' => 'required|date',
            'bill_number' => 'required|string',
            'bill_summ' => 'required|integer|min:1',
        ]);

        // Форматирование дат
        $formattedBillDate = (new DateFormater())->billDateForAct(new \DateTime($validated['bill_date']));
        $formattedBillStartDate = (new DateFormater())->billDateForAct(new \DateTime($validated['bill_start_date'])) . ' г.';
        $formattedBillEndDate = (new DateFormater())->billDateForAct(new \DateTime($validated['bill_end_date'])) . ' г.';

        // Преобразование суммы в слова
        $sumInWords = NumberToWordsConverter::toWords($validated['bill_summ']);

        // Проверяем и создаем директорию при необходимости
        Storage::makeDirectory('bills');

        // Генерируем безопасное имя файла
        $dateForFileName = Carbon::parse($request->bill_date)->format('d.m.Y');
        $this->generatedFileName = 'ИП_Рындыч_Акт_№' . $validated['bill_number'] . '_от_' . $dateForFileName . '.docx';
        $outputPath = storage_path('app/bills/'.$this->generatedFileName);

        // Удаляем старый файл если существует
        if (file_exists($outputPath)) {
            unlink($outputPath);
        }

        // Генерация DOCX
        $template = new TemplateProcessor(storage_path('templates/Акт.docx'));
        $template->setValue('bill_number', $validated['bill_number']);
        $template->setValue('bill_date', $formattedBillDate);
        $template->setValue('bill_start_date', $formattedBillStartDate);
        $template->setValue('bill_end_date', $formattedBillEndDate);
        $template->setValue('bill_summ', number_format($validated['bill_summ'], 0, ',', ' '));
        $template->setValue('bill_summ_in_words', $sumInWords);

        $template->saveAs($outputPath);

        return $outputPath;
    }
}
