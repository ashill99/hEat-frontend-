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

  const MapContainer = ({ navigation, route, mapRef }) => {

    const dispatch = useDispatch()

        const locations = useSelector(state => {
          return state.location.items
        })

        const restOrBar = useSelector(state => {
            return state.restBar.restBar
          })

        const filteredLocations = locations
        .filter(location => location.restOrBar === restOrBar)
  
          const [initialRegion, setInitialRegion] = useState({
            latitude: 40.6942696,
            longitude: -73.9187482,
            latitudeDelta: 0.06,
            longitudeDelta: 0.06
          })

    return (
      <View>
        <MapView 
          ref={mapRef}
          style={styles.map}
          provider={PROVIDER_GOOGLE} 
          region={initialRegion}
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
                  navigation.push('Screen3')
                }}> 
                <View styles={styles.marker}>
                  <Text styles={styles.text}>{location.name}🔥</Text>
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
      marginTop: 40,
      alignItems: 'center',
    },
    title: {
      fontSize: 42,
    },
    map: {
      width: 650,
      height: 670,
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