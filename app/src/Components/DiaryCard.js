import React from 'react'
import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback
} from 'react-native'
import Styles from '../Settings/Styles.js'
import Routes from '../Settings/Routes.js'

const styles = Styles.DiaryCard

const DiaryCard = props => (
  <TouchableWithoutFeedback
    onPress={() => props.navigator.push(Object.assign(Routes["Diary"], {data: props.data}))}>
    <View style={styles.wrapper}>
      <Image
        resizeMode="cover"
        source={{uri: props.data.photos[0]}}
        style={styles.image}>
        <View style={styles.textBox}>
          <Text style={styles.day}>{props.data.day}</Text>
          <Text style={styles.month}>{props.data.month}.{props.data.year}</Text>
        </View>
      </Image>
    </View>
  </TouchableWithoutFeedback>
)

export default DiaryCard
