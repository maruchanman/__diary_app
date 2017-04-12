import React, {Component} from 'react'
import {
  View,
  Image,
  Text
} from 'react-native'

export default class DiaryCard extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <Image
          resizeMode="cover"
          source={{uri: this.props.image}}
          style={styles.image}>
        </Image>
      </View>
    )
  }
}

const styles = {
  wrapper: {
    width: 120,
    height: 120,
    margin: 1
  },
  image: {
    flex: 1,
    width: null,
    height: null
  },
  date: {
    fontSize: 24,
    color: 'red'
  }
}
