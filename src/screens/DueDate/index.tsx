import React, { FC, useMemo, useState } from 'react'
import { View, Image, Text, } from 'react-native'
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import { Formik } from "formik";
import * as Yup from "yup";

import createStyles from './styles';
import { useTheme } from '../../utils/theme';
import { DUEDATE } from '../../assets'
import { Button, Line, BackButton, DatePicker } from '../../components'

interface IProps {
    navigation: NavigationProp<ParamListBase>
}

const validationSchema = Yup.object().shape({
    date: Yup.date()
        .required('Please choose date')
        .label('date')
});

const DueDate: FC<IProps> = ({ navigation }) => {
    const theme = useTheme();
    const styles = useMemo(() => createStyles(theme), [theme]);
    const { bodyStyle, buttonStyle, imageStyle, textStyle, details, error } = styles

    const [state, setstate] = useState({
        date: '',
    });

    return (
        <View style={bodyStyle}>
            <Image source={DUEDATE} style={imageStyle} />
            <Text style={textStyle}>When is your baby due, Sam?</Text>

            <Formik
                initialValues={{ date: '' }}
                validationSchema={validationSchema}
                onSubmit={() => { navigation.navigate('WorkoutTimes') }}
            >
                {({ touched, errors, handleChange, handleBlur, handleSubmit, values }) => (
                    <>
                        <View style={details}>
                            <DatePicker
                                date={values.date}
                                action={handleChange('date')}
                            />
                            {touched.date && errors.date && (
                                <Text style={error}>{errors.date}</Text>
                            )}
                        </View>
                        <Button title='Continue' buttonColor={!values.date || errors.date ? 'grey' : 'dark'} buttonStyle={buttonStyle} onPress={handleSubmit} />
                    </>
                )}
            </Formik>
            <BackButton navigation={navigation} />
            <Line />
        </View>
    )
}

export default DueDate
