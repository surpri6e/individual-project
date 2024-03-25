import { FlatList, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Marathon from './Marathon';
import { listOfMarathons } from '../constants/listOfMarathons';
import styled from 'styled-components/native';

const WrapperList = styled.View`
    padding: 5px;
    width: 100%;
`;

const ListOfMarathons = () => {
    return (
        <WrapperList>
            <FlatList
                data={listOfMarathons}
                renderItem={({ item }) => (
                    <TouchableOpacity>
                        <Marathon title={item.title} text={item.text} />
                    </TouchableOpacity>
                )}
            />
        </WrapperList>
    );
};

export default ListOfMarathons;
