<?php


namespace App\Services\ExcelServices;

use App\Services\ExcelServices\ExcelStyles\ExcelStyles;
use Illuminate\Support\Facades\Log;
use PhpOffice\PhpSpreadsheet\Cell\DataType;
use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;

abstract class ExcelService
{
    protected $excelColumnNames = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P'];
    protected $columnsTitleIndex;
    protected $spreadsheet;
    protected $fileNamePrefix;
    protected $footer;
    protected $data;
    private $pathToSave;

    function __construct()
    {
        $this->pathToSave = $_SERVER['DOCUMENT_ROOT'] . 'public/files/file';
        $this->spreadsheet = new Spreadsheet();
        $this->spreadsheet->setActiveSheetIndex(0);
    }

    public function makeDocument($data){
        $this->data = $data;
        $this->createDir();
        $this->setTemplate();
        $this->preprocessingData();
        $this->fillData();
        $this->setStyles(count($this->data));
        $this->setFooter(count($this->data));
        $path = $this->saveDocument();
        return $path;
    }

    private function createDir()
    {
        if (!is_dir($this->pathToSave)) {
            if (!mkdir($this->pathToSave, 0777, true))
                echo 'Не удалось создать папку для хранения файлов. ';
        }
    }

    abstract protected function setTemplate();

    abstract protected function preprocessingData();

    private function fillData()
    {
        $this->fillTableTitleData();
        $row = $this->columnsTitleIndex + 1;
        foreach ($this->data as $line) {
            $this->inputRow($line, $row++);
        }
    }

    abstract protected function fillTableTitleData();

    abstract protected function inputRow($line, int $row);

    abstract protected function setStyles(int $rowsCount);

    abstract protected function setFooter(int $rowsCount);

    private function saveDocument()
    {
        $writer = new Xlsx($this->spreadsheet);
        $file_name='/' . $this->fileNamePrefix . '_'. microtime(true).'.xlsx';
        $writer->save($this->pathToSave.$file_name);

        $path = $this->pathToSave.$file_name;
        $path = substr($path, strpos($path, '/files'));

        return $path;
    }

    protected function getDateText($date){
        $_monthsList = array("января", "февраля",
            "марта", "апреля", "мая", "июня",
            "июля", "августа", "сентября",
            "октября", "ноября", "декабря");
        return '"' . $date->day . '" ' .   $_monthsList[$date->month - 1] . ' ' . $date->year;
    }

    protected function getLineNumber(int $rowIndex){
        return $rowIndex-$this->columnsTitleIndex;
    }

    protected function setHyberLink($cell, $name, $route){
        $activeSheet = $this->spreadsheet->getActiveSheet();
        $activeSheet->setCellValueExplicit($cell, $name, DataType::TYPE_STRING);
        $activeSheet->getCell($cell)->getHyperlink()->setUrl($route);
        $activeSheet->getStyle($cell)->applyFromArray(ExcelStyles::$hyperLink);
    }
}
