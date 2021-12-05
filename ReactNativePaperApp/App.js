/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView} from 'react-native';
import { useTheme, Button  } from 'react-native-paper';

const App= () => {
  const theme = useTheme();
  return (
    <SafeAreaView style={{backgroundColor:"blue", height:"100%"}}>
      <Button icon="camera" theme={theme} style={{backgroundColor:"red"}} title="Hey">
        Press meeeeeeeeeeee
      </Button>
    </SafeAreaView>
  );
};

export default App;
