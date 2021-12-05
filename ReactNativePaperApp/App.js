/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView} from 'react-native';
import { useTheme, Button,  } from 'react-native-paper';

const App= () => {
  const theme= useTheme();
  return (
    <SafeAreaView>
      <Button icon="camera" theme={theme}  title="Hey" >
        Press meeeeeeeeeeee
      </Button>
    </SafeAreaView>
  );
};

export default App;
