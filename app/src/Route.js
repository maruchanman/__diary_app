import React, { Component } from 'react'
import { Navigator } from 'react-native'

import Routes from './Settings/Routes.js'
import Styles from './Settings/Styles.js'

const Router = {
  renderScene: (route, navigator) => Routes[route.name].component(route, navigator),
  initialRoute: Routes[Routes.initialRoute],
  routeMapper: props => ({
    LeftButton: (route, navigator, index, navState) =>
      Routes[route.name].leftButton(route, navigator),
    RightButton: (route, navigator, index, navState) =>
      Routes[route.name].rightButton(route, navigator),
    Title: (route, navigator, index, navState) =>
      Routes[route.name].title(route, navigator)
  })
}

export default class Route extends Component {

  render() {
    return (
      <Navigator
        style={Styles.Route.wrapper}
        initialRoute={Router.initialRoute}
        renderScene={Router.renderScene}
        navigationBar={
          <Navigator.NavigationBar
            routeMapper={Router.routeMapper(this.props)} style={Styles.Route.header}/>}
      />
    )
  }

}
