import { getPathFromState } from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Button, Text, View, Dimensions, Callout, TouchableHighlight } from 'react-native';
import 'react-native-gesture-handler';
import CommentsContainer from './CommentsContainer'
import {useSelector} from 'react-redux'


  const Screen3 = ({ navigation, route}) => {

    const location = useSelector(state => {
      return state.currentLocation
    })

    return (
    <View>
      <Text style={styles.title}>{location.name}</Text>
      <Text>{location.restOrBar}</Text>
      <Text>{location.restType}</Text>
      <Text>{location.address}</Text>
      <Text>{location.rating}</Text>
      <Text>{location.name}</Text>
      <Text>Picture...</Text>
      <Text>Website...</Text>
      <Text>Opening Hours...</Text>
      <Text>Menu Link or picture...{'\n'}</Text>
        <CommentsContainer />
    </View>
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

  export default Screen3