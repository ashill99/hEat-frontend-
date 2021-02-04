import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Button, Text, View, Dimensions, Callout, TouchableHighlight } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { PROVIDER_GOOGLE } from 'react-native-maps' 
import MapView, { Marker } from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';

// import './assets/fireMarker'

// import HomeMainScreen from './src/HomeMainScreen'

// import RestaurantList from './src/RestaurantList'

const Stack = createStackNavigator();

// function HomeScreen( ) {
//   return (
//       <HomeMainScreen />
//   );
// }

export default function App({ navigation }) {

  const [allLocations, setAllLocations] = useState([])
  const [currentLocation, setCurrentLocation] = useState([])
  
    useEffect(() => {
      fetch("http://localhost:3000/api/v1/locations")
    .then(r => r.json())
    .then(restData => {setAllLocations(restData)})
    .catch((error) => console.log(error))
    },[])
    
  
    console.log(allLocations)

const [region, setRegion] = useState({
  latitude: 40.6942696,
  longitude: -73.9187482,
  latitudeDelta: 0.06,
  longitudeDelta: 0.06
})

// const customMarker = () {
// }
function logLocation(location) {
  console.log(location)
}


// const allMarkers = allLocations.map((location, index) => {
//   return (
//     <Marker 
//       coordinate={{ latitude: location.latitude, longitude: location.longitude }}
//       key={index}
//       onPress={() => {
//           navigation.push('Screen3', { locationId: location.id })
//         }}>
//       <View styles={styles.marker}>
//         <Text styles={styles.text}>{location.name}🔥</Text>
//       </View>
//     </Marker>
//   )
// })

  const Screen1 = ({ navigation, route }) => (
    <View style={styles.screen}>
      <Text style={styles.title}>Screen 1</Text>
      <Text style={styles.title}>Welcome to hEat NY</Text>
      <Text style={styles.text}>Only New York's hottest bars and restaurants. Literally.</Text>
      <Button
        title="Go to Screen 2 (Map)"
        onPress={() => {
          navigation.push('Screen2')
        }}
      />
    </View>
  )

  const Screen2 = ({ navigation, route }) => (
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
      {allLocations.map((location, index) => {
        return (
          <Marker 
            coordinate={{ latitude: location.latitude, longitude: location.longitude }}
            key={index}
            onPress={() => {
              {getLocationDetails(location.id)}
                navigation.push('Screen3', { id: location.id })
            logLocation(location.id)
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

function getLocationDetails(id) {
    fetch(`http://localhost:3000/api/v1/locations/${id}`)
  .then(r => r.json())
  .then(restData => {setCurrentLocation(restData)})
  .catch((error) => console.log(error))
}

  const Screen3 = ({ navigation, route}) => (
    <View>
      <Text style={styles.title}>{currentLocation.name}</Text>
      <Text>{currentLocation.restOrBar}</Text>
      <Text>{currentLocation.restType}</Text>
      <Text>{currentLocation.address}</Text>
      <Text>{currentLocation.rating}</Text>
      <Text>Picture...</Text>
      <Text>Website...</Text>
      <Text>Opening Hours...</Text>
      <Text>Menu Link or picture...</Text>
    </View>

  )


  return (
<NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Screen1" component={Screen1} options={{ title: "🍴hEat🔥"}} />
        <Stack.Screen name="Screen2" component={Screen2} />
        <Stack.Screen name="Screen3" component={Screen3} />
      </Stack.Navigator>
    </NavigationContainer>
  );
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
