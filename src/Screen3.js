import React, { useEffect, useState } from 'react';
import { StyleSheet, SafeAreaView, Linking, ScrollView, Button, Image, Text, View, Dimensions } from 'react-native';
import 'react-native-gesture-handler';
import CommentsContainer from './CommentsContainer'
import {useSelector, useDispatch} from 'react-redux'
import FaveContainer from './FaveContainer'
import { addFaves, updateFaves, deleteFave } from './redux/fave'


  const Screen3 = ({ navigation, route}) => {
    
    const [faves, setFaves] = useState([])

  const dispatch = useDispatch()

    const location = useSelector(state => {
      return state.currentLocation
    })

    console.log(faves, "faves screen3")

    useEffect(() => {
      fetch("http://localhost:3000/api/v1/favourites")
      .then(res => res.json())
      .then(faveArray => {
        const faveAction = addFaves(faveArray)
        dispatch(faveAction)
        setFaves(faveArray)
      })
      .catch((error) => {
        console.error(error);
      })
    },[dispatch])

function restTypeDisplay() {
  if (location.restType.length > 0) {
    return ( 
    <Text>
      {location.restType}
    </Text>)} 
    else { return null }
  }

    return (
      // <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>

        <View style={{height: "60%"}}> 

          <FaveContainer faves={faves} />

          <Text style={styles.title}>
            {location.name}
          </Text>
          <Text>
            {location.restOrBar}
          </Text>
          {restTypeDisplay()}
          <Text>
            {location.address}
          </Text>
          <Text>
            {location.hours}
          </Text>
          <Image 
            source={{uri: location.imgUrl}} 
            style={{width: "100%", height: "45%"}}
          />
          <Text 
            style={{color: 'blue'}}
            onPress={() => Linking.openURL(location.website)}>
            Website
          </Text>      
          <Text 
            style={{color: 'blue'}}
            onPress={() => Linking.openURL(location.menu)}>
            Menu{'\n'}
          </Text> 

          <CommentsContainer />

        </View>
        </ScrollView>
    // </SafeAreaView>
    )
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      // marginTop: Constants.statusBarHeight,
    },
    scrollView: {
      backgroundColor: 'white',
      marginHorizontal: 20,
    },
    title: {
      padding: 20,
      fontSize: 42,
    },
    text: {
      color: "#000000"
    }
  });

  export default Screen3