import React, {useEffect, useState} from 'react';
import { StyleSheet, Button, Text, View, Dimensions, Callout, TouchableHighlight } from 'react-native';
import 'react-native-gesture-handler';
// import {useDispatch, useSelector} from 'react-redux'
// import { addRegion } from './redux/region'

const Screen1 = () => {

  // const [userLocation, setUserLocation] = useState(null);
  // const [errorMsg, setErrorMsg] = useState(null);

  // location fetch below 

  // useEffect(() => {
  //   (async () => {
  //     let { status } = await Location.requestPermissionsAsync();
  //     if (status !== 'granted') {
  //       setErrorMsg('Permission to access location was denied');
  //       return;
  //     }

  //     let userLocation = await Location.getCurrentPositionAsync({});
  //     setUserLocation(userLocation);
  //   })();
  // }, []);

  // let text = 'Waiting..';
  // if (errorMsg) {
  //   text = errorMsg;
  // } else if (userLocation) {
  //   text = JSON.stringify(userLocation)
  // const action = addRegion(userLocation.coords.latitude, userLocation.coords.longitude)
  // dispatch(action)
  // }

  // const dispatch = useDispatch()

  // const action = addRegion(userLocation.coords.latitude, userLocation.coords.longitude)
  // dispatch(action)

// region = useSelector(state => {
//     return state.region
//   })

  // console.log(text, "line 48")
  // console.log(text.latitude)
  // console.log(userLocation, "line 50")
  // console.log(userLocation.coords.latitude, "line 51")
// console.log(region, "region")

    return( ({ navigation, route }) => (
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
          {/* <Text>{region}</Text> */}
        </View>
      )
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

export default Screen1