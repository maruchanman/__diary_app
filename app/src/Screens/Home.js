import React, { Component } from 'react';
import {
  ScrollView
} from 'react-native';

import Styles from '../Settings/Styles.js'
import DiaryCard from '../Components/DiaryCard.js'
import Fetch from '../Actions/Fetch.js'

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
    return (
      <ScrollView contentContainerStyle={styles.wrapper}>
        {Object.keys(this.state.diaries).map((diaryID) =>
          <DiaryCard
            key={diaryID} data={this.state.diaries[diaryID]} navigator={this.props.navigator}/>)}
      </ScrollView>
    )
  }
}
