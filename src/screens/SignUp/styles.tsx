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
        },
        textStyle: {
            marginTop: RFValue(10),
            fontSize: RFValue(18),
            textAlign: 'center',
            color: theme.colors.GREYISH_BROWN
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
            color: theme.colors.BUBBLE_GUM,
        },
        avoidingView: {
            flex: 1,
            justifyContent: 'space-between'
        }
    });

export default createStyles