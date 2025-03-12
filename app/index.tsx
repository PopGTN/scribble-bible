import { Text, View, StyleSheet } from 'react-native';
import {Link} from "expo-router";

export default function LoginScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Login</Text>
            <Link href="/home" style={styles.button}>
                Login
            </Link>
        </View>
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
    },
    button: {
        fontSize: 20,
        textDecorationLine: 'underline',
        color: '#fff',
    },
});