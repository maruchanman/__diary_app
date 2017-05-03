import React from 'react';
import {
  ScrollView
} from 'react-native';

import Styles from '../Settings/Styles.js'
import DiaryCard from '../Components/DiaryCard.js'

const styles = Styles.Home

const Home = props => (
  <ScrollView contentContainerStyle={styles.wrapper}>
    {props.data.map((diary) =>
      <DiaryCard key={diary.diaryID} data={diary} navigator={props.navigator}/>)}
  </ScrollView>
)

export default Home
