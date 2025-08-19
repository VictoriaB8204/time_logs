<?php


namespace App\Services\DocumentServices;


use App\Helpers\NumberToWordsConverter;
use App\Services\Service;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;
use PhpOffice\PhpWord\TemplateProcessor;

class DocumentService extends Service
{
    public $generatedFileName;

    public function generateInvoice(Request $request){
        $generator = new InvoiceGenerator();
        $file = $generator->generate($request);
        $this->generatedFileName = $generator->generatedFileName;
        return $file;
    }

    public function generateAct(Request $request){
        $generator = new ActGenerator();
        $file = $generator->generate($request);
        $this->generatedFileName = $generator->generatedFileName;
        return $file;
    }
}
