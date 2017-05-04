import React, { Component } from 'react'
import { Text } from 'react-native'
import DeviceInfo from 'react-native-device-info'

import Home from '../Screens/Home.js'
import Diary from '../Screens/Diary.js'
import PhotoPicker from '../Screens/PhotoPicker.js'
import Memo from '../Screens/Memo.js'

import Styles from '../Settings/Styles.js'

import BackButton from '../Items/BackButton.js'
import AddButton from '../Items/AddButton.js'
import CloseButton from '../Items/CloseButton.js'

const styles = Styles.Route
const deviceID = DeviceInfo.getUniqueID()

const Routes = {
  Home: {
    name: 'Home',
    component: (route, navigator) => (
      <Home navigator={navigator} deviceID={deviceID}/>),
    rightButton: (route, navigator) => <AddButton navigator={navigator}/>,
    leftButton: (route, navigator) => null,
    title: (route, navigator) => <Text style={styles.title}>Wondays</Text>
  },
  Diary: {
    name: 'Diary',
    component: (route, navigator) => <Diary navigator={navigator} data={route.data} />,
    rightButton: (route, navigator) => null,
    leftButton: (route, navigator) => <BackButton navigator={navigator}/>,
    title: (route, navigator) => (
      <Text style={styles.title}>{route.data.month}.{route.data.day}</Text>)
  },
  PhotoPicker: {
    name: 'PhotoPicker',
    component: (route, navigator) => <PhotoPicker navigator={navigator}/>,
    rightButton: (route, navigator) => <CloseButton navigator={navigator}/>,
    leftButton: (route, navigator) => null,
    title: (route, navigator) => <Text style={styles.title}>写真を選択(5枚まで)</Text>
  },
  Memo: {
    name: 'Memo',
    component: (route, navigator) => (
      <Memo navigator={navigator} photos={route.photos} deviceID={deviceID} />),
    rightButton: (route, navigator) => <CloseButton navigator={navigator}/>,
    leftButton: (route, navigator) => <BackButton navigator={navigator}/>,
    title: (route, navigator) => <Text style={styles.title}>メモ(200文字まで)</Text>
  },
  initialRoute: 'Home'
}

export default Routes
