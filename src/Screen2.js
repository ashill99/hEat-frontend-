import React, {useRef, useEffect, useState} from 'react';
import 'react-native-gesture-handler';
import { StyleSheet, View } from 'react-native';
 import {useSelector} from 'react-redux'
 import {useDispatch} from 'react-redux'
 import { addFaves } from './redux/fave'
import FilterContainer from './FilterContainer'
// import Geolocation from '@react-native-community/geolocation';
import * as Location from 'expo-location';
import MapContainer from './MapContainer' 
import { addItems } from "./redux/location";
import styled from 'styled-components'
import NavBar from './NavBar'
import {URL} from '@env'

  const Screen2 = ({ navigation, route, locations }) => {

const [isLoaded, setIsLoaded] = useState(false)
console.log(URL)
const {latitude, longitude } = route.params

console.log(latitude, "latitude")
console.log(longitude, "longitude")

    const dispatch = useDispatch()

    useEffect(() => {
      fetch(`${URL}/api/v1/locations`)
      .then(res => res.json())
      .then(locationArray => {
        const action = addItems(locationArray)
        dispatch(action)
        setIsLoaded(true)
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
      <>
        {isLoaded ? 
        <>
          <NavBar navigation={navigation}/>
          <Container>
              <MapContainer mapRef={mapRef} navigation={navigation} latitude={latitude} longitude={longitude}/>
              <FilterContainer mapRef={mapRef}/>
          </Container>
        </>
      : null }
      </>
    )
}

export default Screen2

const Container = styled.View`
width: 100%;
height: 100%;
display: flex;
`


const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
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