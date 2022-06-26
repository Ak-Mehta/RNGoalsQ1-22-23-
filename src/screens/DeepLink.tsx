import React from 'react';
import {View, TouchableOpacity, Text, Linking} from 'react-native';

export default function LinkingScreen({}) {
  const Url_A = 'rngoalsq1://app/home';
  const Url_B = 'rngoalsq1://app/info/come-from-url';
  const Url_C = 'rngoalsq1://app/term';

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
          margin: 5,
          paddingHorizontal: 30,
          paddingVertical: 5,
          borderRadius: 5,
        }}
        onPress={() => Linking.openURL(Url_A)}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: '400',
            color: '#fff',
          }}>
          Deeplink to Home Screen
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: 'green',
          margin: 5,
          paddingHorizontal: 30,
          paddingVertical: 5,
          borderRadius: 5,
        }}
        onPress={() => Linking.openURL(Url_B)}>
        <Text
          style={{
            fontSize: 30,
            fontWeight: '400',
            color: '#fff',
          }}>
          Deeplink to Info Screen
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: 'blue',
          margin: 5,
          paddingHorizontal: 30,
          paddingVertical: 5,
          borderRadius: 5,
        }}
        onPress={() => Linking.openURL(Url_C)}>
        <Text
          style={{
            fontSize: 30,
            fontWeight: '400',
            color: '#fff',
          }}>
          Deeplink to Term Screen
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: 'purple',
          margin: 5,
          paddingHorizontal: 30,
          paddingVertical: 5,
          borderRadius: 5,
        }}
        onPress={() => Linking.openURL('https://reactnative.dev/')}>
        <Text
          style={{
            fontSize: 30,
            fontWeight: '400',
            color: '#fff',
          }}>
          Open public Url
        </Text>
      </TouchableOpacity>
    </View>
  );
}
