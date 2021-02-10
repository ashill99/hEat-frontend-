import React, {useEffect, useState} from 'react';
import { useSelector } from 'react-redux'
import { StyleSheet, Button, Text, View, Dimensions, Callout, TouchableHighlight } from 'react-native';
import 'react-native-gesture-handler';

const Screen4 = () => {


    
    const faves = useSelector(state => {
        return state.fave.items
      })

      const eachFave = faves.map(fave =>  {return (
        <Text>{fave.id}</Text>
      )})
    return( ({ navigation, route }) => (
        <View style={styles.title}>
            <Text>Favourites</Text>
        </View>
      )
  )
}

const styles = StyleSheet.create({
  title: {
    padding: 20,
    fontSize: 42,
  },
});

export default Screen4