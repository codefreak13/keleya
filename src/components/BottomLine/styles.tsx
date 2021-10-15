import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { defaultThemeProps } from '../../utils/theme'

const createStyles = (theme: defaultThemeProps) =>
    StyleSheet.create({
        style: {
            backgroundColor: theme.colors.BLACK,
            position: 'relative',
            bottom: RFValue(5),
            height: RFValue(4),
            width: '35%',
            alignSelf: 'center',
            borderRadius: RFValue(5)
        }
    });

export default createStyles