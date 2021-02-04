import React, {useEffect, useState} from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



const Screen2 = () => {

    return( ({ navigation, route }) => (
    <View style={styles.screen}>
      <Text style={styles.title}>Screen 2</Text>
      <Buttons
        title="Go to Screen 1"
        onPress={() => {
          navigation.push('Screen1')
        }}
      />
    </View>
  )
  )
}
export default Screen2