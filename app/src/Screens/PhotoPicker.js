import React, { Component } from 'react'
import {
  View,
  Text,
  CameraRoll,
  ScrollView,
  TouchableWithoutFeedback
} from 'react-native'
import ImageResizer from 'react-native-image-resizer'

import Photo from '../Items/Photo.js'
import Routes from '../Settings/Routes.js'

import Styles from '../Settings/Styles.js'

const styles = Styles.Form

export default class PhotoPicker extends Component {

  constructor(props) {
    super(props)
    this.state = {
      photos: [],
      choice: []
    }
  }

  setPhotos(data) {
    const photos = data.edges.map(asset => asset.node.image)
    this.setState({photos: photos})
  }

  loadPhotos() {
    CameraRoll.getPhotos({first: 120})
      .then(data => this.setPhotos(data))
  }

  onPhoto(photoURI) {
    this.setState({
      choice: this.state.choice.indexOf(photoURI) == -1
        ? this.state.choice.concat(photoURI)
        : this.state.choice.filter(uri => uri != photoURI)})
  }

  next(navigator) {
    if (this.state.choice.length == 0) {
      alert("Choose Photos")
    } else if (this.state.choice.length > 5) {
      alert("Up to 5 photos please")
    } else {
      const choice = []
      this.state.choice.map(photo => {
        ImageResizer.createResizedImage(photo, 640, 640, 'JPEG', 50, 0)
          .then(uri => choice.push(uri))
      })
      navigator.push(Object.assign(Routes.Memo, {photos: choice}))
    }
  }

  componentDidMount() {
    this.loadPhotos()
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.upper}>
          <ScrollView contentContainerStyle={styles.box}>
            {this.state.photos.map((photo, ix) =>
              <Photo
                choiced={this.state.choice.indexOf(photo.uri) != -1}
                uri={photo.uri} on={this.onPhoto.bind(this)} key={ix} />
            )}
          </ScrollView>
        </View>
        <View style={styles.lower}>
          <TouchableWithoutFeedback onPress={() => this.next(this.props.navigator)}>
            <View style={styles.component}><Text style={styles.text}>Next</Text></View>
          </TouchableWithoutFeedback>
        </View>
      </View>
    )
  }

}
