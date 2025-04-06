import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import 'react-native-get-random-values';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import './gesture-handler';
import { PlaceDetailsScreen, SearchScreen } from './src/screens';
import store from './src/store';
import { Colors } from './src/theme';

if (__DEV__) {
  require('./ReactotronConfig');
}

export type RootStackParamList = {
  Search: undefined;
  Map: { place: Place };
  History: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.white }}>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Search">
            <Stack.Screen name="Search" component={SearchScreen} />
            <Stack.Screen name="PlaceDetails" component={PlaceDetailsScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </SafeAreaView>
  );
}
