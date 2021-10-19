import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { defaultThemeProps } from '../../utils/theme'

const createStyles = (theme: defaultThemeProps) =>
    StyleSheet.create({
        buttonStyle: {
            width: '75%',
            alignSelf: 'center',
            padding: RFValue(10),
            borderRadius: RFValue(5),
            alignItems: 'center'
        },
        textStyle: {
            color: theme.colors.WHITE,
            fontSize: RFValue(18),
            textAlign: 'center'
        }
    });

export default createStyles