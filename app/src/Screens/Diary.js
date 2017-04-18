import React from 'react'
import {
  View,
  Text
} from 'react-native'
import Styles from '../Settings/Styles.js'
import ImageSwiper from '../Items/ImageSwiper.js'

const styles = Styles.Diary

const Diary = props => (
  <View style={styles.box}>
    <ImageSwiper photos={props.data.photos}/>
    <Text style={styles.text}>{props.data.text}</Text>
  </View>
)

export default Diary
