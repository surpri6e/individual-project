import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { MAIN_SCREEN, QUESTIONS_SCREEN } from '../constants/screens';
import { IMarathonsQuestion } from './interfaces/IMarathonsQuestions';

export type NavigationParamList = {
    [MAIN_SCREEN]: undefined;
    [QUESTIONS_SCREEN]: IMarathonsQuestion;
};

export type MainScreenNavigationParamProps = NativeStackScreenProps<NavigationParamList, typeof MAIN_SCREEN, 'Главная cтраница'>;

export type QuestionsScreenNavigationParamProps = NativeStackScreenProps<NavigationParamList, typeof QUESTIONS_SCREEN, 'Вопросы'>;
