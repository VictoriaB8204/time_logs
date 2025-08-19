<?php


namespace App\Helpers;


class DateFormater
{
    public function billDateForInvoice(\DateTime $date): string
    {
        $months = [
            1 => 'января', 2 => 'февраля', 3 => 'марта', 4 => 'апреля',
            5 => 'мая', 6 => 'июня', 7 => 'июля', 8 => 'августа',
            9 => 'сентября', 10 => 'октября', 11 => 'ноября', 12 => 'декабря',
        ];
        return $date->format('j') . ' ' . $months[(int)$date->format('n')] . ' ' . $date->format('Y') . ' г.';
    }

    public function billDateForAct(\DateTime $date): string
    {
        $months = [
            1 => 'января', 2 => 'февраля', 3 => 'марта', 4 => 'апреля',
            5 => 'мая', 6 => 'июня', 7 => 'июля', 8 => 'августа',
            9 => 'сентября', 10 => 'октября', 11 => 'ноября', 12 => 'декабря',
        ];
        return '«' . $date->format('j') . '» ' . $months[(int)$date->format('n')] . ' ' . $date->format('Y');
    }

}
