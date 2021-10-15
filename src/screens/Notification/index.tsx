import React, { useMemo } from 'react'
import { Text, View, ImageBackground } from 'react-native'
import Icon from 'react-native-vector-icons/EvilIcons';

import createStyles from './styles';
import { useTheme } from '../../utils/theme';
import { NOTIFICATIONS_IMAGE } from '../../assets'
import { Button, Line } from '../../components'

const WorkoutTimes = () => {
    const theme = useTheme();
    const styles = useMemo(() => createStyles(theme), [theme]);
    const { buttonStyle, titleStyle, imageStyle, textStyle, skipTextStyle } = styles

    return (
        <>
            <ImageBackground source={NOTIFICATIONS_IMAGE} style={imageStyle} >
                <View style={titleStyle}>
                    <Icon name="bell" size={70} color={theme.colors.BLACK} />
                    <Text style={textStyle}>Get notifications to boost{'\n'}your motivation</Text>
                </View>
                <Text style={skipTextStyle}>Skip</Text>
            </ImageBackground>
            <Button title='Allow notifications' buttonColor={'dark'} onPress={() => { }} buttonStyle={buttonStyle} />
            <Line />
        </>
    )
}

export default WorkoutTimes
