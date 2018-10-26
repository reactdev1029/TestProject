import React, { Component } from 'react';
import { View } from 'react-native';
import DatePick from '../components/DatePick';
import Button from '../components/Button';
import styles from '../styles';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      date: '',
    };
  }

  onDateChange = date => {
    this.setState({ date });
  };

  onPress = name => {
    if (name === 'reset') {
      this.setState({ date: '' });
    } else {
      let date = new Date();
      this.setState({ date });
    }
  };

  render() {
    const { date } = this.state;
    return (
      <View style={[styles.container, styles.main_content]}>
        <DatePick date={date} onDateChange={this.onDateChange.bind(this)} />
        <View style={styles.btn_view}>
          <Button text={'Today'} onPress={() => this.onPress('today')} />
          <Button text={'Reset'} onPress={() => this.onPress('reset')} />
        </View>
      </View>
    );
  }
}
