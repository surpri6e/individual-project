import { TouchableOpacity } from 'react-native';
import React, { FC, useEffect, useState } from 'react';
import { IQuestionsScreen } from '../../types/interfaces/screenTypes/IQuestionsScreen';
import { Container } from '../../layouts/Container';
import {
    QuestionScreenMainAnswerText,
    QuestionScreenMainButton,
    QuestionScreenMainText,
    QuestionScreenTitleMessage,
    QuestionsScreenAnswer,
    QuestionsScreenMainBoldText,
} from './QuestionsScreenStyles';
import { CheckBox } from '@rneui/themed';

const QuestionsScreen: FC<IQuestionsScreen> = ({ navigation, route }) => {
    const { title, questions, answers } = route.params;

    const [isStart, setIsStart] = useState(false);
    const [isEnd, setIsEnd] = useState(false);

    const [questionIndex, setQuestionIndex] = useState(0);

    const [currentAnswer, setCurrentAnswer] = useState(0);
    const [answersResult, setAnswersResult] = useState<boolean[]>([]);

    const [scores, setScores] = useState(0);

    useEffect(() => {
        navigation.setOptions({ title });
    }, []);

    // If user alredy started marathons clear arrow
    useEffect(() => {
        if (isStart) {
            navigation.setOptions({ headerBackVisible: false });
        }
    }, [isStart]);

    useEffect(() => {
        let result = 0;

        answersResult.forEach((elem) => {
            if (elem) {
                result += 1;
            }
        });

        setScores(result);
    }, [answersResult]);

    return (
        // If user alredy started the marathon
        <Container>
            {isStart ? (
                <>
                    <QuestionScreenMainText>
                        <QuestionsScreenMainBoldText>
                            Вопрос {questionIndex + 1} / {questions.length}. {}
                        </QuestionsScreenMainBoldText>
                        {questions[questionIndex]}
                    </QuestionScreenMainText>

                    {answers[questionIndex].map((elem, ind) => (
                        <QuestionsScreenAnswer key={elem[0]}>
                            <CheckBox
                                checked={currentAnswer === ind}
                                checkedIcon='dot-circle-o'
                                uncheckedIcon='circle-o'
                                onPress={() => setCurrentAnswer(ind)}
                                containerStyle={{
                                    backgroundColor: 'transparent',
                                    padding: 0,
                                }}
                            />
                            <QuestionScreenMainAnswerText onPress={() => setCurrentAnswer(ind)}>{elem[0]}</QuestionScreenMainAnswerText>
                        </QuestionsScreenAnswer>
                    ))}

                    {questions.length - 1 != questionIndex ? (
                        <TouchableOpacity
                            onPress={() => {
                                setAnswersResult([...answersResult, answers[questionIndex][currentAnswer][1]]);
                                setQuestionIndex(questionIndex + 1);
                            }}
                        >
                            <QuestionScreenMainButton>Далее</QuestionScreenMainButton>
                        </TouchableOpacity>
                    ) : (
                        <TouchableOpacity
                            onPress={() => {
                                setAnswersResult([...answersResult, answers[questionIndex][currentAnswer][1]]);
                                setIsStart(false);
                                setIsEnd(true);
                            }}
                        >
                            <QuestionScreenMainButton>Закончить</QuestionScreenMainButton>
                        </TouchableOpacity>
                    )}
                </>
            ) : isEnd ? (
                <>
                    <QuestionScreenTitleMessage>
                        {scores > answersResult.length / 2 ? 'Поздравляем вы набрали' : 'К сожалению вы набрали'}
                    </QuestionScreenTitleMessage>
                    <QuestionScreenMainText>
                        {scores} из {answersResult.length} очков.
                    </QuestionScreenMainText>
                    <TouchableOpacity onPress={() => navigation.navigate('MainScreen')}>
                        <QuestionScreenMainButton>На главную страницу</QuestionScreenMainButton>
                    </TouchableOpacity>
                </>
            ) : (
                // If user has not yet started the marathon
                <>
                    <QuestionScreenTitleMessage>{title}</QuestionScreenTitleMessage>
                    <QuestionScreenMainText>
                        Сейчас вам предстоит пройти марафон состоящий из {questions.length} вопросов. Когда будете готовы нажмите соответствующую кнопку. Время
                        у вас неограниченное, задания требуется выполнять по порядку. В конце вы узнаете свой результат.
                    </QuestionScreenMainText>
                    <TouchableOpacity onPress={() => setIsStart(true)}>
                        <QuestionScreenMainButton>Начать</QuestionScreenMainButton>
                    </TouchableOpacity>
                </>
            )}
        </Container>
    );
};

export default QuestionsScreen;
