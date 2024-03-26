import { Text, View } from 'react-native';
import React, { FC } from 'react';
import { IQuestionsScreen } from '../../types/IQuestionsScreen';
import { Container } from '../../layouts/Container';

const QuestionsScreen: FC<IQuestionsScreen> = ({ navigation, route }) => {
    return (
        <Container>
            <Text>QuestionsScreen</Text>
        </Container>
    );
};

export default QuestionsScreen;
