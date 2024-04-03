import { View } from 'react-native';
import React from 'react';
import HomeScreen from './screens/Home';
import FullPostScreen from './screens/FullPost';

export default function App() {

  return (
    <View>
      <FullPostScreen />
      {/* <HomeScreen/> */}
    </View>
  );
}

