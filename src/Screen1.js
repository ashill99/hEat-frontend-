import React, { useEffect, useState } from 'react';
import { StyleSheet, ScrollView, Button, Image, View, ImageBackground } from 'react-native';
import 'react-native-gesture-handler';
import { Text } from "react-native-svg";
import Title from './Title'
import NavBar from './NavBar'
import styled from 'styled-components'
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import Login from './Login'
import {useSelector} from 'react-redux'


const Screen1 = ({ navigation, route }) => {

  const [loggedIn, setLoggedIn] = useState(false)

  let [fontsLoaded] = useFonts({
    'PlayWithFire': require('../assets/fonts/PlayWithFire.ttf'),
  });

  const currentUser = useSelector(state => {
    return state.currentUser
  })

  console.log(currentUser, "screen1")

    return( 
      <>
      <NavBar navigation={navigation}/>
      <Scroll>
        <Container>
          <Title />
          <LoginButton
          onPress={() => {
              navigation.navigate('Login')}}
          >
            <Span>Login</Span>
          </LoginButton>
          <SignUpButton><Span>Sign Up</Span></SignUpButton>
          <WarmUpButton
            title="Warm Up"
            onPress={() => {
              navigation.navigate('Screen2', {
                latitude: 40.6942696,
            longitude: -73.9187482
              })
            }}
          ><Span>Warm Up</Span></WarmUpButton>
          <Image source={{uri: "https://media.timeout.com/images/105711851/1372/772/image.jpg"}} style={{width: '100%', height: '50%'}} />
        </Container>
        </Scroll>
        </>
  )
}

const Container = styled.View`
flex: 1;
width: 100%;
height: 94%;
display: flex;
backgroundColor: 	#FFEFD5;
`

const Span = styled.Text`
color: #F7F8F3;
padding: 12px;
align-self: center;
`

const LoginButton = styled.TouchableOpacity`
background: orange;
width: 100px;
border-radius:20px;
align-self: center;
margin-top:10px;
margin-bottom:10px;

`

const SignUpButton = styled(LoginButton)`
background: blue;
`
const WarmUpButton = styled(LoginButton)`
`

const Scroll = styled.ScrollView`
flex: 1;
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
});

export default Screen1