import React, { useEffect } from 'react';
import { StyleSheet, Button, Image, View, ImageBackground } from 'react-native';
import 'react-native-gesture-handler';
import { Text } from "react-native-svg";
import Title from './Title'
import NavBar from './NavBar'
import styled from 'styled-components'
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

const Screen1 = ({ navigation, route }) => {

  let [fontsLoaded] = useFonts({
    'PlayWithFire': require('../assets/fonts/PlayWithFire.ttf'),
  });

    return( 
      <>
      <NavBar navigation={navigation}/>
        <Container>
          <Title />
          <Button
            style={styles.button}
            title="Warm Up"
            onPress={() => {
              navigation.navigate('Screen2', {
                latitude: 40.6942696,
            longitude: -73.9187482
              })
            }}
          />
          <Image source={{uri: "https://media.timeout.com/images/105711851/1372/772/image.jpg"}} style={{width: '100%', height: '50%'}} />
        </Container>
        </>
  )
}

const Container = styled.View`
flex: 1;
width: 100%;
height: 95%;
display: flex;
backgroundColor: 	#FFEFD5;
`

const HeatTitle = styled.Text`
font-family: "PlayWithFire";
font-size: 66px;
color: orange;
`
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4C430',
    alignItems: 'center',
    justifyContent: 'center',
  },
  screen: {
    flex: 1,
    marginTop: 40,
    alignItems: 'center',
    backgroundColor: '#6ED4C8'
  },
  title: {
    padding: 20,
    fontSize: 42,
    color: '#d6ffff'
  },
  text: {
    color: "#d6ffff",
    fontWeight: 'bold'
  },
  button: {
    fontSize: 100
  },
});

export default Screen1