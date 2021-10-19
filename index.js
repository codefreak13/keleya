/**
 * @format
 */

import {AppRegistry, LogBox} from 'react-native';
import App from './src';
import {name as appName} from './app.json';

LogBox.ignoreLogs(['Please', 'Warning:', 'DatePickerAndroid', 'Animated']);

AppRegistry.registerComponent(appName, () => App);
