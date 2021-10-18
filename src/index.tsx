import React from 'react';
import { StatusBar, SafeAreaView } from 'react-native';
import Screens from './navigation';
import { I18nextProvider } from 'react-i18next'
import i18n from './i18n'

export default function App() {
    return (
        <I18nextProvider i18n={i18n}>
            <SafeAreaView style={{ flex: 1, }}>
                <StatusBar
                    barStyle='dark-content'
                    backgroundColor="#EAEDF4"
                    translucent={true}
                />
                <Screens />
            </SafeAreaView>
        </I18nextProvider>
    );
}
