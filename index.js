/**
 * @format
 */


import {AppRegistry} from 'react-native';
import Login from './src/Login';
import {name as appName} from './app.json';
import Signup from './src/Signup';
import Main from './src/Main';


AppRegistry.registerComponent(appName, () => Main);