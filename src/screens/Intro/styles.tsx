import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { defaultThemeProps } from '../../utils/theme'

const createStyles = (theme: defaultThemeProps) =>
    StyleSheet.create({
        bodyStyle: {
            flex: 1,
            paddingTop: RFValue(20)
        },
        imageStyle: {
            flex: 4,
            resizeMode: 'contain',
            alignItems: 'center',
            paddingTop: RFValue(30),
            height: '120%',
        },
        logoStyle: {
            height: RFValue(100),
            width: RFValue(100),
            resizeMode: 'contain'
        },
        textStyle: {
            marginTop: RFValue(10),
            fontSize: RFValue(18),
            fontWeight: '500',
            textAlign: 'center',
            color: theme.colors.GREYISH_BROWN
        },
        footer: {
            flex: 1,
        },
        loginTextStyle: {
            fontSize: RFValue(17),
            marginTop: RFValue(10),
            fontWeight: 'bold',
            textAlign: 'center',
            color: theme.colors.GREYISH_BROWN
        },
    });

export default createStyles

