import { StyleSheet, Dimensions } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { defaultThemeProps } from '../../utils/theme'

const { width: screenWidth } = Dimensions.get('window');

const createStyles = (theme: defaultThemeProps) =>
    StyleSheet.create({
        pickerStyle: {
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: RFValue(5),
            backgroundColor: theme.colors.LIGHT_GREY,
            height: RFValue(32),
            width: RFValue(screenWidth / 4),
            alignSelf: 'center'
        },
        dateInput: {
            borderWidth: 0,
            alignItems: 'flex-start',
        },
        dateText: {
            color: theme.colors.BLUE,
            alignSelf: 'center'
        },
    });

export default createStyles