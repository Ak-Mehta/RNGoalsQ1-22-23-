import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {ScreenNavigationProps} from '../../App';
import {useRoute} from '@react-navigation/native';

export default function Info({navigation}: ScreenNavigationProps) {
  const params = useRoute<any>().params;
  const {message} = params;
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      {message && (
        <Text
          style={{
            fontSize: 20,
            fontWeight: '400',
            color: '#000',
          }}>
          Message: {message}
        </Text>
      )}
      <TouchableOpacity
        style={{
          backgroundColor: 'green',
          paddingHorizontal: 30,
          paddingVertical: 5,
          borderRadius: 5,
        }}
        onPress={() => navigation.navigate('Term')}>
        <Text
          style={{
            fontSize: 40,
            fontWeight: '400',
            color: '#fff',
          }}>
          Go to Term Screen
        </Text>
      </TouchableOpacity>
    </View>
  );
}
