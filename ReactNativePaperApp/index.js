/**
 * @format
 */
/*
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);

*/


import * as React from 'react';
import { AppRegistry } from 'react-native';
import { configureFonts, DefaultTheme, Provider as PaperProvider, DarkTheme } from 'react-native-paper';

import { name as appName } from './app.json';
import App from './App';

import AwesomeIcon from 'react-native-vector-icons/FontAwesome';


/*
const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: 'tomato',
      accent: 'yellow',
    },
  };
*/


const fontConfig = {
  web: {
    regular: {
      fontFamily: 'sans-serif',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'sans-serif-medium',
      fontWeight: 'normal',
    },
    light: {
      fontFamily: 'sans-serif-light',
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: 'sans-serif-thin',
      fontWeight: 'normal',
    },
  },
  ios: {
    regular: {
      fontFamily: 'sans-serif',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'sans-serif-medium',
      fontWeight: 'normal',
    },
    light: {
      fontFamily: 'sans-serif-light',
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: 'sans-serif-thin',
      fontWeight: 'normal',
    },
  },
  android: {
    regular: {
      fontFamily: 'sans-serif',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'sans-serif-medium',
      fontWeight: 'normal',
    },
    light: {
      fontFamily: 'sans-serif-light',
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: 'sans-serif-thin',
      fontWeight: 'normal',
    },
  }
};

const dark=true;


const theme = {
    ...(()=>{return dark ? {...DarkTheme} : {...DefaultTheme};})(),
};

console.log(DefaultTheme);
console.log(DarkTheme);


console.log(theme);









export default function Main() {
  return (
    <PaperProvider theme={theme}
    settings={{
      icon: props => <AwesomeIcon {...props} />,
    }}
    >
      <App />
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);


