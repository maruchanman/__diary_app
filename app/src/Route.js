import React, { Component } from 'react'
import { Navigator } from 'react-native'

import Routes from './Settings/Routes.js'
import Styles from './Settings/Styles.js'

var Router = {
  renderScene: (route, navigator) => Routes[route.name].component(route, navigator),
  initialRoute: Routes[Routes.initialRoute],
  routeMapper: props => ({
    LeftButton: (route, navigator, index, navState) => Routes[route.name].leftButton(),
    RightButton: (route, navigator, index, navState) => Routes[route.name].rightButton(),
    Title: (route, navigator, index, navState) => Routes[route.name].title()
  })
}

export default class Route extends Component {

  render() {
    return (
      <Navigator
        style={styles.wrapper}
        initialRoute={Router.initialRoute}
        renderScene={Router.renderScene}
        navigationBar={
          <Navigator.NavigationBar
            routeMapper={Router.routeMapper(this.props)} style={styles.header}/>}
      />
    )
  }

}

const styles = {
  wrapper: {
    paddingTop: Styles.headerHeight
  },
  header: {
    height: Styles.headerHeight,
    backgroundColor: Styles.imageColor
  }
}
