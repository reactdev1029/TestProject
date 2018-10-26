import React from 'react';
import DatePicker from 'react-native-datepicker';
import styles from '../styles';

const DatePick = ({ date, onDateChange }) => {
  return (
    <DatePicker
      style={styles.dtp_content}
      date={date}
      mode="date"
      placeholder="Select date"
      format="YYYY-MM-DD"
      confirmBtnText="Confirm"
      cancelBtnText="Cancel"
      showIcon={false}
      onDateChange={onDateChange}
    />
  );
};

export default DatePick;
