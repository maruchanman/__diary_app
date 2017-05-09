import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView
} from 'react-native';

import Styles from '../Settings/Styles.js'
import DiaryCard from '../Components/DiaryCard.js'
import Fetch from '../Actions/Fetch.js'

import Icon from 'react-native-vector-icons/FontAwesome'

const styles = Styles.Home

export default class Home extends Component {

  constructor(props) {
    super(props)
    this.state = {
      diaries: [],
      laoding: false
    }
  }

  componentDidMount() {
    Fetch.diaryFromUser(this.props.deviceID)
      .then(data => this.setState({diaries: data}))
  }

  componentWillReceiveProps(props) {
    Fetch.diaryFromUser(this.props.deviceID)
      .then(data => this.setState({diaries: data}))
  }

  render() {
    if (this.state.diaries.length > 0) {
      return (
        <ScrollView contentContainerStyle={styles.wrapper}>
          {Object.keys(this.state.diaries).sort((a, b) => a < b ? 1 : -1).map((diaryID) =>
            <DiaryCard
              key={diaryID}
              data={this.state.diaries[diaryID]}
              navigator={this.props.navigator}
            />
          )}
        </ScrollView>
      )
    } else {
      return (
        <View style={styles.tutorial}>
          <Icon name="long-arrow-up" size={50} style={styles.icon}/>
          <Text style={styles.message}>+をタップして日記を作成しましょう</Text>
        </View>
      )
    }
  }
}

