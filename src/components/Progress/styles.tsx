import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { defaultThemeProps } from '../../utils/theme'

const createStyles = (theme: defaultThemeProps) =>
    StyleSheet.create({
        main: {
            flexDirection: 'row',
            alignSelf: 'center',
            marginTop: RFValue(15)
        },
        progressIcon: {
            width: RFValue(9),
            height: RFValue(9),
            borderRadius: RFValue(100),
            backgroundColor: theme.colors.LIGHT_TEAL,
            marginHorizontal: RFValue(3.5),
        }
    });

export default createStyles