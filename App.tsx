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
import PushNotification from 'react-native-push-notification';
import {FirebaseMessagingTypes} from '@react-native-firebase/messaging';

const App = () => {
  messaging().setBackgroundMessageHandler(async remoteMessage => {
    console.log('Message handled in the background!', remoteMessage);
  });
  useEffect(() => {
    requestUserPermission();

    firebase.messaging().onMessage(remoteMessage => {
      // Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));

      // PushNotification.localNotification({
      //   channelId: 'akk',
      //   title: remoteMessage.notification?.title,
      //   message: remoteMessage.notification?.body!,
      // });
      showNotification(remoteMessage.notification!);
    });
  }, []);
  const showNotification = (
    notification: FirebaseMessagingTypes.Notification,
  ) => {
    PushNotification.localNotification({
      channelId: 'ak',
      title: notification.title,
      message: notification.body!,
    });
  };
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <FlashMessage position="top" />
      <Text>Hello Anime!</Text>
    </View>
  );
};

export default App;
