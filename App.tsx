import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import './gesture-handler';
import { CreateStore } from './src/redux';
import { PlaceDetailsScreen, SearchScreen } from './src/screens';
import { Colors } from './src/theme';
import { PersistGate } from 'redux-persist/integration/react';

if (__DEV__) {
  require('./ReactotronConfig');
  const originalConsoleLog = console.log;
  console.log = (...args) => {
    originalConsoleLog(...args);
  };
}

const Stack = createStackNavigator<RootStackParamsList>();

const { reduxStore, persistor } = CreateStore();

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.white }}>
      <Provider store={reduxStore}>
        <PersistGate loading={null} persistor={persistor}>
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
                headerTitleAlign: 'center',
                headerBackTitle: '',
              }}>
              <Stack.Screen
                name="SearchScreen"
                component={SearchScreen}
                options={{
                  headerTitle: 'Explore the world!',
                }}
              />
              <Stack.Screen
                name="PlaceDetailsScreen"
                component={PlaceDetailsScreen}
                options={{
                  headerTitle: 'Place Details',
                }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </SafeAreaView>
  );
}
