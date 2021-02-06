import React, {useEffect, useState} from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Button, Text, View, Dimensions, Callout, TouchableHighlight } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { PROVIDER_GOOGLE } from 'react-native-maps' 
 import {useSelector} from 'react-redux'
 import {useDispatch} from 'react-redux'
 import { addItems } from "./redux/location";
//  import Screen3 from './Screen3'



  const Screen2 = ({ navigation, route }) => {

    const dispatch = useDispatch()


  useEffect(() => {
    fetch("http://localhost:3000/api/v1/locations")
    .then(res => res.json())
    .then(locationArray => {
      // const mappedLocation = locationArray.map((location) => {
      //   return {
      //     ...location, 
      //   }
      // })
      const action = addItems(locationArray)
      dispatch(action)
    })
    // the dispatch won't effect the useeffect but will stop console warning
  },[dispatch])


    const locations = useSelector(state => {
      return state.location.items
    })

    console.log(locations)

    const [region, setRegion] = useState({
      latitude: 40.6942696,
      longitude: -73.9187482,
      latitudeDelta: 0.06,
      longitudeDelta: 0.06
    })

    return(
      <View style={styles.screen}>
      <Text style={styles.title}>Screen 2</Text>
      <Button
        title="Go back"
        onPress={() => {
          navigation.pop()
        }}
      />
      <MapView 
        style={styles.map}
        provider={PROVIDER_GOOGLE} 
        region={region}
        navigation={navigation}
      >
      {locations.map((location, index) => {
        return (
          <Marker 
            coordinate={{ latitude: location.latitude, longitude: location.longitude }}
            key={index}
            onPress={() => {
              // {getLocationDetails(location.id)}
              // console.log(location.id)
              let id = location.id
                navigation.push('Screen3', id={id} )
            // logLocation(location.id)
            }}> 
              <View styles={styles.marker}>
                <Text styles={styles.text}>{location.name}🔥</Text>
              </View>
          </Marker>
        )
      })}
        </MapView>
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