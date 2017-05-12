import React from 'react'
import {
  View,
  Image,
  TouchableWithoutFeedback
} from 'react-native'
import Styles from '../Settings/Styles.js'
import Icon from 'react-native-vector-icons/FontAwesome'

const styles = {
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  twitter: {
    color: "#1DA1F2",
    paddingVertical: 10,
    paddingRight: 20
  },
  facebook: {
    color: "#43609C",
    paddingVertical: 10,
    paddingRight: 20
  }
}

const Social = props => (
  <View style={styles.wrapper}>
    <TouchableWithoutFeedback onPress={() => props.onTwitter()}>
      <Icon name="twitter" size={30} style={styles.twitter} />
    </TouchableWithoutFeedback>
    <TouchableWithoutFeedback onPress={() => props.onFacebook()}>
      <Icon name="facebook-official" size={30} style={styles.facebook} />
    </TouchableWithoutFeedback>
  </View>
)

export default Social
