import 'react-native-gesture-handler';
import React from 'react';
import CalendarScreen from './screens/CalendarScreen';
import AddEventScreen from './screens/AddEventScreen';
import EventDetails from './screens/EventDetailsScreen';
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';
import {StatusBar} from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import configureStore from './store';
import { COLORS } from './globals'

const store = configureStore()
const Stack = createStackNavigator();

const App = () => (
  <NavigationContainer style={{backgroundColor: '#fff'}}>
    <Provider store = { store }>
      <StatusBar style="light" />
      <Stack.Navigator>
        <Stack.Screen
          name="Calendar"
          component={CalendarScreen}
          options={{ title: 'Eventer', headerStyle: {backgroundColor: COLORS.MAIN}, headerTintColor:'white' }}
          />
        <Stack.Screen 
          name="Add Event"
          component={AddEventScreen}
          options={({route}) => ({title: route.params.dateFilter, headerStyle: {backgroundColor: COLORS.MAIN}, headerTintColor:'white' })}
          />
        <Stack.Screen 
          name="Details"
          component={EventDetails}
          options={({route}) => ({title: 'Details', headerStyle: {backgroundColor: COLORS.MAIN}, headerTintColor:'white' })}
          />
      </Stack.Navigator>
    </Provider>
  </NavigationContainer>
)

AppRegistry.registerComponent(appName, () => App);

export default App;
