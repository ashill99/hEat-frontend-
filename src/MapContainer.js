import React, { useState} from 'react';
import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { PROVIDER_GOOGLE } from 'react-native-maps' 
 import {useSelector} from 'react-redux'
 import {useDispatch} from 'react-redux'
//  import { addItems } from "./redux/location";
 import { addLocation } from './redux/currentLocation'
// import * as Location from 'expo-location';

  const MapContainer = ({ navigation, route, mapRef, latitude, longitude }) => {

    const dispatch = useDispatch()

    console.log(latitude, "map container lat")

    // console.log(chosenLocation, "chosenLocation")

        const locations = useSelector(state => {
          return state.location.items
        })

        const restOrBar = useSelector(state => {
            return state.restBar.restBar
          })

        const filteredLocations = locations
        .filter(location => location.restOrBar === restOrBar)
  
          // const [initialRegion, setInitialRegion] = useState({
          //   latitude: 40.6942696,
          //   longitude: -73.9187482,
          //   latitudeDelta: 0.06,
          //   longitudeDelta: 0.06
          // })

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
          region={region}
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
                 { region.longitudeDelta < 0.4 ? <Text styles={styles.text}>{location.name} {console.log(region.latitudeDelta)}</Text> : null }
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
      width: 650,
      height: 770,
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