import { Text, View } from 'react-native';
import React, { FC, useEffect } from 'react';
import { IQuestionsScreen } from '../../types/interfaces/screenTypes/IQuestionsScreen';
import { Container } from '../../layouts/Container';

const QuestionsScreen: FC<IQuestionsScreen> = ({ navigation, route }) => {
    const { title, questions, answers } = route.params;

    useEffect(() => {
        navigation.setOptions({ title });
    }, []);
    return (
        <Container>
            <Text>{questions[0]}</Text>
        </Container>
    );
};

export default QuestionsScreen;
