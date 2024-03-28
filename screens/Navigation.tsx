import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreeen from './MainScreen/MainScreen';
import QuestionsScreen from './QuestionsScreen/QuestionsScreen';
import { NavigationContainer } from '@react-navigation/native';
import { NavigationParamList } from '../types/navigationTypes';
import { MAIN_SCREEN, QUESTIONS_SCREEN } from '../constants/screens';
import { mainTheme } from '../constants/mainTheme';

const Stack = createNativeStackNavigator<NavigationParamList>();

export const Navigation = () => {
    return (
        <NavigationContainer theme={mainTheme}>
            <Stack.Navigator>
                <Stack.Screen name={MAIN_SCREEN} component={MainScreeen} options={{ title: 'Главная страница' }} />
                <Stack.Screen name={QUESTIONS_SCREEN} component={QuestionsScreen} options={{ title: 'Вопросы' }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
