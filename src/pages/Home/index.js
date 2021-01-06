import React from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  TextInput,
  Image,
  StatusBar,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import styles from './style';
import IconAwesome from 'react-native-vector-icons/FontAwesome5';
import Fi from 'react-native-vector-icons/Feather';

import Menu from '../../components/Menu/index';
import CardPlace from '../../components/CardPlace';
export default function Home() {
  return (
    <>
      <ScrollView style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor="#fff" />
        <View style={styles.header}>
          <Menu />
          <View style={styles.rightHeader}>
            <View style={styles.containerIcon}>
              <View style={styles.notification} />
              <IconAwesome name="bell" size={25} color={'#343434'} />
            </View>
            <ProfilePhoto />
          </View>
        </View>
        <Text style={styles.h1}>Hi Carl</Text>
        <Text style={styles.h2}>Good afternoon</Text>
        <View style={styles.containerSearchInput}>
          <SearchInput />
          <TouchableOpacity style={styles.btnFilter}>
            <Image source={require('../../assets/filter.png')} />
          </TouchableOpacity>
        </View>
        <View style={styles.containerTags}>
          <Text style={styles.tag}>Football</Text>
          <Text style={styles.tagSelected}>Gym</Text>
          <Text style={styles.tag}>Swim</Text>
          <Text style={styles.tag}>Bowling</Text>
        </View>
        <View style={styles.cards}>
          <CardPlace />
          <CardPlace />
          <CardPlace />
        </View>
      </ScrollView>
    </>
  );
}

function ProfilePhoto() {
  return (
    <View style={styles.borderPhoto}>
      <Image
        style={styles.photo}
        source={{
          uri:
            'https://images.unsplash.com/photo-1491555103944-7c647fd857e6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
        }}
      />
    </View>
  );
}

function SearchInput() {
  return (
    <View style={styles.containerInput}>
      <Fi name="search" size={20} color={'#52545A'} />
      <TextInput placeholder="Search" style={styles.inputSearch} />
    </View>
  );
}
