import React, { FC, useMemo } from 'react'
import { View, Text } from 'react-native'
import { CheckBox } from 'react-native-elements';

import createStyles from './styles';
import { useTheme } from '../../utils/theme';

interface IProps {
    title: string
    check: boolean,
    toggleCheck: () => void
}

const CheckBoxComponent: FC<IProps> = ({ title, check, toggleCheck }) => {
    const theme = useTheme();
    const styles = useMemo(() => createStyles(theme), [theme]);
    const { main, textStyle } = styles

    return (
        <View style={main}>
            <CheckBox
                checked={check}
                uncheckedColor={theme.colors.LIGHT_TEAL}
                checkedColor={theme.colors.PALE_TEAL}
                onPress={toggleCheck}
            />
            <Text style={textStyle}>{title}</Text>
        </View>
    )
}

export default CheckBoxComponent
