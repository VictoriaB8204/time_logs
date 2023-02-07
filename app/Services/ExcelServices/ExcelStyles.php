<?php


namespace App\Services\ExcelServices;


use PhpOffice\PhpSpreadsheet\Style\Alignment;
use PhpOffice\PhpSpreadsheet\Style\Border;
use PhpOffice\PhpSpreadsheet\Style\Fill;

class ExcelStyles
{
    public static $thinBlackBorder = [
        'borders' => [
            'allBorders' => [
                'borderStyle' => Border::BORDER_THIN,
                'color' => ['argb' => 'FF000000'],
            ],
        ],
    ];

    public static $mediumBlackBorder = [
        'borders' => [
            'allBorders' => [
                'borderStyle' => Border::BORDER_MEDIUM,
                'color' => ['argb' => 'FF000000'],
            ],
        ],
    ];

    public static $fontBold = [
        'font' => [
            'bold' => true,
        ],
    ];

    public static $font14 = [
        'font' => [
            'size' => 14,
        ],
    ];

    public static $font16 = [
        'font' => [
            'size' => 16,
        ],
    ];

    public static $alignmentCenter = [
        'alignment' => [
            'horizontal' => Alignment::HORIZONTAL_CENTER,
            'vertical' => Alignment::VERTICAL_CENTER,
        ],
    ];

    public static $cellsHeight = 50;

    public static $bgLightBlue = [
        'fill' => [
            'fillType' => Fill::FILL_SOLID,
            'startColor' => [
                'argb' => 'FFDCE6F1',
            ]
        ]
    ];

    public static $hyperLink = [
        'font' => [
            'color' => ['rgb' => '0645AD'],
            'underline' => true,
        ],
    ];

    public static function mergeStyles(array ...$styles){
        $resultStyle = [];
        foreach ($styles as $style)
            $resultStyle = array_merge_recursive($resultStyle, $style);
        return $resultStyle;
    }

}
