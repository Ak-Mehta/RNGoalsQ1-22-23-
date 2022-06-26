import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {ScreenNavigationProps} from '../../App';

export default function Home({navigation}: ScreenNavigationProps) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <TouchableOpacity
        style={{
          backgroundColor: 'red',
          paddingHorizontal: 30,
          paddingVertical: 5,
          borderRadius: 5,
        }}
        onPress={() =>
          navigation.navigate('Info', {message: 'Come from Home'})
        }>
        <Text
          style={{
            fontSize: 40,
            fontWeight: '400',
            color: '#fff',
          }}>
          Go to Info Screen
        </Text>
      </TouchableOpacity>
    </View>
  );
}
