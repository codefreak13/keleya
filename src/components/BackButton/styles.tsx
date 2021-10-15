import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { defaultThemeProps } from '../../utils/theme'

const createStyles = (theme: defaultThemeProps) =>
    StyleSheet.create({
        headerStyle: {
            position: 'absolute',
            top: RFValue(30),
            left: RFValue(10),
        },
    });

export default createStyles