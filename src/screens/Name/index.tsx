import React, { FC, useMemo } from 'react'
import { View, Image, Text, ScrollView, KeyboardAvoidingView } from 'react-native'
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import { Formik } from "formik";
import * as Yup from "yup";

import createStyles from './styles';
import { useTheme } from '../../utils/theme';
import { COUCH_SMILE } from '../../assets'
import { Button, Line, BackButton, TextInput } from '../../components'

interface IProps {
    navigation: NavigationProp<ParamListBase>
}

const validationSchema = Yup.object().shape({
    name: Yup.string()
        .required('name is required')
        .label('name')
});

const Name: FC<IProps> = ({ navigation }) => {
    const theme = useTheme();
    const styles = useMemo(() => createStyles(theme), [theme]);
    const { bodyStyle, buttonStyle, imageStyle, textStyle, details, error } = styles
    return (
        <Formik
            initialValues={{ name: 'ddddd' }}
            validationSchema={validationSchema}
            onSubmit={() => navigation.navigate('DueDate')}
        >
            {({ touched, errors, handleChange, handleBlur, handleSubmit, values }) => (
                <View style={bodyStyle}>
                    <Image source={COUCH_SMILE} style={imageStyle} />
                    <Text style={textStyle}>It's great that you're here! First{'\n'}things first, what should we{'\n'}call you?</Text>
                    <View style={details}>
                        <KeyboardAvoidingView>
                            <ScrollView
                                contentContainerStyle={{ flexGrow: 1 }}
                                showsVerticalScrollIndicator={false}
                                keyboardShouldPersistTaps="handled"
                            >
                                <TextInput
                                    placeholder="Your Name"
                                    onChangeText={handleChange('name')}
                                    onBlur={handleBlur('name')}
                                    value={values.name}
                                    textAlign='center'
                                />
                                {touched.name && errors.name && (
                                    <Text style={error}>{errors.name}</Text>
                                )}
                            </ScrollView>
                        </KeyboardAvoidingView>
                    </View>
                    <Button title='Continue' buttonColor={!values.name || errors.name ? 'grey' : 'dark'} disabled={!values.name || errors.name ? true : false} onPress={handleSubmit} buttonStyle={buttonStyle} />
                    <BackButton navigation={navigation} />
                    <Line />
                </View>
            )}
        </Formik>
    )
}

export default Name
