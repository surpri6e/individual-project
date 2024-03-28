import { IMarathonsQuestion } from '../types/interfaces/IMarathonsQuestions';

// List of marathons info
export const listOfMarathonsQuestions: IMarathonsQuestion[] = [
    {
        title: 'ЕГЭ. Математика.',
        questions: ['Сколько будет 2 + 2?', 'Сколько будет 3 + 3?', 'Сколько будет 5 + 3?'],
        answers: [
            [
                ['Равно 1', false],
                ['Равно 4', true],
                ['Равно 10', false],
            ],
            [
                ['Равно 5', false],
                ['Равно 6', true],
                ['Равно 1', false],
            ],
            [
                ['Равно 17', false],
                ['Равно 8', true],
                ['Равно 3', false],
            ],
        ],
    },
    {
        title: 'ЕГЭ. Русский язык.',
        questions: ['ча/ща пиши с буквой...'],
        answers: [
            [
                ['С буквой - а', true],
                ['С буквой - ы', false],
                ['С буквой - я', false],
            ],
        ],
    },
    {
        title: 'ЕГЭ. Информатика.',
        questions: ['Как задается константность в JavaScript?'],
        answers: [
            [
                ['При помощи const', true],
                ['При помощи let', false],
                ['При помощи var', false],
            ],
        ],
    },
];
