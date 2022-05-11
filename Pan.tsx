import React, {useState} from 'react';
import {Animated, View, PanResponder} from 'react-native';

const Pan = () => {
  const pan = useState(new Animated.ValueXY())[0];

  const panResponder = useState(
    PanResponder.create({
      // onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        console.log('granted');
        pan.setOffset({
          x: pan.x._value,
          y: pan.y._value,
        });
      },
      // onPanResponderMove: Animated.event([null, {dx: pan.x, dy: pan.y}]),
      onPanResponderMove: (_, gesture) => {
        // console.log('Args', {...args[1]});
        pan.x.setValue(gesture.dx);
        pan.y.setValue(gesture.dy);
      },
      onPanResponderRelease: () => {
        pan.flattenOffset();
      },
    }),
  )[0];

  console.log(panResponder.panHandlers);
  console.log(pan.getLayout());

  return (
    <View>
      <Animated.View
        style={[
          {
            width: 100,
            height: 100,
            borderRadius: 50,
            backgroundColor: 'blue',
            transform: [
              {
                translateX: pan.x,
              },
              {
                translateY: pan.y,
              },
            ],
          },
          // pan.getLayout(), // returns an obj with left & top value
        ]}
        {...panResponder.panHandlers}
      />
    </View>
  );
};

export default Pan;
