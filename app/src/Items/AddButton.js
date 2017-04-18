import React from 'react'
import {
  Text,
  TouchableWithoutFeedback
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import Styles from '../Settings/Styles.js'
import Routes from '../Settings/Routes.js'

const AddButton = props => (
  <TouchableWithoutFeedback onPress={() => props.navigator.push(Routes.PhotoPicker)}>
    <Icon name="plus" size={20} style={Styles.icon}/>
  </TouchableWithoutFeedback>
)

export default AddButton
