import {Platform} from 'react-native';
import Config from 'react-native-config';

const androidMapsKey = Config.GOOGLE_MAPS_ANDROID_API_KEY;
const iosMapsKey = Config.GOOGLE_MAPS_IOS_API_KEY;
const GOOGLE_MAPS_WEB_API_KEY = Config.GOOGLE_MAPS_WEB_API_KEY;

const GOOGLE_MAPS_API_KEY =
  Platform.OS === 'android' ? androidMapsKey : iosMapsKey;

export {GOOGLE_MAPS_API_KEY, GOOGLE_MAPS_WEB_API_KEY};
