import React, { FC, useMemo } from 'react'
import { View, Image, Text, ScrollView, KeyboardAvoidingView } from 'react-native'
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { Formik } from "formik";
import * as Yup from "yup";

import createStyles from './styles';
import { useTheme } from '../../utils/theme';
import { AUTHENTICATION } from '../../assets'
import { Button, Line, BackButton, TextInput, CheckBox } from '../../components'

interface IProps {
    navigation: NavigationProp<ParamListBase>
}

const SignUp: FC<IProps> = ({ navigation }) => {
    const { t } = useTranslation()
    const theme = useTheme();
    const styles = useMemo(() => createStyles(theme), [theme]);
    const { bodyStyle, buttonStyle, imageStyle, textStyle, details, error, avoidingView } = styles

    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .email(t('common:email_validation'))
            .required('Email is required')
            .label('Email'),
        password: Yup.string()
            .min(6, () => t('common:password_validation'))
            .required('Password is required')
            .label('Password'),
        privacyCheck: Yup.boolean()
            .oneOf([true], t('signup:privacy_policy_validation'))
            .required()
            .label('Privacy'),
        termsCheck: Yup.boolean()
            .oneOf([true], t('signup:terms_&_conditions_validation'))
            .required()
            .label('Terms'),
    });

    return (
        <Formik
            initialValues={{ email: '', password: '', privacyCheck: false, termsCheck: false }}
            validationSchema={validationSchema}
            onSubmit={() => { navigation.navigate('Name') }}>
            {({ touched, errors, handleChange, handleBlur, handleSubmit, values: { email, password, privacyCheck, termsCheck }, setFieldValue }) => (
                <View style={bodyStyle}>
                    <Image source={AUTHENTICATION} style={imageStyle} />
                    <Text style={textStyle}>{t('signup:title')}</Text>

                    <View style={details}>
                        <KeyboardAvoidingView style={avoidingView}>
                            <ScrollView
                                showsVerticalScrollIndicator={false}
                                keyboardShouldPersistTaps="handled"
                                contentContainerStyle={{ flexGrow: 1 }}
                            >
                                <View style={{ width: '100%' }}>
                                    <TextInput
                                        placeholder={t('common:email_placeholder')}
                                        onChangeText={handleChange('email')}
                                        onBlur={handleBlur('email')}
                                        value={email}
                                    />
                                    {touched.email && errors.email && (
                                        <Text style={error}>{errors.email}</Text>
                                    )}
                                    <TextInput
                                        placeholder={t('common:password_placeholder')}
                                        onChangeText={handleChange('password')}
                                        onBlur={handleBlur('password')}
                                        value={password}
                                        secureTextEntry
                                    />
                                    {touched.password && errors.password && (
                                        <Text style={error}>{errors.password}</Text>
                                    )}
                                    <CheckBox title={t('signup:privacy_policy')} check={privacyCheck} toggleCheck={() => setFieldValue('privacyCheck', !privacyCheck)} />
                                    {touched.privacyCheck && errors.privacyCheck && (
                                        <Text style={error}>{errors.privacyCheck}</Text>
                                    )}
                                    <CheckBox title={t('signup:terms')} check={termsCheck} toggleCheck={() => setFieldValue('termsCheck', !termsCheck)} />
                                    {touched.termsCheck && errors.termsCheck && (
                                        <Text style={error}>{errors.termsCheck}</Text>
                                    )}
                                </View>
                            </ScrollView>
                            <Button title={t('signup:btn_title')} buttonColor={!email || !password || errors.password || errors.email || !privacyCheck || !termsCheck ? 'grey' : 'dark'} onPress={handleSubmit} buttonStyle={buttonStyle} />
                        </KeyboardAvoidingView>
                    </View>

                    <BackButton navigation={navigation} />
                    <Line />
                </View>
            )}
        </Formik>
    )
}

export default SignUp
