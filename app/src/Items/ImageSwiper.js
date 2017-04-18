import React from 'react'
import {
  View, Text, Image, Dimensions
} from 'react-native'
import Swiper from 'react-native-swiper'

import Styles from '../Settings/Styles.js'
const styles = Styles.ImageSwiper

const ImageSwiper = props => (
  <Swiper height={styles.image.width}>
    {props.photos.map((photo, ix) => (
      <Image
        key={ix}
        resizeMode="contain"
        source={{uri: photo}}
        style={styles.image} />
    ))}
  </Swiper>
)

export default ImageSwiper
