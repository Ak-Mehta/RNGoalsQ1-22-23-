import React, {useState} from 'react';
import {Animated, Text, TouchableOpacity, View} from 'react-native';

const NormalAnime = () => {
  const opacity = useState(new Animated.Value(0))[0];

  // function moveBall() {
  //   Animated.timing(value, {
  //     toValue: 250,
  //     // toValue: 1,
  //     duration: 5000,
  //     useNativeDriver: true,
  //   }).start();

  //   // setTimeout(() => {
  //   //   for (let i = 0; i < 500000000000; i++) {}
  //   // }, 1000);
  // }

  function fadeInBall() {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }
  function fadeOutBall() {
    Animated.timing(opacity, {
      toValue: 0,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }
  return (
    <View style={{flex: 9, justifyContent: 'center', alignItems: 'center'}}>
      <Animated.View
        style={{
          width: 100,
          height: 100,
          // marginLeft: value,
          opacity,
          // transform: [{translateX: value}],
          borderRadius: 50,
          backgroundColor: 'blue',
        }}></Animated.View>
      {/* <TouchableOpacity onPress={moveBall}>
          <Text>Click to Move!</Text>
        </TouchableOpacity> */}
      <TouchableOpacity onPress={fadeInBall}>
        <Text>Fade In!</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={fadeOutBall}>
        <Text>Fade Out!</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NormalAnime;
