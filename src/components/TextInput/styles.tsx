import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { defaultThemeProps } from '../../utils/theme'

const createStyles = (theme: defaultThemeProps) =>
    StyleSheet.create({
        iconStyle: {
            position: 'relative',
            left: RFValue(240),
            bottom: RFValue(15),
            marginTop: -RFValue(20)
        },
        base: {
            borderBottomWidth: 0.7,
            borderColor: theme.colors.WARM_GREY,
            padding: RFValue(7),
            fontSize: RFValue(14),
            width: '100%',
            alignSelf: 'center',
            paddingLeft: RFValue(20),
            marginVertical: RFValue(8),
            color: theme.colors.GREYISH_BROWN
        },
    });

export default createStyles