import React from 'react';
import {View} from 'react-native';
import styles from './style';
export default function Menu() {
  return (
    <View style={styles.container}>
      <View style={styles.bar1}></View>
      <View style={styles.bar2}></View>
      <View style={styles.bar3}></View>
    </View>
  );
}
