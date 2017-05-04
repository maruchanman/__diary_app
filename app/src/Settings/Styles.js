import React from 'react'
import { Dimensions } from 'react-native'

const Constant = {
  width: Dimensions.get("window").width,
  imageColor: 'white',
  accentColor: '#bdc3c7',
  opacityColor: 'rgba(0, 0, 0, 0.2)',
  headerHeight: 60
}


const Styles = {
  icon: {
    color: Constant.accentColor,
    padding: 10
  },
  Route: {
    wrapper: {
      backgroundColor: 'whitesmoke',
      paddingTop: Constant.headerHeight
    },
    header: {
      height: Constant.headerHeight,
      backgroundColor: Constant.imageColor
    },
    title: {
      paddingTop: Constant.headerHeight / 10,
      fontSize: 22,
      color: Constant.accentColor,
      fontWeight: 'bold'
    }
  },
  Home: {
    wrapper: {
      flexDirection: 'row',
      justifyContent: 'center',
      flexWrap: 'wrap'
    }
  },
  Diary: {
    box: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center'
    },
    text: {
      paddingVertical: 20,
      paddingHorizontal: 20
    }
  },
  Form: {
    container: {
      flex: 1
    },
    upper: {
      flex: 10,
      flexDirection: 'column'
    },
    lower: {
      backgroundColor: Constant.opacityColor,
      justifyContent: 'center',
      flex: 1,
      flexDirection: 'row'
    },
    component: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center'
    },
    text: {
      textAlign: 'center',
      color: Constant.imageColor,
      fontSize: 24
    },
    box: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center'
    },
    textInput: {
      flex: 1,
      paddingVertical: 20,
      paddingHorizontal: 40
    },
    loading: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      margin: 0
    }
  },
  Photo: {
    photo: {
      flex: 0,
      width: Constant.width / 3.1,
      height: Constant.width / 3.1,
      margin: 2
    },
    choiced: {
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.8)'
    }
  },
  DiaryCard: {
    wrapper: {
      flex: 0,
      width: Constant.width / 2.1,
      height: Constant.width / 2.1,
      margin: 2
    },
    image: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'flex-end',
      width: null,
      height: null
    },
    textBox: {
      padding: 2
    },
    day: {
      fontSize: 32,
      textAlign: 'right',
      color: 'white'
    },
    month: {
      textAlign: 'right',
      color: 'white'
    }
  },
  ImageSwiper: {
    image: {
      width: Constant.width,
      height: Constant.width,
      padding: 0,
      margin: 0
    }
  },
  Memo: {
  }
}
export default Styles
