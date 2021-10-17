import React, { useMemo } from 'react'
import { Text, View, ImageBackground } from 'react-native'
import Icon from 'react-native-vector-icons/EvilIcons';
import { useTranslation } from 'react-i18next';

import createStyles from './styles';
import { useTheme } from '../../utils/theme';
import { NOTIFICATIONS_IMAGE } from '../../assets'
import { Button, Line } from '../../components'

const WorkoutTimes = () => {
    const { t } = useTranslation()
    const theme = useTheme();
    const styles = useMemo(() => createStyles(theme), [theme]);
    const { buttonStyle, titleStyle, imageStyle, textStyle, skipTextStyle } = styles

    return (
        <>
            <ImageBackground source={NOTIFICATIONS_IMAGE} style={imageStyle} >
                <View style={titleStyle}>
                    <Icon name="bell" size={70} color={theme.colors.BLACK} />
                    <Text style={textStyle}>{t('notification:title')}</Text>
                </View>
                <Text style={skipTextStyle}>{t('notification:skip')}</Text>
            </ImageBackground>
            <Button title={t('notification:btn_title')} buttonColor={'dark'} onPress={() => { }} buttonStyle={buttonStyle} />
            <Line />
        </>
    )
}

export default WorkoutTimes
