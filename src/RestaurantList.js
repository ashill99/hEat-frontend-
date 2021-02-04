import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function RestaurantList() {

    const [restState, setRestState] = useState([])
  
    useEffect(() => {
      fetch("http://localhost:3000/api/v1/locations/1")
    .then(r => r.json())
    .then(restData => {setRestState(restData)})
    .catch((error) => console.log(error))
    },[])
    
  
    console.log(restState)
  
    return (
      <View>
        <Text style={styles.title}>hEat NY</Text>
        <Text style={styles.title}>Restaurant: {restState.name}</Text>
        {/* <StatusBar style="auto" /> */}
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontSize: 20
    }
  });