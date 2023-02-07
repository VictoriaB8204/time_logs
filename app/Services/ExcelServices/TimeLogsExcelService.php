<?php


namespace App\Services\ExcelServices;

use Illuminate\Support\Facades\Auth;

class TimeLogsExcelService extends ExportToExcelService
{
    protected $columnsTitle = [
        'Время начала оказания услуг',
        'Время окончания оказания услуг',
        'Тип задач',
        'Сервис',
        'Действия по задаче',
        'Исполнитель',
        'Затраченное время, ч',
        'Стоимость услуг по ставке, ₽',
        'Ставка, ₽',
    ];
    protected $fileNamePrefix = 'TimeLogs';
    protected $tableTitlePrefix = 'TimeLogs';

    protected function inputRow($timeLog, int $row)
    {
        $activeSheet = $this->spreadsheet->getActiveSheet();
        $activeSheet->setCellValue($this->excelColumnNames[0] . $row, $this->formatDate($timeLog->start_time_date));
        $activeSheet->setCellValue($this->excelColumnNames[1] . $row, $this->formatDate($timeLog->end_time_date));
        $activeSheet->setCellValue($this->excelColumnNames[2] . $row, $this->getRelationName($timeLog->action_type));
        $activeSheet->setCellValue($this->excelColumnNames[3] . $row, $this->getRelationName($timeLog->software));
        $activeSheet->setCellValue($this->excelColumnNames[4] . $row, $timeLog->action_description);
        $activeSheet->setCellValue($this->excelColumnNames[5] . $row, $this->getRelationName($timeLog->creator));
        $activeSheet->setCellValue($this->excelColumnNames[6] . $row, $timeLog->time_spent);
        $activeSheet->setCellValue($this->excelColumnNames[7] . $row, $timeLog->cost);
        $activeSheet->setCellValue($this->excelColumnNames[8] . $row, $timeLog->rate);
    }

    private function formatDate($date){
        return $date ? $date->format('d.m.Y H:i') : '';
    }

    private function getRelationName($relation){
        return $relation ? $relation->name : '';
    }
}
