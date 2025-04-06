import { configureStore } from '@reduxjs/toolkit';
import { Middleware } from 'redux';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from 'redux-persist';
import { PlacesApi } from '../api';
import REDUX_PERSIST from './reduxPersist';
import RootReducer from './rootReducer';

const createEnhancers = (getDefaultEnhancers: any) => {
  if (__DEV__) {
    const reactotron = require('../../../ReactotronConfig').default;
    return getDefaultEnhancers().concat(reactotron.createEnhancer());
  } else {
    return getDefaultEnhancers();
  }
};

function CreateStore() {
  const middlewares: Middleware[] = [PlacesApi.middleware];

  const persistedReducer = persistReducer(
    REDUX_PERSIST.storeConfig,
    //@ts-ignore
    RootReducer,
  );

  const reduxStore = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }).concat(middlewares),
    devTools: process.env.NODE_ENV !== 'production',
    enhancers: createEnhancers,
  });

  const persistor = persistStore(reduxStore);
  return { reduxStore, persistor };
}

export default CreateStore;
export type IStore = ReturnType<typeof CreateStore>;
export type IAppDispatch = IStore['reduxStore']['dispatch'];
