<?php

namespace Database\Seeders;

use App\Models\ActionType;
use Illuminate\Database\Seeder;

class ActionTypesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $action_types = [
            'Администрирование',
            'Бизнес-анализ',
            'Документирование',
            'Обучение',
            'Организационные вопросы',
            'Поддержка',
            'Программирование 1С',
            'Программирование Веб',
            'Проектирование',
            'Программирование BP',
            'Проектирование БД',
            'Проектирование архитектуры',
            'Проектирование UI/UX',
            'Системный анализ',
            'Тестирование',
            'Тех поддержка',
        ];
        foreach ($action_types as $action_type)
            ActionType::updateOrCreate(['name' => $action_type], ['name' => $action_type]);
    }
}
