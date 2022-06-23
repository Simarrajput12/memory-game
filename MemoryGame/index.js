/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import MemoryGame  from './src/container/memoryGame';
import {name as appName} from './app.json';


AppRegistry.registerComponent(appName, () => MemoryGame);
