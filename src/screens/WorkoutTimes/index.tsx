import React, { FC, useMemo, useState } from 'react'
import { View, Image, Text } from 'react-native'
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import { Formik } from "formik";
import * as Yup from "yup";
import {
    WheelPicker,
} from "react-native-wheel-picker-android";
import { useTranslation } from 'react-i18next';

import createStyles from './styles';
import { useTheme } from '../../utils/theme';
import { WORKOUT_GOAL } from '../../assets'
import { Button, Line, BackButton } from '../../components'

interface IProps {
    navigation: NavigationProp<ParamListBase>
}


const WorkoutTimes: FC<IProps> = ({ navigation }) => {
    const { t } = useTranslation()
    const theme = useTheme();
    const styles = useMemo(() => createStyles(theme), [theme]);
    const { bodyStyle, buttonStyle, imageStyle, textStyle, details, selectedText } = styles

    const [state, setstate] = useState({
        selectedItem: 2,
    });

    const { selectedItem } = state

    const onItemSelected = (selectedItem: number) => {
        setstate({ selectedItem });
    };

    const wheelPickerData = [
        t('activetimes:once'),
        t('activetimes:twice'),
        t('activetimes:thrice'),
        t('activetimes:four'),
        t('activetimes:five'),
        t('activetimes:six'),
        t('activetimes:seven'),
        t('activetimes:eight'),
        t('activetimes:nine'),
        t('activetimes:ten'),
    ];

    const validationSchema = Yup.object().shape({
        frequency: Yup.string()
            .required(t('activetimes:freq_validation'))
            .label('frequency')
    });
    return (
        <Formik
            initialValues={{ frequency: selectedItem }}
            onSubmit={() => navigation.navigate('Notification')}
            validationSchema={validationSchema}
        >
            {({ handleSubmit, values }) => (
                <View style={bodyStyle}>
                    <Image source={WORKOUT_GOAL} style={imageStyle} />
                    <Text style={textStyle}>{t('activetimes:title')}</Text>
                    <View style={details}>
                        <WheelPicker
                            initPosition={selectedItem}
                            selectedItem={values.frequency}
                            data={wheelPickerData}
                            onItemSelected={onItemSelected}
                            hideIndicator
                            selectedItemTextColor={theme.colors.BLACK}
                        />
                        <View style={selectedText} />
                    </View>
                    <Button title={t('activetimes:btn_title')} buttonColor={'dark'} onPress={handleSubmit} buttonStyle={buttonStyle} />
                    <BackButton navigation={navigation} />
                    <Line />
                </View>
            )}
        </Formik>
    )
}

export default WorkoutTimes
