import { StyleSheet, Text, View} from 'react-native';
import BibleApiDAO from "@/models/BibleApiDAO";
import Button from "@/components/Button";

export default function index() {
    return (
        <>

            <View style={styles.container}>
                <Text style={styles.text}>Login</Text>
                <Button theme={"primary"} label={'Login'} onPress={() => {
                    let bibleapi = new BibleApiDAO()
                    let fetch = bibleapi.getTranslations()
                    alert("I am an alert box!");
                    console.log("date fetch: " + fetch);
                    alert("date fetch: " + fetch);
                }}/>
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
    text: {
        fontSize: 30,
        color: '#fff',
    },
    button: {
        fontSize: 20,
        textDecorationLine: 'underline',
        color: '#fff',
    },
});