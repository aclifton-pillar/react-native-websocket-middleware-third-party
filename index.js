import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import TimeProvider from "./src/views/time/time-provider";

AppRegistry.registerComponent(appName, () => TimeProvider);

