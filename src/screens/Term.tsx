import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {ScreenNavigationProps} from '../../App';

export default function Term({navigation}: ScreenNavigationProps) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <TouchableOpacity
        style={{
          backgroundColor: 'blue',
          paddingHorizontal: 30,
          paddingVertical: 5,
          borderRadius: 5,
        }}
        onPress={() => navigation.navigate('DeepLink')}>
        <Text
          style={{
            fontSize: 30,
            fontWeight: '400',
            color: '#fff',
          }}>
          Go to DeepLink Screen
        </Text>
      </TouchableOpacity>
    </View>
  );
}
