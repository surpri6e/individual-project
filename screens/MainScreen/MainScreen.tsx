import React, { FC } from 'react';
import ListOfMarathons from '../../components/ListOfMarathons/ListOfMarathons';
import { Container } from '../../layouts/Container';
import { MainScreenTitle } from './MainScreenStyles';
import { IMainScreen } from '../../types/IMainScreen';

const MainScreeen: FC<IMainScreen> = ({ navigation, route }) => {
    return (
        <Container>
            <MainScreenTitle>Проверьте свои знания с помощью марафонов</MainScreenTitle>
            <ListOfMarathons navigation={navigation} route={route} />
        </Container>
    );
};

export default MainScreeen;
