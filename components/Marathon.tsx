import { StyleSheet, Text, View } from 'react-native';
import React, { FC } from 'react';
import { IMarathon } from '../types/IMarathon';

const Marathon: FC<IMarathon> = ({ title, text }) => {
    return (
        <View style={styles.marathon}>
            <Text style={styles.marathonTitle}>{title}</Text>
            <Text style={styles.marathonText}>{text}</Text>
        </View>
    );
};

export default Marathon;

const styles = StyleSheet.create({
    marathon: {
        marginBottom: 8,
        marginTop: 8,
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderRadius: 5,
        paddingVertical: 5,
    },

    marathonTitle: {
        fontSize: 24,
        fontWeight: '800',
    },

    marathonText: {
        fontSize: 14,
    },
});
