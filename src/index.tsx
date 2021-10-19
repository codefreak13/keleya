import React from 'react';
import { StatusBar, SafeAreaView } from 'react-native';
import Screens from './navigation';
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next'
import i18n from './i18n'
import { store } from './redux';

import ThemeProvider from './utils/theme';

export default function App() {
    return (
        <ThemeProvider>
            <Provider store={store}>
                <I18nextProvider i18n={i18n}>
                    <SafeAreaView style={{ flex: 1, }}>
                        <StatusBar
                            barStyle='dark-content'
                            backgroundColor="#E5E9ED"
                            translucent={true}
                        />
                        <Screens />
                    </SafeAreaView>
                </I18nextProvider>
            </Provider>
        </ThemeProvider>
    );
}
