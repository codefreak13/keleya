import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { defaultThemeProps } from '../../utils/theme'

const createStyles = (theme: defaultThemeProps) =>
    StyleSheet.create({
        bodyStyle: {
            flex: 3,
        },
        imageStyle: {
            flex: 1,
            resizeMode: 'cover',
            width: '100%',
            backgroundColor: 'purple'
        },
        textStyle: {
            marginTop: RFValue(10),
            fontSize: RFValue(20),
            textAlign: 'center'
        },
        details: {
            flex: 1,
            width: '75%',
            alignSelf: 'center',
        },
        buttonStyle: {
            marginBottom: RFValue(20),
        },
        error: {
            color: theme.colors.DANGER,
        },
        avoidingView: {
            flex: 1,
            justifyContent: 'space-between'
        }
    });

export default createStyles