<?php


namespace App\Services\ExcelServices;


use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;

abstract class ExportToExcelService extends ExcelService
{
    protected $columnsTitle;
    protected $columnsTitleIndex = 4;
    protected $tableTitlePrefix;

    protected function setTemplate()
    {
        $activeSheet = $this->spreadsheet->getActiveSheet();
        $this->fillColumnsTitle($activeSheet);
        $this->setTitleStyle($activeSheet);
    }

    private function fillColumnsTitle($activeSheet){
        for($i = 0; $i < count($this->columnsTitle); $i++){
            $cell = $this->excelColumnNames[$i] . $this->columnsTitleIndex;
            $activeSheet->setCellValue($cell, $this->columnsTitle[$i]);
            $activeSheet->getStyle($cell)
                ->applyFromArray(ExcelStyles::mergeStyles(
                    ExcelStyles::$font14,
                    ExcelStyles::$alignmentCenter,
                    ExcelStyles::$mediumBlackBorder
                ));

            $activeSheet->getColumnDimension($this->excelColumnNames[$i])->setAutoSize(true);
        }
    }

    private function setTitleStyle($activeSheet){
        $activeSheet->getStyle('A2')->applyFromArray(ExcelStyles::mergeStyles(
            ExcelStyles::$font14,
            ExcelStyles::$fontBold
        ));
        $activeSheet->mergeCells('A2:G2');
    }

    protected function preprocessingData()
    {
        return;
    }

    protected function fillTableTitleData()
    {
        $activeSheet = $this->spreadsheet->getActiveSheet();
        $date = Carbon::now();
        $activeSheet->setCellValue('A2', $this->tableTitlePrefix . ' от ' . $this->getDateText($date));
    }

    protected function setStyles(int $rowsCount)
    {
        if($rowsCount == 0)
            return;

        $tableCells = 'A' . ($this->columnsTitleIndex + 1) . ':' . $this->getLastColumnName() . ($rowsCount + $this->columnsTitleIndex);
        $this->spreadsheet->getActiveSheet()->getStyle($tableCells)->applyFromArray(ExcelStyles::$thinBlackBorder);
    }

    private function getLastColumnName()
    {
        return $this->excelColumnNames[count($this->columnsTitle) - 1];
    }

    protected function setFooter(int $rowsCount)
    {
        return;
    }
}
