import React, { useEffect, useState } from 'react';
import { StyleSheet, SafeAreaView, Linking, ScrollView, Button, Image, Text, View, Dimensions } from 'react-native';
import 'react-native-gesture-handler';
import CommentsContainer from './CommentsContainer'
import {useSelector, useDispatch} from 'react-redux'
import FaveContainer from './FaveContainer'
import { addFaves, updateFaves, deleteFave } from './redux/fave'
import NavBar from './NavBar'
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';


  const Screen3 = ({ navigation, route}) => {
    
    const [faves, setFaves] = useState([])

    const { location } = route.params;

  const dispatch = useDispatch()

  // let [fontsLoaded] = useFonts({
  //   'PlayWithFire': require('./assets/fonts/PlayWithFire.ttf'),
  // });

function restTypeDisplay() {
  if (location.restType.length > 0) {
    return ( 
    <Text>
      {location.restType}
    </Text>)} 
    else { return null }
  }

    return (
      <>
                <NavBar navigation={navigation}/>
<ScrollView style={styles.container}>

        <View style={{height: "60%"}}> 

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
          <FaveContainer faves={faves} location={location}/>

          <CommentsContainer location={location}/>

        </View>
        </ScrollView>
    </>
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