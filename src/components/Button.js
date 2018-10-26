import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from '../styles';

const Button = ({ text, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.btn_content}>
      <Text style={styles.btn_text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
