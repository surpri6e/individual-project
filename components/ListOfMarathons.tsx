import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Marathon from './Marathon';
import { listOfMarathons } from '../constants/listOfMarathons';

const ListOfMarathons = () => {
    return (
        <View style={styles.listOfMaratons}>
            <FlatList
                data={listOfMarathons}
                renderItem={({ item }) => (
                    <TouchableOpacity>
                        <Marathon title={item.title} text={item.text} />
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

export default ListOfMarathons;

const styles = StyleSheet.create({
    listOfMaratons: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        width: '100%',
    },
});
