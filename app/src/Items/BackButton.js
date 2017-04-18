import React from 'react'
import {
  Text,
  TouchableWithoutFeedback
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import Styles from '../Settings/Styles.js'

const BackButton = props => (
  <TouchableWithoutFeedback onPress={() => props.navigator.pop()}>
    <Icon name="chevron-left" size={20} style={Styles.icon}/>
  </TouchableWithoutFeedback>
)

export default BackButton
