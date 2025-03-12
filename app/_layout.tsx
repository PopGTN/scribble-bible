import {Stack, Tabs} from 'expo-router';
import {StatusBar} from "expo-status-bar";

export default function RootLayout() {
    return (
        /*
            <SQLiteProvider databaseName="bible.db" assetSource={{ assetId: require('@/assets/bible.db') }}>
        */
        <>
            <Stack>
                <Stack.Screen name="(tabs)" options={{headerShown: false}}/>
                <Stack.Screen name="+not-found"/>
                <Stack.Screen name="login" options={{title: 'Login'}}/>
            </Stack>
            <StatusBar style="light" />
        </>
        /*
            </SQLiteProvider>
        */

    );
}
