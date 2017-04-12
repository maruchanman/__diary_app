import React, { Component } from 'react'
import { Text } from 'react-native'
import Home from '../Screens/Home.js'

import Fetch from '../Actions/Fetch.js'

var Routes = {
  Home: {
    name: 'Home',
    component: (route, navigator) => <Home navigator={navigator} data={Fetch.diaryList}/>,
    rightButton: () => null,
    leftButton: () => null,
    title: () => <Text>LIFE</Text>
  },
  initialRoute: 'Home'
}

export default Routes
