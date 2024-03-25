import { View } from 'react-native';
import React from 'react';
import styled from 'styled-components/native';
import ListOfMarathons from '../components/ListOfMarathons';

const GlobalTitle = styled.Text`
    font-size: 32px;
    font-weight: 800;
    text-align: center;

    margin-bottom: 15px;
`;

const MainScreeen = () => {
    return (
        <View>
            <GlobalTitle>Проверьте свои знания с помощью марафонов</GlobalTitle>
            <ListOfMarathons />
        </View>
    );
};

export default MainScreeen;
