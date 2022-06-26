/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import Info from './src/screens/Info';
import Term from './src/screens/Term';
import DeepLink from './src/screens/DeepLink';

type mainStackParamList = {
  Home: undefined;
  Info: {
    message: string;
  };
  Term: undefined;
  DeepLink: undefined;
};

export type ScreenNavigationProps = NativeStackScreenProps<mainStackParamList>;

const Stack = createNativeStackNavigator<mainStackParamList>();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Info" component={Info} />
      <Stack.Screen name="Term" component={Term} />
      <Stack.Screen name="DeepLink" component={DeepLink} />
    </Stack.Navigator>
  );
}

const App = () => {
  const config = {
    screens: {
      Home: 'home',
      Info: {
        path: 'info/:message',
        parse: {
          message: (message: any) => `${message}`,
        },
      },
      Term: 'term',
    },
  };
  return (
    <NavigationContainer
      linking={{
        prefixes: ['rngoalsq1://app'],
        config,
      }}>
      <MyStack />
    </NavigationContainer>
  );
};

export default App;
