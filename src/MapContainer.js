import React, {useRef, useEffect, useState} from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, SearchBar, PermissionsAndroid, TextInput, Button, Text, View, Dimensions, Callout, TouchableHighlight } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { PROVIDER_GOOGLE } from 'react-native-maps' 
 import {useSelector} from 'react-redux'
 import {useDispatch} from 'react-redux'
 import { addItems } from "./redux/location";
 import { addLocation } from './redux/currentLocation'
 import { addFaves } from './redux/fave'
import * as Location from 'expo-location';
import Screen3 from './Screen3'

  const MapContainer = ({ navigation, route }) => {

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
        .catch((error) => {
          console.error(error);
        })
        // the dispatch won't effect the useeffect but will stop console warning
      },[dispatch])
    
        const locations = useSelector(state => {
          return state.location.items
        })

        const restOrBar = useSelector(state => {
            return state.restBar.restBar
          })
      
          console.log(locations, "locations 91")
      
      
          const restType = useSelector(state => {
            return state.restType.restType
        })
      
          const filteredLocations = locations
          .filter(location => location.restOrBar === restOrBar)

          const mapRef = React.createRef();

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
             key={index}
             onPress={() => {
               const action2 = addLocation(location)
               dispatch(action2)
               navigation.push('Screen3')
             }}> 
               <View styles={styles.marker}>
                 <Text styles={styles.text}>{location.name}🔥</Text>
               </View>
           </Marker> ) 
       })}
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