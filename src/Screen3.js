import { getPathFromState } from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Button, TouchableOpacity, Text, View, Dimensions, Callout, TouchableHighlight } from 'react-native';
import 'react-native-gesture-handler';
import CommentsContainer from './CommentsContainer'
import {useSelector, useDispatch} from 'react-redux'
import { addFaves } from './redux/fave'

  const Screen3 = ({ navigation, route}) => {

    const [faved, setFaved] = useState(false) 

    const location = useSelector(state => {
      return state.currentLocation
    })

    const faves = useSelector(state => {
      return state.fave.items
    })
  
    console.log(location.id, "line 21")

    const currentFave = faves.map(fave => fave.id === location.id)
console.log(faves, "all faves")
console.log(currentFave, "d")



// currentFave ? setFaved(true) : null

      // setFaved(true)


    const dispatch = useDispatch()

    const faveAction = addFaves(location)
    
    console.log(faves, "line 23")

    return (
    <View>
      <Text style={styles.title}>{location.name} 
      {faved ? <Text>⭐</Text> : <Button title="☆" onPress={() => {dispatch(faveAction)}} />}
      </Text>
      <Text>{location.restOrBar}</Text>
      {location.restType.length > 0 ? 
        <Text>{location.restType}</Text> : null}
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