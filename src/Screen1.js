import React, {useEffect, useState} from 'react';
import { StyleSheet, Button, Text, View, Dimensions, Callout, TouchableHighlight } from 'react-native';
import 'react-native-gesture-handler';

const Screen1 = () => {

    return( ({ navigation, route }) => (
        <View style={styles.screen}>
          <Text style={styles.title}>Screen 1</Text>
          <Text style={styles.title}>Welcome to hEat NY</Text>
          <Text style={styles.text}>Only New York's hottest bars and restaurants. Literally.</Text>
          <Button
            title="Go to Screen 2 (Map)"
            onPress={() => {
              navigation.push('Screen2')
            }}
          />
        </View>
      )
  )
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

export default Screen1