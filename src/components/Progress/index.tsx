import React, { FC, useMemo } from 'react'
import { View, StyleProp, ViewStyle } from 'react-native'

import createStyles from './styles';
import { useTheme } from '../../utils/theme';

interface IProps {
	style: StyleProp<ViewStyle>;
}

const Progress: FC<IProps> = ({ style }) => {
	return (
		<View style={[style]} />
	)
}

const ProgressIndicator = () => {
	const theme = useTheme();
	const styles = useMemo(() => createStyles(theme), [theme]);
	const { progressIcon, main } = styles
	return (
		<View style={main}>
			<Progress style={[progressIcon, { backgroundColor: theme.colors.PALE_TEAL }]} />
			<Progress style={progressIcon} />
			<Progress style={progressIcon} />
		</View>
	)
}

export default ProgressIndicator
