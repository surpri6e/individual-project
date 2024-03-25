import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ListOfMarathons from './components/ListOfMarathons';

export default function App() {
    return (
        <View style={styles.container}>
            <Text style={styles.globalTitle}>Проверьте свои знания с помощью марафонов</Text>
            <ListOfMarathons />

            {/* <StatusBar style='auto' /> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 10,
        paddingBottom: 135,
        color: 'black',
    },
    globalTitle: {
        fontSize: 32,
        fontWeight: '800',
        textAlign: 'center',
        marginBottom: 15,
    },
});
