import React, { FC } from 'react';
import { IMarathon } from '../../types/interfaces/IMarathon';
import { MarathonText, MarathonTitle, MarathonWrapper } from './MarathonStyles';

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
