import React, { useEffect, useState } from 'react';
import { StyleSheet, ScrollView, Button, Text, Image, View, ImageBackground } from 'react-native';
import 'react-native-gesture-handler';
import Title from './Title'
import NavBar from './NavBar'
import styled from 'styled-components'
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import Login from './Login'
import Signup from './Signup'
import {useSelector} from 'react-redux'
import {URL} from '@env'
import AsyncStorage from '@react-native-async-storage/async-storage';


const Screen1 = ({ navigation, route }) => {

  const [loggedIn, setLoggedIn] = useState(false)
  const [currentUser, setCurrentUser] = useState(null)


  let [fontsLoaded] = useFonts({
    'PlayWithFire': require('../assets/fonts/PlayWithFire.ttf'),
  });
  
console.log(loggedIn, "loggedin")

  useEffect(() => {
    const token = AsyncStorage.getItem('token')

    fetch(`${URL}/profile`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`
      },
    })
    .then((r) => r.json())
    .then((user) => {
      setCurrentUser(user)
      setLoggedIn(true)
      console.log("isthisrunning")
    })
  },[])

  console.log(currentUser, "screen1 currentUser ")

    return( 
      <>
      <NavBar navigation={navigation}/>
      <Scroll>
        <Container>
          <Title />
          {loggedIn ? 
          <>
            <WarmUpButton
              title="Warm Up"
              onPress={() => {
                navigation.navigate('Screen2', {
                  latitude: 40.7004154,
              longitude: -73.9089705
                })
              }}
            >
              <WarmSpan>Warm Up</WarmSpan>
            </WarmUpButton>
            <SignOutButton
              title="Sign Out"
              onPress={() => {setCurrentUser([]), setLoggedIn(false)}}
            >
              <Span>Sign Out</Span>
            </SignOutButton>
          </> :
          <>
          <LoginButton
          onPress={() => {
            navigation.navigate('Login', {
              setCurrentUser: setCurrentUser,
              currentUser: currentUser,
              loggedIn: loggedIn,
              setLoggedIn: setLoggedIn,
            })}}
          >
            <Span>Login</Span>
          </LoginButton>
          <SignUpButton
            onPress={() => {
            navigation.navigate('Signup')}}
          >
            <Span>Sign Up</Span></SignUpButton>
          </> 
          }
          <Image source={{uri: "https://media.timeout.com/images/105711851/1372/772/image.jpg"}} style={{width: '100%', height: '50%', marginTop: 30}} />
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
width: 120px;
border-radius:20px;
align-self: center;
margin-top:15px;
margin-bottom:5px;
padding: 5px;

`
const SignOutButton = styled(LoginButton)`
background: blue;
`

const SignUpButton = styled(LoginButton)`
background: blue;
`
const WarmUpButton = styled.TouchableOpacity`
background: orange;
width: 220px;
border-radius:20px;
align-self: center;
margin-top:10px;
margin-bottom:10px;
padding: 15px;
font-size: 34px;
`

const WarmSpan = styled.Text`
color: #F7F8F3;
padding: 12px;
align-self: center;
font-size: 20px;
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