import React, { useMemo } from 'react'
import { View } from 'react-native'

import createStyles from './styles';
import { useTheme } from '../../utils/theme';

const Button = () => {
    const theme = useTheme();
    const styles = useMemo(() => createStyles(theme), [theme]);
    const { style } = styles
    return (<>
        <View style={style} />
    </>
    )
}

export default Button