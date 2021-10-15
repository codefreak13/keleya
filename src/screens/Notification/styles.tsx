import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { defaultThemeProps } from '../../utils/theme'

const createStyles = (theme: defaultThemeProps) =>
    StyleSheet.create({
        imageStyle: {
            flex: 1,
            resizeMode: 'cover',
            width: '100%',
            paddingTop: 50,
            alignItems: 'center',
            justifyContent: 'space-between'
        },
        titleStyle: {
            alignItems: 'center'
        },
        textStyle: {
            fontSize: RFValue(20),
            alignSelf: 'center',
            textAlign: 'center',
            marginVertical: RFValue(20)
        },
        skipTextStyle: {
            fontSize: RFValue(15),
            fontWeight: 'bold',
            marginVertical: RFValue(25)
        },
        buttonStyle: {
            marginBottom: RFValue(20),
        },
    });

export default createStyles