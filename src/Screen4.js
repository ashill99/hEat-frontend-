import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { StyleSheet, Button, Text, View, Dimensions, Callout, TouchableHighlight } from 'react-native';
import 'react-native-gesture-handler';

const Screen4 = ({ navigation, route}) => {
    
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("http://localhost:3000/api/v1/favourites")
    .then(res => res.json())
    .then(faveArray => {
      // const mappedLocation = locationArray.map((location) => {
      //   return {
      //     ...location, 
      //   }
      // })
      const faveAction = addFaves(faveArray)
      dispatch(faveAction)
    })
    // the dispatch won't effect the useeffect but will stop console warning
  },[dispatch])  

    const faves = useSelector(state => {
        return state.fave.items
      })

      const eachFave = faves.map(fave =>  {return (
        <Text>{fave.id}</Text>
      )})

    return (
        <View style={styles.title}>
            <Text>Favourites</Text>
            {eachFave}
        </View>
      )
}

const styles = StyleSheet.create({
  title: {
    padding: 20,
    fontSize: 42,
  },
});

export default Screen4