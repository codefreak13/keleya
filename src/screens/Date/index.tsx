import React, { FC, useMemo, useState } from 'react'
import { View, Image, Text, } from 'react-native'
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { Formik } from "formik";
import * as Yup from "yup";

import createStyles from './styles';
import { useTheme } from '../../utils/theme';
import { DUEDATE } from '../../assets'
import { Button, Line, BackButton, DatePicker } from '../../components'

interface IProps {
    navigation: NavigationProp<ParamListBase>
}

const Date: FC<IProps> = ({ navigation }) => {
    const { t } = useTranslation()
    const theme = useTheme();
    const styles = useMemo(() => createStyles(theme), [theme]);
    const { bodyStyle, buttonStyle, imageStyle, textStyle, details, error } = styles

    const validationSchema = Yup.object().shape({
        date: Yup.date()
            .required(t('date:date_validation'))
            .label('date')
    });
    return (
        <Formik
            initialValues={{ date: '' }}
            validationSchema={validationSchema}
            onSubmit={() => { navigation.navigate('Workout') }}
        >
            {({ touched, errors, handleChange, handleSubmit, values }) => (
                <View style={bodyStyle}>
                    <Image source={DUEDATE} style={imageStyle} />
                    <Text style={textStyle}>{t('date:title')}</Text>

                    <View style={details}>
                        <DatePicker
                            date={values.date}
                            action={handleChange('date')}
                        />
                        {touched.date && errors.date && (
                            <Text style={error}>{errors.date}</Text>
                        )}
                    </View>
                    <Button title={t('common:btn_title')} buttonColor={!values.date || errors.date ? 'grey' : 'dark'} buttonStyle={buttonStyle} onPress={handleSubmit} />
                    <BackButton navigation={navigation} />
                    <Line />
                </View>
            )}
        </Formik>
    )
}

export default Date
