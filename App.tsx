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
import {View} from 'react-native';
import FullAnime from './FullAnime';

import NormalAnime from './NormalAnime';
import Pan from './Pan';

const App = () => {
  return (
    <View style={{flex: 1}}>
      {/* <NormalAnime /> */}
      <FullAnime />
      {/* <Pan /> */}
    </View>
  );
};

export default App;
