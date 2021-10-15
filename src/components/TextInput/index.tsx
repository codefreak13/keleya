import React, { FC, useMemo, useState } from 'react';
import { TextInput, StyleProp, ViewStyle } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

import createStyles from './styles';
import { useTheme } from '../../utils/theme';
import { ColorValue } from '../../utils/colors'

interface IProps {
    onChangeText: (e: string) => void
    onBlur: (e: any) => void
    placeholder: string;
    placeholderTextColor?: ColorValue | any;
    style?: StyleProp<ViewStyle>;
    value: string | undefined
    secureTextEntry?: boolean,
    textAlign?: "center" | "right" | "left" | undefined
}

const BaseTextInput: FC<IProps> = ({ onChangeText, onBlur, placeholder, placeholderTextColor, style, value, secureTextEntry, textAlign }) => {
    const theme = useTheme();
    const styles = useMemo(() => createStyles(theme), [theme]);
    const { iconStyle, base } = styles

    const [isSecure, setIsSecure] = useState(false);

    const onToggle = () => setIsSecure(previousState => !previousState);

    const toggleIcon = <Icon name={isSecure ? "eye-with-line" : 'eye'} size={20} color={theme.colors.BLACK} onPress={onToggle} style={iconStyle} />

    return (
        <>
            <TextInput
                onChangeText={onChangeText}
                onBlur={onBlur}
                placeholder={placeholder}
                placeholderTextColor={placeholderTextColor || theme.colors.WARM_GREY}
                style={[base, style]}
                value={value}
                secureTextEntry={secureTextEntry ? isSecure : false}
                textAlign={textAlign}
            />
            {secureTextEntry && toggleIcon}
        </>
    )
}

export default BaseTextInput;
