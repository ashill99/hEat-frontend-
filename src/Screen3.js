import { getPathFromState } from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Button, Text, View, Dimensions, Callout, TouchableHighlight } from 'react-native';
import 'react-native-gesture-handler';



  const Screen3 = ({ navigation, route}) => (


    <View>
    {console.log(route.params.location)}
      <Text style={styles.title}>{route.params.location.name}</Text>
      <Text>{route.params.location.restOrBar}</Text>
      <Text>{route.params.location.restType}</Text>
      <Text>{route.params.location.address}</Text>
      <Text>{route.params.location.rating}</Text>
      <Text>{route.params.location.name}</Text>
      <Text>Picture...</Text>
      <Text>Website...</Text>
      <Text>Opening Hours...</Text>
      <Text>Menu Link or picture...</Text>
    </View>

  )

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