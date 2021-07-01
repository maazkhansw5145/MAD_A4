import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CitiesScreen from "./screens/CitiesScreen";
import AddCityScreen from './screens/AddCityScreen'
import CityDetailsScreen from './screens/CityDetailsScreen';
import AddLocation from './screens/AddLocationScreen';
import React from 'react'

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Cities">
        <Stack.Screen name="Cities" component={CitiesScreen} />
        <Stack.Screen name="AddCity" component={AddCityScreen} />
        <Stack.Screen name="CityDetails" component={CityDetailsScreen} />
        <Stack.Screen name="AddLocation" component={AddLocation} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;