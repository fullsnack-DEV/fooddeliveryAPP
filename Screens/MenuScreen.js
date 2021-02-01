import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  Animated,
} from 'react-native';
import {icons, COLORS, SIZES, FONTS} from '../constants';
import icon from '../constants/icon';

export default function MenuScreen({route, navigation}) {
  const [restuarent, setrestuarent] = React.useState(null);
  const [currentLocations, setCurrentLocation] = React.useState(null);

  React.useEffect(() => {
    //to store the elementin the screen
    let {item, currentLocation} = route.params;

    //setting the state values
    setrestuarent(item);
    setCurrentLocation(currentLocation);
  });

  //Function for the Rendering the HeaderComponent

  function renderHeader() {
    return (
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={{
            width: 50,
            justifyContent: 'center',
            paddingLeft: SIZES.padding * 2,
          }}
          onPress={() => navigation.goBack()}>
          <Image
            source={icons.back}
            resizeMode="contain"
            style={{
              width: 30,
              height: 30,
            }}
          />
        </TouchableOpacity>

        {/* Restaurent Name Section */}
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              height: 50,
              alignItems: 'center',
              justifyContent: 'center',
              paddingHorizontal: SIZES.padding * 3,
              borderRadius: SIZES.radius,
              backgroundColor: COLORS.lightGray3,
            }}>
            <Text style={{...FONTS.h3}}>{restuarent?.name}</Text>
          </View>
        </View>
        <TouchableOpacity
          style={{
            width: 50,
            justifyContent: 'center',
            paddingRight: SIZES.padding * 2,
          }}>
          <Image
            source={icons.list}
            resizeMode="contain"
            style={{width: 30, height: 30}}
          />
        </TouchableOpacity>
      </View>
    );
  }

  //rendering the food info

  function renderfoodinfo() {
    return (
      <Animated.ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        scrollEventThrottle={16}
        snapToAlignment="center"
        //onScroll
        //This is where we can control the animation on a animated ScrollView
      >
        {/* displaying the food images */}
        {restuarent?.menu.map((item, index) => (
          <View key={`menu-${index}`} style={{alignItems: 'center'}}>
            <View style={{height: SIZES.height * 0.35}}>
              {/* food image */}

              <Image
                source={item.photo}
                resizeMode="cover"
                style={{
                  width: SIZES.width,
                  height: '100%',
                }}
              />
              {/* quantity button */}
              <View
                style={{
                  position: 'absolute',
                  bottom: '-20',
                  width: SIZES.width,
                  height: 50,
                  justifyContent: 'center',
                  flexDirection: 'row',
                }}>
                <TouchableOpacity
                  style={{
                    width: 50,
                    backgroundColor: COLORS.white,
                    borderBottomLeftRadius: '25',
                    justifyContent: 'center',
                    borderTopLeftRadius: 25,
                    alignItems: 'center',
                  }}>
                  <Text style={{...FONTS.body1}}>-</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
      </Animated.ScrollView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {renderHeader()}

      {renderfoodinfo()}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightGray,
  },
});
