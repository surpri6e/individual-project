import { TouchableOpacity } from 'react-native';
import React, { FC, useEffect, useState } from 'react';
import { IQuestionsScreen } from '../../types/interfaces/screenTypes/IQuestionsScreen';
import { Container } from '../../layouts/Container';
import {
    QuestionScreenMainAnswerText,
    QuestionScreenMainButton,
    QuestionScreenMainText,
    QuestionScreenStatingMessage,
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

    useEffect(() => {
        navigation.setOptions({ title });
    }, []);

    // If user alredy started marathons clear arrow
    useEffect(() => {
        if (isStart) {
            navigation.setOptions({ headerBackVisible: false });
        }
    }, [isStart]);

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

                    <QuestionScreenMainButton>Далее</QuestionScreenMainButton>
                </>
            ) : (
                // If user has not yet started the marathon
                <>
                    <QuestionScreenStatingMessage>{title}</QuestionScreenStatingMessage>
                    <QuestionScreenMainText>
                        Сейчас вам предстоит пройти марафон состоящий из {questions.length} вопросов. Когда будете готовы нажмите соответствующую кнопку. Время
                        у вас неограниченное, задания требуется выполнять по порядку. В конце вы узнаете свой результат и краткие рекомендации.
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
