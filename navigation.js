import React from 'react'
import { NavigationContainer } from '@react-navigation/native' 
import { createStackNavigator } from '@react-navigation/stack'

import Home from './screens/Home'
import RestaurantDetail from './screens/RestaurantDetail'

const Stack = createStackNavigator();

const screenOptions = {
  headerShown: false,
};


export default function RootNavigation(){

    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home' screenOptions={screenOptions}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="RestaurantDetail" component={RestaurantDetail} />
        </Stack.Navigator>
      </NavigationContainer>
    );
}

