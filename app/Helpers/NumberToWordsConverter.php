<?php

namespace App\Helpers;

class NumberToWordsConverter
{
    private static $units = [
        '', 'один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять'
    ];

    private static $teens = [
        'десять', 'одиннадцать', 'двенадцать', 'тринадцать', 'четырнадцать',
        'пятнадцать', 'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать'
    ];

    private static $tens = [
        '', 'десять', 'двадцать', 'тридцать', 'сорок', 'пятьдесят',
        'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто'
    ];

    private static $hundreds = [
        '', 'сто', 'двести', 'триста', 'четыреста', 'пятьсот',
        'шестьсот', 'семьсот', 'восемьсот', 'девятьсот'
    ];

    private static $thousands = [
        '', 'тысяча', 'тысячи', 'тысяч'
    ];

    private static $millions = [
        '', 'миллион', 'миллиона', 'миллионов'
    ];

    public static function toWords(int $number): string
    {
        if ($number === 0) {
            return 'ноль';
        }

        $result = [];
        $chunks = array_reverse(str_split(str_pad($number, ceil(strlen($number) / 3) * 3, '0', STR_PAD_LEFT), 3));

        foreach ($chunks as $i => $chunk) {
            $chunk = (int)$chunk;
            if ($chunk === 0) {
                continue;
            }

            $words = [];
            $hundred = (int)($chunk / 100);
            $remainder = $chunk % 100;

            if ($hundred > 0) {
                $words[] = self::$hundreds[$hundred];
            }

            if ($remainder >= 20) {
                $ten = (int)($remainder / 10);
                $unit = $remainder % 10;
                $words[] = self::$tens[$ten];
                if ($unit > 0) {
                    $words[] = self::$units[$unit];
                }
            } elseif ($remainder >= 10) {
                $words[] = self::$teens[$remainder - 10];
            } elseif ($remainder > 0) {
                $words[] = self::$units[$remainder];
            }

            if ($i === 1) { // Тысячи
                $plural = self::getPluralForm($chunk, self::$thousands);
                $words = array_map(function ($word) {
                    return $word === 'один' ? 'одна' : ($word === 'два' ? 'две' : $word);
                }, $words);
                $words[] = $plural;
            } elseif ($i === 2) { // Миллионы
                $plural = self::getPluralForm($chunk, self::$millions);
                $words[] = $plural;
            }

            array_unshift($result, implode(' ', $words));
        }

        return implode(' ', $result);
    }

    private static function getPluralForm(int $number, array $forms): string
    {
        $mod10 = $number % 10;
        $mod100 = $number % 100;

        if ($mod100 >= 11 && $mod100 <= 19) {
            return $forms[3];
        }

        switch ($mod10) {
            case 1: return $forms[1];
            case 2:
            case 3:
            case 4: return $forms[2];
            default: return $forms[3];
        }
    }
}
