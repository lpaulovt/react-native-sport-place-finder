/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/MaterialIcons';
import IconAwesome from 'react-native-vector-icons/FontAwesome5';
import Home from './src/pages/Home/index';
import Info from './src/pages/Info/index';
import Location from './src/pages/Location/index';
import LikesPlace from './src/pages/LikesPlace/index';
import Profile from './src/pages/Profile/index';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          keyboardHidesTabBar: true,
          showLabel: false,
          style: {
            position: 'relative',
            height: 64,
            paddingVertical: 5,
            paddingBottom: 5,
            display: 'flex',
            alignItems: 'center',
            backgroundColor: '#FFF',
          },
        }}
        screenOptions={({route}) => ({
          tabBarIcon: ({focused}) => {
            if (route.name === 'Home') {
              return (
                <Icon
                  name="home"
                  size={25}
                  color={focused ? '#000' : '#C8C9CB'}
                />
              );
            } else if (route.name === 'Info') {
              return (
                <Icon
                  name="article"
                  size={25}
                  color={focused ? '#000' : '#C8C9CB'}
                />
              );
            } else if (route.name === 'Location') {
              return (
                <IconAwesome
                  name="map-marker-alt"
                  size={23}
                  color={focused ? '#000' : '#C8C9CB'}
                />
              );
            } else if (route.name === 'LikesPlace') {
              return (
                <Icon
                  name="favorite"
                  size={25}
                  color={focused ? '#000' : '#C8C9CB'}
                />
              );
            } else if (route.name === 'Profile') {
              return (
                <Icon
                  name="person"
                  size={25}
                  color={focused ? '#000' : '#C8C9CB'}
                />
              );
            }
          },
        })}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Info" component={Info} />
        <Tab.Screen name="Location" component={Location} />
        <Tab.Screen name="LikesPlace" component={LikesPlace} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
