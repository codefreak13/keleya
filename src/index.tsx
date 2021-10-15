import React from 'react';
import { StatusBar, View, SafeAreaView } from 'react-native';
import Screens from './navigation';

export default function App() {
    return (
        <SafeAreaView style={{ flex: 1, }}>
            <StatusBar
                barStyle='dark-content'
                backgroundColor="#EAEDF4"
                translucent={true}
            />
            <Screens />
        </SafeAreaView>
    );
}
