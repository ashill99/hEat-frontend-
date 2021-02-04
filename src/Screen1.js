import React, {useEffect, useState} from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



const Screen1 = () => {

    return( ({ navigation, route }) => (
    <View style={styles.screen}>
      <Text style={styles.title}>Screen 1</Text>
      <Buttons
        title="Go to Screen 2"
        onPress={() => {
          navigation.push('Screen2')
        }}
      />
    </View>
  )
  )
}
export default Screen1