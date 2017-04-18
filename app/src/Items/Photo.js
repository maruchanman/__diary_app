import React from 'react'
import {
  View,
  Image,
  TouchableWithoutFeedback
} from 'react-native'
import Styles from '../Settings/Styles.js'
import Icon from 'react-native-vector-icons/FontAwesome'

const styles = Styles.Photo

const Choiced = props => (
  <View style={styles.choiced}>
    <Icon name="check" size={20} style={Styles.icon}/>
  </View>
)

const Photo = props => (
  <TouchableWithoutFeedback name={props.name} onPress={() => props.on(props.uri)}>
    <Image
      resizeMode="cover"
      source={{uri: props.uri}}
      style={styles.photo}>
      {props.choiced ? <Choiced /> : null}
    </Image>
  </TouchableWithoutFeedback>
)

export default Photo
