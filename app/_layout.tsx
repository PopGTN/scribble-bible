import {Stack, Tabs} from 'expo-router';
import {StatusBar} from "expo-status-bar";

export default function RootLayout() {
    return (
        /*
            <SQLiteProvider databaseName="bible.db" assetSource={{ assetId: require('@/assets/bible.db') }}>
        */
         <>
            <Stack>
                <Stack.Screen name="(example-tabs)" options={{headerShown: false}}/>
                <Stack.Screen name="+not-found"/>
                <Stack.Screen name="index" options={{title: 'Home',}}  />
                <Stack.Screen name="bible" options={{headerBackButtonMenuEnabled: true, orientation: 'all' }} />
            </Stack>
            <StatusBar style="light" />


        </>
        /*
            </SQLiteProvider>
        */

    );
}
