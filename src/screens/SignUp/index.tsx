import React, { FC, useMemo, useState } from 'react'
import { View, Image, Text, ScrollView, KeyboardAvoidingView } from 'react-native'
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import { Formik } from "formik";
import * as Yup from "yup";

import createStyles from './styles';
import { useTheme } from '../../utils/theme';
import { AUTHENTICATION } from '../../assets'
import { Button, Line, BackButton, TextInput, CheckBox } from '../../components'
import { useTranslation } from 'react-i18next';

interface IProps {
    navigation: NavigationProp<ParamListBase>
}

const SignUp: FC<IProps> = ({ navigation }) => {
    const { t } = useTranslation()
    const theme = useTheme();
    const styles = useMemo(() => createStyles(theme), [theme]);
    const { bodyStyle, buttonStyle, imageStyle, textStyle, details, error, avoidingView } = styles

    const [state, setstate] = useState({ check: false });
    const { check } = state

    // const isChecked = ()=>setstate({})
    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .email(t('signup:email_validation'))
            .required('Email is required')
            .label('Email'),
        password: Yup.string()
            .min(6, () => t('signup:password_validation'))
            .required('Password is required')
            .label('Password'),
    });

    return (
        <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={validationSchema}
            onSubmit={() => { navigation.navigate('Name') }}>
            {({ touched, errors, handleChange, handleBlur, handleSubmit, values }) => (
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
                                        placeholder={t('signup:email_placeholder')}
                                        onChangeText={handleChange('email')}
                                        onBlur={handleBlur('email')}
                                        value={values.email}
                                    />
                                    {touched.email && errors.email && (
                                        <Text style={error}>{errors.email}</Text>
                                    )}
                                    <TextInput
                                        placeholder={t('signup:password_placeholder')}
                                        onChangeText={handleChange('password')}
                                        onBlur={handleBlur('password')}
                                        value={values.password}
                                        secureTextEntry
                                    />
                                    {touched.password && errors.password && (
                                        <Text style={error}>{errors.password}</Text>
                                    )}
                                    <CheckBox title={t('signup:privacy_policy')} check={check} />
                                    <CheckBox title={t('signup:terms')} check={check} />
                                </View>
                            </ScrollView>
                            <Button title={t('signup:btn_title')} buttonColor={!values.email || !values.password || errors.password || errors.email ? 'grey' : 'dark'} onPress={handleSubmit} buttonStyle={buttonStyle} />
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
