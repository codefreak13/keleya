import React, { FC, useMemo, useState } from 'react'
import { View, Image, Text } from 'react-native'
import { NavigationProp, ParamListBase } from '@react-navigation/native';
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

const validationSchema = Yup.object().shape({
    frequency: Yup.string()
        .required('frequency is required')
        .label('frequency')
});

const WorkoutTimes: FC<IProps> = ({ navigation }) => {
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
        "Once a week",
        "2 times a week",
        "3 times a week",
        "4 times a week",
        "5 times a week",
        "6 times a week",
        "7 times a week",
        "8 times a week",
        "9 times a week",
        "10 times a week",
    ];

    return (
        <View style={bodyStyle}>
            <Image source={WORKOUT_GOAL} style={imageStyle} />
            <Text style={textStyle}>How many times a week do{'\n'}you want to be active?</Text>

            <Formik
                initialValues={{ frequency: selectedItem }}
                onSubmit={() => navigation.navigate('Notification')}
                validationSchema={validationSchema}
            >
                {({ handleSubmit, values }) => (
                    <>
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
                        <Button title='Continue' buttonColor={'dark'} onPress={handleSubmit} buttonStyle={buttonStyle} />
                    </>
                )}
            </Formik>
            <BackButton navigation={navigation} />
            <Line />
        </View>
    )
}

export default WorkoutTimes
