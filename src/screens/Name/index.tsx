import React, { FC, useMemo } from 'react'
import { View, Image, Text, ScrollView, KeyboardAvoidingView } from 'react-native'
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import { Formik } from "formik";
import * as Yup from "yup";
import { useTranslation } from 'react-i18next';

import createStyles from './styles';
import { useTheme } from '../../utils/theme';
import { COUCH_SMILE } from '../../assets'
import { Button, Line, BackButton, TextInput } from '../../components'

interface IProps {
    navigation: NavigationProp<ParamListBase>
}

const Name: FC<IProps> = ({ navigation }) => {
    const { t } = useTranslation()
    const theme = useTheme();
    const styles = useMemo(() => createStyles(theme), [theme]);
    const { bodyStyle, buttonStyle, imageStyle, textStyle, details, error } = styles

    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .required(t('name:name_validation'))
            .label('name')
    });

    return (
        <Formik
            initialValues={{ name: '' }}
            validationSchema={validationSchema}
            onSubmit={() => navigation.navigate('DueDate')}
        >
            {({ touched, errors, handleChange, handleBlur, handleSubmit, values }) => (
                <View style={bodyStyle}>
                    <Image source={COUCH_SMILE} style={imageStyle} />
                    <Text style={textStyle}>{t('name:title')}</Text>
                    <View style={details}>
                        <KeyboardAvoidingView>
                            <ScrollView
                                contentContainerStyle={{ flexGrow: 1 }}
                                showsVerticalScrollIndicator={false}
                                keyboardShouldPersistTaps="handled">
                                <TextInput
                                    placeholder={t('name:name_placeholder')}
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
                    <Button title={t('common:btn_title')} buttonColor={!values.name || errors.name ? 'grey' : 'dark'} onPress={handleSubmit} buttonStyle={buttonStyle} />
                    <BackButton navigation={navigation} />
                    <Line />
                </View>
            )}
        </Formik>
    )
}

export default Name
