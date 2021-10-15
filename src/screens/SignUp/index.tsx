import React, { FC, useMemo, useState } from 'react'
import { View, Image, Text, ScrollView, KeyboardAvoidingView } from 'react-native'
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import { Formik } from "formik";
import * as Yup from "yup";

import createStyles from './styles';
import { useTheme } from '../../utils/theme';
import { AUTHENTICATION } from '../../assets'
import { Button, Line, BackButton, TextInput, CheckBox } from '../../components'

interface IProps {
    navigation: NavigationProp<ParamListBase>
}

const validationSchema = Yup.object().shape({
    email: Yup.string()
        .email('Please enter valid email')
        .required('Email is required')
        .label('Email'),
    password: Yup.string()
        .min(6, ({ min }) => `Password must be at least ${min} characters`)
        .required('Password is required')
        .label('Password'),
});

const SignUp: FC<IProps> = ({ navigation }) => {
    const theme = useTheme();
    const styles = useMemo(() => createStyles(theme), [theme]);
    const { bodyStyle, buttonStyle, imageStyle, textStyle, details, error, avoidingView } = styles

    const [state, setstate] = useState({ check: false });
    const { check } = state

    // const isChecked = ()=>setstate({})

    return (
        <Formik
            initialValues={{ email: 'a@g.co', password: 'djdjdjdjj' }}
            validationSchema={validationSchema}
            onSubmit={() => { navigation.navigate('Name') }}>
            {({ touched, errors, handleChange, handleBlur, handleSubmit, values }) => (
                <View style={bodyStyle}>
                    <Image source={AUTHENTICATION} style={imageStyle} />
                    <Text style={textStyle}>Add your details below to set{'\n'}up an account</Text>

                    <View style={details}>
                        <KeyboardAvoidingView style={avoidingView}>
                            <ScrollView
                                showsVerticalScrollIndicator={false}
                                keyboardShouldPersistTaps="handled"
                                contentContainerStyle={{ flexGrow: 1 }}
                            >
                                <View style={{ width: '100%' }}>
                                    <TextInput
                                        placeholder="example@gmail.com"
                                        onChangeText={handleChange('email')}
                                        onBlur={handleBlur('email')}
                                        value={values.email}
                                    />
                                    {touched.email && errors.email && (
                                        <Text style={error}>{errors.email}</Text>
                                    )}
                                    <TextInput
                                        placeholder="Enter a password"
                                        onChangeText={handleChange('password')}
                                        onBlur={handleBlur('password')}
                                        value={values.password}
                                        secureTextEntry
                                    />
                                    {touched.password && errors.password && (
                                        <Text style={error}>{errors.password}</Text>
                                    )}
                                    <CheckBox title="I've read the privacy policy" check={check} />
                                    <CheckBox title="I accept the terms & conditions and Keleya's advice" check={check} />
                                </View>
                            </ScrollView>
                            <Button title='Create account' buttonColor={!values.email || !values.password || errors.password || errors.email ? 'grey' : 'dark'} disabled={!values.email || !values.password || errors.password || errors.email ? true : false} onPress={handleSubmit} buttonStyle={buttonStyle} />
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
