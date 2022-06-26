/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useEffect} from 'react';
import {Alert, Text, View} from 'react-native';
import FlashMessage from 'react-native-flash-message';
import {requestUserPermission} from './src/notificationServices';
import messaging, {firebase} from '@react-native-firebase/messaging';
import PushNotification, {Importance} from 'react-native-push-notification';
import {FirebaseMessagingTypes} from '@react-native-firebase/messaging';

PushNotification.createChannel(
  {
    channelId: 'akk', // (required)
    channelName: 'akk', // (required)
    importance: Importance.HIGH, // (optional) default: Importance.HIGH. Int value of the Android notification importance
    vibrate: true, // (optional) default: true. Creates the default vibration pattern if true.
  },
  created => console.log(`createChannel returned '${created}'`), // (optional) callback returns whether the channel was created, false means it already existed.
);

const App = () => {
  messaging().setBackgroundMessageHandler(async remoteMessage => {
    console.log('Message handled in the background!', remoteMessage);
  });
  useEffect(() => {
    requestUserPermission();

    const unsubscribe = firebase
      .messaging()
      .onMessage(async (remoteMessage: any) => {
        // Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
        console.log('Message handled in foreground!', remoteMessage);
        PushNotification.localNotification({
          channelId: 'akk',
          title: remoteMessage.notification?.title,
          message: remoteMessage.notification?.body!,
        });
        // showNotification(remoteMessage.notification!);
      });
    return unsubscribe;
  }, []);
  // const showNotification = (
  //   notification: FirebaseMessagingTypes.Notification,
  // ) => {
  //   PushNotification.localNotification({
  //     channelId: 'ak',
  //     title: notification.title,
  //     message: notification.body!,
  //   });
  // };
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <FlashMessage position="top" />
      <Text>Welcome to RN-PushNotification!</Text>
    </View>
  );
};

export default App;
