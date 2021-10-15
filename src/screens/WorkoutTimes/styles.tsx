import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { defaultThemeProps } from '../../utils/theme'

const createStyles = (theme: defaultThemeProps) =>
    StyleSheet.create({
        bodyStyle: {
            flex: 1,
        },
        imageStyle: {
            flex: 4,
            resizeMode: 'cover',
            width: '100%',
        },
        textStyle: {
            position: 'absolute',
            zIndex: 10,
            top: RFValue(70),
            fontSize: RFValue(20),
            alignSelf: 'center',
            textAlign: 'center'
        },
        details: {
            flex: 1,
            alignSelf: 'center',
        },
        buttonStyle: {
            marginBottom: RFValue(20),
        },
        selectedText: {
            backgroundColor: theme.colors.LIGHT_GREY,
            width: RFValue(200),
            height: RFValue(28),
            position: 'absolute',
            top: RFValue(38),
            opacity: 0.8,
            borderRadius: RFValue(7),
            alignSelf: 'center',
            zIndex: -10
        },
        error: {
            color: theme.colors.DANGER
        }
    });

export default createStyles