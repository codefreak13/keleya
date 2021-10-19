import React, { FC, useMemo, useState } from 'react'
import { View, Image, Text } from 'react-native'
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { Formik } from "formik";
import * as Yup from "yup";
import {
    WheelPicker,
} from "react-native-wheel-picker-android";

import createStyles from './styles';
import { useTheme } from '../../utils/theme';
import { WORKOUT_GOAL } from '../../assets'
import { Button, Line, BackButton } from '../../components'

interface IProps {
    navigation: NavigationProp<ParamListBase>
}


const Workout: FC<IProps> = ({ navigation }) => {
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
        t('workout:once'),
        t('workout:twice'),
        t('workout:thrice'),
        t('workout:four'),
        t('workout:five'),
        t('workout:six'),
        t('workout:seven'),
        t('workout:eight'),
        t('workout:nine'),
        t('workout:ten'),
    ];

    const validationSchema = Yup.object().shape({
        frequency: Yup.string()
            .required(t('workout:freq_validation'))
            .label('frequency')
    });
    return (
        <Formik
            initialValues={{ frequency: selectedItem }}
            onSubmit={() => navigation.navigate('Success')}
            validationSchema={validationSchema}
        >
            {({ handleSubmit, values }) => (
                <View style={bodyStyle}>
                    <Image source={WORKOUT_GOAL} style={imageStyle} />
                    <Text style={textStyle}>{t('workout:title')}</Text>
                    <View style={details}>
                        <WheelPicker
                            initPosition={selectedItem}
                            selectedItem={values.frequency}
                            data={wheelPickerData}
                            onItemSelected={onItemSelected}
                            hideIndicator
                            selectedItemTextColor={theme.colors.GREYISH_BROWN}
                        />
                        <View style={selectedText} />
                    </View>
                    <Button title={t('common:btn_title')} buttonColor={'dark'} onPress={handleSubmit} buttonStyle={buttonStyle} />
                    <BackButton navigation={navigation} />
                    <Line />
                </View>
            )}
        </Formik>
    )
}

export default Workout
