import React, { FC, useMemo } from 'react';
import DatePicker from 'react-native-datepicker';

import createStyles from './styles';
import { useTheme } from '../../utils/theme';

interface IProps {
    action?: (date: string) => void
    date?: string
    placeholder?: string
}

const Picker: FC<IProps> = ({ action, date, placeholder }) => {
    const theme = useTheme();
    const styles = useMemo(() => createStyles(theme), [theme]);
    const { pickerStyle, dateInput, dateText } = styles

    return (
        <DatePicker
            style={pickerStyle}
            mode="date"
            date={date}
            placeholder={placeholder}
            format="MMM DD, YYYY"
            minDate="1906-01-01"
            androidMode="spinner"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            showIcon={false}
            customStyles={{
                dateInput,
                dateText
            }}
            onDateChange={action}
        />
    );
};

export default Picker
