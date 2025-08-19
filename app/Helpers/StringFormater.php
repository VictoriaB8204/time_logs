<?php


namespace App\Helpers;


class StringFormater
{
    public function upFirstLatter($string, $encoding = 'UTF-8') {
        $firstChar = mb_substr($string, 0, 1, $encoding);
        $then = mb_substr($string, 1, null, $encoding);
        return mb_strtoupper($firstChar, $encoding) . $then;
    }

}
