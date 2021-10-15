import React, { FC, useMemo } from 'react'
import { Pressable, Text, StyleProp, ViewStyle, TextStyle } from 'react-native'

import createStyles from './styles';
import { useTheme } from '../../utils/theme';

interface IProps {
	title: string
	buttonColor?: string
	buttonStyle?: StyleProp<ViewStyle>
	textStyle?: StyleProp<TextStyle>
	onPress?: () => void,
	disabled?: boolean
}

const Button: FC<IProps> = ({ title, buttonStyle, textStyle, buttonColor, onPress, disabled }) => {
	const theme = useTheme();
	const styles = useMemo(() => createStyles(theme), [theme]);

	return (
		<Pressable disabled={disabled} style={[styles.buttonStyle, buttonStyle, {
			backgroundColor: buttonColor == 'grey' ? theme.colors.WARM_GREY : theme.colors.PALE_TEAL
		}]}
			onPress={onPress}>
			<Text style={[styles.textStyle, textStyle]}>
				{title}
			</Text>
		</Pressable>
	)
}

export default Button
