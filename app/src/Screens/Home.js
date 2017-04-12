import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';

import Styles from '../Settings/Styles.js'
import DiaryCard from '../Components/DiaryCard.js'

export default class Home extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        {this.props.data.map((diary) => <DiaryCard data={diary}/>)}
      </View>
    )
  }
}

const styles = {
  wrapper: {
    padding: 10
  }
}
