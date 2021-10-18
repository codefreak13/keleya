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
                checkedColor="#469D8E"
                uncheckedColor="#469D8E"
                onPress={toggleCheck}
            />
            <Text style={textStyle}>{title}</Text>
        </View>
    )
}

export default CheckBoxComponent
