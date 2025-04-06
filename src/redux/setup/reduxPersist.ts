import { createWhitelistFilter } from 'redux-persist-transform-filter';
import AsyncStorage from '@react-native-async-storage/async-storage';

const placesReduxWhitelist = createWhitelistFilter('places');

const REDUX_PERSIST = {
  active: false,
  storeConfig: {
    key: 'primary',
    storage: AsyncStorage,
    transforms: [placesReduxWhitelist],
    whitelist: ['places'],
  },
};

export default REDUX_PERSIST;
