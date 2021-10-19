import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { defaultThemeProps } from '../../utils/theme'

const createStyles = (theme: defaultThemeProps) =>
    StyleSheet.create({
        main: {
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: -RFValue(10),
            width: '100%',
            marginBottom: -RFValue(10)
        },
        textStyle: {
            marginLeft: -RFValue(10),
            width: '85%',
            flexWrap: 'wrap',
            color: theme.colors.GREYISH_BROWN
        }
    });

export default createStyles