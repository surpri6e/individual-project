import { IMarathonsQuestion } from '../types/interfaces/IMarathonsQuestions';

export const EGEMathVectors: IMarathonsQuestion = {
    title: 'ЕГЭ. Математика. Векторы.',
    questions: [
        'Стороны правильного треугольника ABC равны 3. Найдите длину вектора AB - AC.',
        'Найдите длину вектора a(6; 8).',
        'Две стороны прямоугольника ABCD равны 6 и 8. Найдите длину вектора AC.',
        'Две стороны прямоугольника ABCD равны 6 и 8. Найдите длину разности векторов AB и AD.',
        'Диагонали ромба ABCD равны 12 и 16. Найдите длину вектора AB.',
        'Даны векторы a = (1; 2), b = (-3; 6) и c = (4; -2). Найдите длину вектора a - b + c.',
    ],
    answers: [
        [
            ['9', false],
            ['3', true],
            ['0', false],
        ],
        [
            ['100', false],
            ['2', false],
            ['10', true],
        ],
        [
            ['4', false],
            ['10', true],
            ['14', false],
        ],
        [
            ['10', true],
            ['28', false],
            ['2', false],
        ],
        [
            ['10', true],
            ['28', false],
            ['4', false],
        ],
        [
            ['-2', false],
            ['15', false],
            ['10', true],
        ],
    ],
};
