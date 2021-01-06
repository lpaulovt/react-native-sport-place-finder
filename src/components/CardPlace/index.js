import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconAwesome from 'react-native-vector-icons/FontAwesome5';

export default function CardPlace() {
  return (
    <View style={styles.container}>
      <View style={styles.containerImg}>
        <Image
          style={styles.photo}
          source={{
            uri:
              'https://images.unsplash.com/photo-1540496905036-5937c10647cc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
          }}
        />
        <View style={styles.openHour}>
          <Text style={styles.label}>Daily Open</Text>
          <Text style={styles.hour}>09:00 - 18:00</Text>
        </View>
        <View style={styles.containerLike}>
          <IconAwesome name="heart" size={12} color={'#C8C9CB'} />
        </View>
      </View>

      <View style={styles.description}>
        <View style={styles.leftDescription}>
          <Text style={styles.name}>CrossFit Equator Fit</Text>
          <Text style={styles.address}>Jakarta, 478 Kemang Way Suite 980</Text>
        </View>
        <View style={styles.rightDescription}>
          <View style={styles.stars}>
            <Icon name="star" size={18} color={'#EF8D33'} />
            <Icon name="star" size={18} color={'#EF8D33'} />
            <Icon name="star" size={18} color={'#EF8D33'} />
            <Icon name="star" size={18} color={'#EF8D33'} />
            <Icon name="star" size={18} color={'#C8C9CB'} />
            <Text style={styles.average}> (4.0)</Text>
          </View>
          <View style={styles.location}>
            <IconAwesome name="map-marker-alt" size={12} color={'#C8C9CB'} />
            <Text style={styles.miles}> 1.5 Miles</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
