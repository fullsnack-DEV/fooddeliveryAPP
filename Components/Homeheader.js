import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
//importing constants
import {images, COLORS, SIZES, icons, FONTS} from '../constants';

export default function Homeheader({locations}) {
  return (
    <View style={styles.headercontainer}>
      <TouchableOpacity style={styles.iconcontainer}>
        <Image source={icons.nearby} resizeMode="contain" style={styles.icon} />
      </TouchableOpacity>
      <View>
        <View style={styles.locationcontainer}>
          <View style={styles.locationbg}>
            <Text style={{...FONTS.h3}}>{locations}</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.iconcontainer2}>
        <Image style={styles.icon} source={icons.basket} resizeMode="contain" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  headercontainer: {
    flexDirection: 'row',
    height: 50,

    justifyContent: 'space-between',
  },

  iconcontainer: {
    width: 50,
    paddingLeft: SIZES.padding * 2,
    justifyContent: 'center',
  },
  icon: {
    width: 30,
    height: 30,
  },
  locationcontainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  locationbg: {
    width: '300%',
    height: '90%',
    backgroundColor: COLORS.lightGray3,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: SIZES.radius,
  },
  iconcontainer2: {
    width: 50,
    paddingRight: SIZES.padding * 2,
    justifyContent: 'center',
  },
});
