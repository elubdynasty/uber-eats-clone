import React from 'react'
import { NavigationContainer } from '@react-navigation/native' 
import { createStackNavigator } from '@react-navigation/stack'
import { Provider } from 'react-redux'
import store from './redux/store'

import Home from './screens/Home'
import RestaurantDetail from './screens/RestaurantDetail'

const Stack = createStackNavigator();

const screenOptions = {
  headerShown: false,
};


export default function RootNavigation(){

    return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={screenOptions}
          >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen
              name="RestaurantDetail"
              component={RestaurantDetail}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
}

