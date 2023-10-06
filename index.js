import {AppRegistry} from 'react-native';
import {name} from './app.json';
import Root from './src/root.tsx';

AppRegistry.registerComponent(name, () => Root);
