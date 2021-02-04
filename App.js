import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import HomeMainScreen from './src/HomeMainScreen'

// import RestaurantList from './src/RestaurantList'

const Stack = createStackNavigator();

// function HomeScreen( ) {
//   return (
//       <HomeMainScreen />
//   );
// }

export default function App({ navigation }) {


  const Screen1 = ({ navigation, route }) => (
    <View style={styles.screen}>
      <Text style={styles.title}>Screen 1</Text>
      <Button
        title="Go to Screen 2"
        onPress={() => {
          navigation.push('Screen2')
        }}
      />
    </View>
  )
  
  const Screen2 = ({ navigation, route }) => (
    <View style={styles.screen}>
      <Text style={styles.title}>Screen 2</Text>
      <Button
        title="Go back"
        onPress={() => {
          navigation.pop()
        }}
      />
    </View>
  )

          {/* <RestaurantList /> */}
        <Text style={styles.title}>hEat NY</Text>

  return (
<NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Screen1" component={Screen1} />
        <Stack.Screen name="Screen2" component={Screen2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
});
