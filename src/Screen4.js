import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { StyleSheet, Text, View} from 'react-native';
import 'react-native-gesture-handler';
import NavBar from './NavBar'
import {URL} from '@env'

const Screen4 = ({ navigation, route}) => {
    
  const dispatch = useDispatch();

  // useEffect(() => {
  //   fetch(`${URL}`/api/v1/favourites`)
  //   .then(res => res.json())
  //   .then(faveArray => {
  //     const faveAction = addFaves(faveArray)
  //     dispatch(faveAction)
  //   })
  // },[dispatch])  

    const faves = useSelector(state => {
        return state.fave.items
      })

      // const eachFave = faves.map(fave =>  {return (
      //   <Text>{fave.id}</Text>
      // )})

    return (
      <>
        <NavBar navigation={navigation}/>
        <View style={styles.title}>
            <Text>Favourites Page</Text>
            {/* {eachFave} */}
        </View>
        </>
      )
}

const styles = StyleSheet.create({
  title: {
    padding: 20,
    fontSize: 42,
  },
});

export default Screen4