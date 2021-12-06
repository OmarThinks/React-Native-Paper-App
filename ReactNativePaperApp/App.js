/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, View} from 'react-native';
import { useTheme, Button, ActivityIndicator, Colors} from 'react-native-paper';




const MyComponent = () => (
  <ActivityIndicator animating={true} color={Colors.redA700} />
);


const App= () => {
  const theme= useTheme();
  return (
    <SafeAreaView>
      <View >
        <Button icon="creative-commons"  title="Hey" mode='outlined'>
          Press meeeeeeeeeeee
        </Button>
      </View>
        <MyComponent />
    </SafeAreaView>
  );
};

export default App;
