import React, { FC, useMemo } from 'react'
import { View, ImageBackground, Image, Text, Pressable } from 'react-native'
import { NavigationProp, ParamListBase } from '@react-navigation/native';

import createStyles from './styles';
import { useTheme } from '../../utils/theme';
import { KELEYA_LOGO, INTRO_IMAGE } from '../../assets'
import { Button, Line, Progress } from '../../components'

interface IProps {
    navigation: NavigationProp<ParamListBase>
}

const Intro: FC<IProps> = ({ navigation }) => {
    const theme = useTheme();
    const styles = useMemo(() => createStyles(theme), [theme]);
    const { bodyStyle, logoStyle, imageStyle, textStyle, footer, loginTextStyle } = styles
    return (
        <View style={bodyStyle}>
            <ImageBackground source={INTRO_IMAGE} style={imageStyle}>
                <Image source={KELEYA_LOGO} style={logoStyle} />
                <Text style={textStyle}>For a fit and relaxed {'\n'} pregnancy</Text>
            </ImageBackground>
            <View style={footer}>
                <Button title='Get started' buttonColor='teal' onPress={() => navigation.navigate('SignUp')} />
                <Pressable onPress={() => navigation.navigate('SignIn')} >
                    <Text style={loginTextStyle}>Or login</Text>
                    <Progress />
                </Pressable>
            </View>
            <Line />
        </View>
    )
}

export default Intro
