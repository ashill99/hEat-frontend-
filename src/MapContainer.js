import React, { useState} from 'react';
import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import { Marker } from 'react-native-maps';
import MapView from "react-native-map-clustering";
import { PROVIDER_GOOGLE } from 'react-native-maps' 
 import {useSelector} from 'react-redux'
 import {useDispatch} from 'react-redux'
 import { addLocation } from './redux/currentLocation'
// import * as Location from 'expo-location';

  const MapContainer = ({ navigation, route, mapRef, latitude, longitude }) => {

    const dispatch = useDispatch()

      const locations = useSelector(state => {
          return state.location.items
        })

        const restOrBar = useSelector(state => {
            return state.restBar.restBar
          })

        const filteredLocations = locations
        .filter(location => location.restOrBar === restOrBar)

          const region = 
          {
            latitude: latitude,
            longitude: longitude,
            latitudeDelta: 0.03,
            longitudeDelta: 0.03
          }

    return (
      <View>
        <MapView 
          ref={mapRef}
          style={styles.map}
          provider={PROVIDER_GOOGLE}         
          initialRegion={region}
          navigation={navigation}
          showsUserLocation={true}
        >
          {(restOrBar === "All" ? locations : filteredLocations).map((location, index) => {
            return (
              <Marker 
                coordinate={{ latitude: location.latitude, longitude: location.longitude }}
                key={location.id}
                onPress={() => {
                  const action2 = addLocation(location)
                  dispatch(action2)
                  navigation.push('Screen3', {
                    location: location
                    })
                }}> 
                <View styles={styles.marker}>
                 { region.longitudeDelta < 0.4 ? <Text styles={styles.text}>{location.name}</Text> : null }
                  <Text>🔥</Text>
                </View>
              </Marker> ) 
            })
          }
        </MapView> 
      </View>
) 
  }
  export default MapContainer

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    screen: {
      // marginTop: 40,
      alignItems: 'center',
    },
    title: {
      fontSize: 42,
    },
    map: {
      width: '100%',
      height: '100%',
      marginTop: 40,
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