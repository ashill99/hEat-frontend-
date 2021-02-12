import React, {useRef, useEffect} from 'react';
import 'react-native-gesture-handler';
import { StyleSheet, View } from 'react-native';
 import {useSelector} from 'react-redux'
 import {useDispatch} from 'react-redux'
 import { addFaves } from './redux/fave'
import FilterContainer from './FilterContainer'
// import Geolocation from '@react-native-community/geolocation';
import * as Location from 'expo-location';
import MapContainer from './MapContainer'

  const Screen2 = ({ navigation, route, locations }) => {

    const dispatch = useDispatch()

    // useEffect(() => {
    //   fetch("http://localhost:3000/api/v1/favourites")
    //   .then(res => res.json())
    //   .then(faveArray => {
    //     const faveAction = addFaves(faveArray)
    //     dispatch(faveAction)
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   })
    // },[dispatch])  

    const restOrBar = useSelector(state => {
      return state.restBar.restBar
    })

    const restType = useSelector(state => {
      return state.restType.restType
  })

    const mapRef = React.createRef();

    return(
      <View style={styles.screen}>
        <MapContainer mapRef={mapRef} navigation={navigation}/>
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
    fontSize: 42,
  },
  text: {
    color: "#000000"
  }
});