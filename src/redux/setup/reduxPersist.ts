import { createWhitelistFilter } from 'redux-persist-transform-filter';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Whitelist any slices that you want to persist
// const gradeReduxWhitelist = createWhitelistFilter('grade', [
//   'lessonCompletion',
// ]);

const REDUX_PERSIST = {
  active: true,
  storeConfig: {
    key: 'primary',
    storage: AsyncStorage,
    // transforms: [gradeReduxWhitelist],
    // whitelist: ['grade'],
  },
};

export default REDUX_PERSIST;
