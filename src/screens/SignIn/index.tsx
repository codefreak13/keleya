import React, { FC, useMemo } from 'react'
import { View, Image, Text, ScrollView, KeyboardAvoidingView } from 'react-native'
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import { Formik } from "formik";
import * as Yup from "yup";

import createStyles from './styles';
import { useTheme } from '../../utils/theme';
import { AUTHENTICATION } from '../../assets'
import { Button, Line, BackButton, TextInput } from '../../components'
import { useTranslation } from 'react-i18next';

interface IProps {
    navigation: NavigationProp<ParamListBase>
}

const SignIn: FC<IProps> = ({ navigation }) => {
    const { t } = useTranslation()
    const theme = useTheme();
    const styles = useMemo(() => createStyles(theme), [theme]);
    const { bodyStyle, buttonStyle, imageStyle, textStyle, details, error, forgotText } = styles

    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .email(t('common:email_validation'))
            .required('Email is required')
            .label('Email'),
        password: Yup.string()
            .min(6, () => t('common:password_validation'))
            .required('Password is required')
            .label('Password'),
    });
    return (
        <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={validationSchema}
            onSubmit={() => navigation.navigate('Notification')}
        >
            {({ touched, errors, handleChange, handleBlur, handleSubmit, values }) => (
                <View style={bodyStyle}>
                    <Image source={AUTHENTICATION} style={imageStyle} />
                    <Text style={textStyle}>{t('signin:title')}</Text>
                    <KeyboardAvoidingView style={{ flex: 1 }}>
                        <ScrollView
                            contentContainerStyle={{ flexGrow: 1 }}
                            showsVerticalScrollIndicator={false}
                            keyboardShouldPersistTaps="handled"
                        >
                            <View style={details}>
                                <TextInput
                                    placeholder={t('common:email_placeholder')}
                                    onChangeText={handleChange('email')}
                                    onBlur={handleBlur('email')}
                                    value={values.email}
                                />
                                {touched.email && errors.email && (
                                    <Text style={error}>{errors.email}</Text>
                                )}
                                <TextInput
                                    placeholder={t('common:password_placeholder')}
                                    onChangeText={handleChange('password')}
                                    onBlur={handleBlur('password')}
                                    value={values.password}
                                    secureTextEntry
                                />
                                {touched.password && errors.password && (
                                    <Text style={error}>{errors.password}</Text>
                                )}
                            </View>
                            <Text style={forgotText}>{t('signin:forgotten_password')}</Text>
                            <Button title={t('signin:btn_title')} buttonColor={!values.email || !values.password || errors.password || errors.email ? 'grey' : 'dark'} disabled={!values.email || !values.password || errors.password || errors.email ? true : false} onPress={handleSubmit} buttonStyle={buttonStyle} />
                        </ScrollView>
                    </KeyboardAvoidingView>
                    <BackButton navigation={navigation} />
                    <Line />
                </View>
            )}
        </Formik>
    )
}

export default SignIn
