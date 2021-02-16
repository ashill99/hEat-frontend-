import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Button, Text, View, Dimensions, Callout, TouchableHighlight } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { PROVIDER_GOOGLE } from 'react-native-maps' 
import MapView, { Marker } from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';
import Screen1 from './src/Screen1'
import Screen2 from './src/Screen2'
import Screen3 from './src/Screen3'
import Screen4 from './src/Screen4'
import RestaurantList from './src/RestaurantList'
import BarList from './src/BarList'
import Login from './src/Login'
import Signup from './src/Signup'
import { Provider } from 'react-redux'
import store from './src/redux/store'
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

export default function App() {

  const Stack = createStackNavigator();
  let [fontsLoaded] = useFonts({
    'PlayWithFire': require('./assets/fonts/PlayWithFire.ttf'),
  });

  function Header({children}) {
    return (
        <View>
            <Text>{children}</Text>
        </View>
    );
}

  return (
<Provider store={store}>
<NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerStyle: {
            backgroundColor: '#FFEFD5',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            color: 'black',
            fontFamily: 'PlayWithFire'
          },
          }}>
        <Stack.Screen name="Screen1" component={Screen1} options={{title: 'hEat'}} />
        <Stack.Screen name="Screen2" component={Screen2} options={{title: 'hEat Map'}}/>
        <Stack.Screen name="Screen3" component={Screen3} options={{title: 'hEat'}}/>
        <Stack.Screen name="Screen4" component={Screen4} options={{title: 'Favorites'}}/>
        <Stack.Screen name="RestaurantList" component={RestaurantList} options={{title: 'Restaurants'}}/>
        <Stack.Screen name="BarList" component={BarList} options={{title: 'Bars'}}/>
        <Stack.Screen name="Login" component={Login} options={{title: 'Login'}}/>
        <Stack.Screen name="Signup" component={Signup} options={{title: 'Signup'}}/>
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#F4C430',
    alignItems: 'center',
    justifyContent: 'center',
  },
  screen: {
    marginTop: 40,
    alignItems: 'center',
  },
  title: {
    padding: 20,
    fontSize: 42,
  },
  map: {
    width: Dimensions.get('window').width,
    height: 550,
    // Dimensions.get('window').height,
  },
  marker: {
    backgroundColor: "#fff",
    padding: 5, 
    borderRadius: 5
  },
  text: {
    color: "#000000"
  }
});
