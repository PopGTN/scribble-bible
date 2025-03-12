import { Text, View, StyleSheet } from 'react-native';
import {Link, Stack} from "expo-router";

export default function LoginScreen() {
    return (
        <>
        <Stack.Screen options={{title: 'Scribble Bible', orientation: "all"}}/>
        <View style={styles.container}>
            <Text style={styles.text}>Scribble Bible</Text>
            <Link href="/home" style={styles.button}>
                Picture Editing
            </Link>
            <Link href="/bible" style={styles.button}>
                Bible App
            </Link>
        </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#25292e',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {        fontSize: 30,
        color: '#fff',
        paddingBottom: 20,
    },
    button: {
        fontSize: 20,
        textDecorationLine: 'underline',
        color: '#fff',
        paddingVertical: 20,
    },
});