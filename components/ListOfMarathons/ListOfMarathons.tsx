import { FlatList, TouchableOpacity, View } from 'react-native';
import React, { FC } from 'react';
import Marathon from '../Marathon/Marathon';
import { listOfMarathons } from '../../constants/listOfMarathons';
import { IMainScreen } from '../../types/interfaces/screenTypes/IMainScreen';
import { ListOfMarathonsWrapper } from './ListOfMarathonsStyles';
import { listOfMarathonsQuestions } from '../../constants/listOfMarathonsQuestions';

const ListOfMarathons: FC<IMainScreen> = ({ navigation }) => {
    return (
        <ListOfMarathonsWrapper>
            <FlatList
                data={listOfMarathons}
                renderItem={({ item }) => (
                    // Redirect on Questions Screen
                    <TouchableOpacity
                        onPress={() => navigation.navigate('QuestionsScreen', listOfMarathonsQuestions.filter((elem) => elem.title === item.title)[0])}
                    >
                        <Marathon title={item.title} text={item.text} />
                    </TouchableOpacity>
                )}
            />
        </ListOfMarathonsWrapper>
    );
};

export default ListOfMarathons;
