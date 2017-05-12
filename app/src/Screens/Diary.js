import React from 'react'
import {
  View,
  Text
} from 'react-native'

import Styles from '../Settings/Styles.js'
import ImageSwiper from '../Items/ImageSwiper.js'
import Social from '../Items/Social.js'

const styles = Styles.Diary

class Diary extends React.Component {

  onTwitter() {
  }

  onFacebook() {
    console.log("facebook")
  }

  render() {
    return (
      <View style={styles.box}>
        <ImageSwiper photos={this.props.data.photos}/>
        <Social onTwitter={this.onTwitter} onFacebook={this.onFacebook}/>
        <Text style={styles.text}>{this.props.data.text}</Text>
      </View>
    )
  }

}

export default Diary
