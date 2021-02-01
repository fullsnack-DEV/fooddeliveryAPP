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
  const scrollX = new Animated.Value(0);

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
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: false},
        )}
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
                  bottom: -20,
                  width: SIZES.width,
                  height: 50,
                  justifyContent: 'center',
                  flexDirection: 'row',
                }}>
                <TouchableOpacity
                  style={{
                    width: 50,
                    backgroundColor: COLORS.white,
                    borderBottomLeftRadius: 25,
                    justifyContent: 'center',
                    borderTopLeftRadius: 25,
                    alignItems: 'center',
                  }}>
                  <Text style={{...FONTS.body1, fontWeight: 'bold'}}>-</Text>
                </TouchableOpacity>

                <View
                  style={{
                    width: 50,
                    backgroundColor: COLORS.white,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text style={{...FONTS.h2, fontWeight: 'bold'}}>5</Text>
                </View>
                <TouchableOpacity
                  style={{
                    width: 50,
                    backgroundColor: COLORS.white,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderTopRightRadius: 25,
                    borderBottomRightRadius: 25,
                  }}>
                  <Text style={{...FONTS.body1, fontWeight: 'bold'}}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
            {/* name and description */}
            <View
              style={{
                width: SIZES.width,
                alignItems: 'center',
                marginTop: 15,
                paddingHorizontal: SIZES.padding * 2,
              }}>
              <Text
                style={{
                  marginVertical: 10,
                  textAlign: 'center',
                  ...FONTS.h2,
                  fontWeight: 'bold',
                }}>
                {item.name} - {item.price.toFixed(2)}
              </Text>
              <Text style={{...FONTS.body3, fontWeight: 'bold'}}>
                {item.description}
              </Text>
            </View>

            {/* calories */}

            <View style={{flexDirection: 'row', marginTop: 10}}>
              <Image
                source={icons.fire}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                  marginRight: 10,
                  marginTop: -5,
                }}
              />

              <Text style={{...FONTS.body3, color: COLORS.darkgray}}>
                {item.calories.toFixed(2)} cal
              </Text>
            </View>
          </View>
        ))}
      </Animated.ScrollView>
    );
  }

  function renderdots() {
    const dotposition = Animated.divide(scrollX, SIZES.width);

    return (
      <View style={{height: 30, top: -50}}>
        <View
          style={{
            flexDirection: 'row',

            alignItems: 'center',
            justifyContent: 'center',
            height: SIZES.padding,
          }}>
          {restuarent?.menu.map((item, index) => {
            const opacity = dotposition.interpolate({
              inputRange: [index - 1, index, index + 1],
              outputRange: [0.3, 1, 0.3],
              extrapolate: 'clamp',
            });

            const dotsize = dotposition.interpolate({
              inputRange: [index - 1, index, index + 1],
              outputRange: [SIZES.base * 0.8, 10, SIZES.base * 0.8],
              extrapolate: 'clamp',
            });

            const dotcolor = dotposition.interpolate({
              inputRange: [index - 1, index, index + 1],
              outputRange: [COLORS.darkgray, COLORS.primary, COLORS.darkgray],
              extrapolate: 'clamp',
            });

            return (
              <Animated.View
                key={`dot-${index}`}
                opacity={opacity}
                style={{
                  borderRadius: SIZES.radius,
                  marginHorizontal: 6,

                  width: dotsize,
                  height: dotsize,
                  backgroundColor: dotcolor,
                }}
              />
            );
          })}
        </View>
      </View>
    );
  }

  function renderOrder() {
    return (
      <View>
        {renderdots()}

        <View
          style={{
            backgroundColor: COLORS.white,
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
            top: -50,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingVertical: SIZES.padding * 2,
              paddingHorizontal: SIZES.padding * 3,
              borderBottomColor: COLORS.lightGray2,
              borderBottomWidth: 1,
            }}>
            <Text style={{...FONTS.h3}}> items in Cart</Text>
            <Text style={{...FONTS.h3}}>45</Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingVertical: SIZES.padding * 2,
              paddingHorizontal: SIZES.padding * 3,
            }}>
            <View style={{flexDirection: 'row'}}>
              <Image
                source={icons.pin}
                resizeMode="contain"
                style={{
                  width: 20,
                  height: 20,
                  tintColor: COLORS.darkgray,
                }}
              />
              <Text style={{marginLeft: SIZES.padding, ...FONTS.h4}}>
                Location
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Image
                source={icons.master_card}
                resizeMode="contain"
                style={{
                  width: 20,
                  height: 20,
                  tintColor: COLORS.darkgray,
                }}
              />
              <Text style={{marginLeft: SIZES.padding, ...FONTS.h4}}>8888</Text>
            </View>
          </View>
          {/* order button */}

          <View
            style={{
              padding: SIZES.padding * 2,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <TouchableOpacity
              style={{
                width: SIZES.width * 0.9,
                padding: SIZES.padding,
                backgroundColor: COLORS.primary,
                alignItems: 'center',
                borderRadius: SIZES.radius,
              }}
              onPress={() =>
                navigation.navigate('OrderDelivery', {
                  restaurant: restaurant,
                  currentLocation: currentLocation,
                })
              }>
              <Text style={{color: COLORS.white, ...FONTS.h2}}>Order</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {renderHeader()}

      {renderfoodinfo()}

      {renderOrder()}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightGray,
  },
});
