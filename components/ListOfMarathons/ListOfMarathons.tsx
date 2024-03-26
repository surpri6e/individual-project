import { FlatList, TouchableOpacity, View } from 'react-native';
import React, { FC } from 'react';
import Marathon from '../Marathon/Marathon';
import { listOfMarathons } from '../../constants/listOfMarathons';
import { IMainScreen } from '../../types/IMainScreen';
import { ListOfMarathonsWrapper } from './ListOfMarathonsStyles';

const ListOfMarathons: FC<IMainScreen> = ({ navigation, route }) => {
    return (
        <ListOfMarathonsWrapper>
            <FlatList
                data={listOfMarathons}
                renderItem={({ item }) => (
                    <TouchableOpacity>
                        <Marathon title={item.title} text={item.text} />
                    </TouchableOpacity>
                )}
            />
        </ListOfMarathonsWrapper>
    );
};

export default ListOfMarathons;
