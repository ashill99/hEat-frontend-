import React, {useRef, useEffect, useState} from 'react';
import 'react-native-gesture-handler';
import { StyleSheet, View } from 'react-native';
 import {useSelector} from 'react-redux'
 import {useDispatch} from 'react-redux'
 import { addItems } from "./redux/location";
 import { addLocation } from './redux/currentLocation'
 import { addFaves } from './redux/fave'
//  import Screen3 from './Screen3'
import FilterContainer from './FilterContainer'
// import Geolocation from '@react-native-community/geolocation';
import * as Location from 'expo-location';
import MapContainer from './MapContainer'

  const Screen2 = ({ navigation, route }) => {

    const dispatch = useDispatch()

    useEffect(() => {
      fetch("http://localhost:3000/api/v1/locations")
      .then(res => res.json())
      .then(locationArray => {
        const action = addItems(locationArray)
        dispatch(action)
      })
      .catch((error) => {
        console.error(error);
      })
    },[dispatch])

    useEffect(() => {
      fetch("http://localhost:3000/api/v1/favourites")
      .then(res => res.json())
      .then(faveArray => {
        const faveAction = addFaves(faveArray)
        dispatch(faveAction)
      })
      .catch((error) => {
        console.error(error);
      })
    },[dispatch])  

    const restOrBar = useSelector(state => {
      return state.restBar.restBar
    })

    const restType = useSelector(state => {
      return state.restType.restType
  })

    const mapRef = React.createRef();

    return(
      <View style={styles.screen}>
        <MapContainer mapRef={mapRef} navigation={navigation} />
        <FilterContainer mapRef={mapRef}/>
      </View>
    )
}

export default Screen2

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
    // padding: 20,
    // marginTop: 20,
    fontSize: 42,
  },
  map: {
    width: 650,
    height: 670,
    // Dimensions.get('window').height,
    marginTop: 150,
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