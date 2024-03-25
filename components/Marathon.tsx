import React, { FC } from 'react';
import { IMarathon } from '../types/IMarathon';
import styled from 'styled-components/native';

const MarathonTitle = styled.Text`
    font-size: 24px;
    font-weight: 800;
`;

const MarathonText = styled.Text`
    font-size: 14px;
`;

const MarathonWrapper = styled.View`
    margin: 10px 0;

    border-bottom-width: 1px;
    border-bottom-color: black;
`;

// On main screen buttons with marathon card
const Marathon: FC<IMarathon> = ({ title, text }) => {
    return (
        <MarathonWrapper>
            <MarathonTitle>{title}</MarathonTitle>
            <MarathonText>{text}</MarathonText>
        </MarathonWrapper>
    );
};

export default Marathon;
