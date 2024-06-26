import { IMarathonsQuestion } from '../types/interfaces/IMarathonsQuestions';

export const EGEPhysicDynamics: IMarathonsQuestion = {
    title: 'ЕГЭ. Физика. Динамика.',
    questions: [
        'Тело массой 5 кг, с помощью каната начинают равноускоренно поднимать вертикально вверх. Чему равна сила, действующая на тело со стороны каната, если известно, что за 3 с. груз был поднят на высоту 12 м.',
        'На горизонтальном столе стоит цилиндрический сосуд с водой. В нем плавает кусок льда, привязанный нитью к штативу. Над поверхностью воды находится некоторый объем льда. Нить натянута с силой 1,2 Н. Площадь дна сосуда составляет 400 см. в квадрате, плотность воды равна 1 г/см. в кубе, ускорение свободного падения принять за 10 м./с. в квадрате. На сколько измениться высота уровня воды в сосуде, когда весь лед растает?',
    ],
    answers: [
        [
            ['40 Н', false],
            ['63 Н', true],
            ['58 Н', false],
        ],
        [
            ['Уровень повысится в 1.3 раза', false],
            ['Повысится на 2 см.', false],
            ['Повысится на 3 мм.', true],
        ],
    ],
};
