import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, ScrollView, Linking, Text, View, Image } from 'react-native';
import {useSelector} from 'react-redux'
import NavBar from './NavBar'
import 'react-native-gesture-handler';
import styled from 'styled-components'
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import {useForm } from 'react-hook-form'
import {URL} from '@env'
import { useDispatch } from 'react-redux'
import {addCurrentUser} from './redux/currentUser'


export default function Signup({navigation, route, currentUser, setCurrentUser}) {  
    
    const [email, setEmail] = useState("")
    const [userName, setUserName] = useState("")

    const dispatch = useDispatch()

  let [fontsLoaded] = useFonts({
    'PlayWithFire': require('../assets/fonts/PlayWithFire.ttf'),
  });

  function handleSubmit() {

    setEmail("")
}

    return (
        <>
        <Wrapper>
        <NavBar navigation={navigation}/>
        <Title>Signup</Title>
            <Input 
                placeholder="example@hEat.com"
                value={email}
                onChangeText={setEmail}
            />
            <Input 
                placeholder="Username"
                value={userName}
                onChangeText={setUserName}
            />

            <LoginButton onPress={handleSubmit}> 
                <Span>Login</Span>
            </LoginButton>

            <HeatImage source={{
                uri: "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2020/08/1862/1046/Outdoor-Heating-Lamp-iStock-1.jpg?ve=1&tl=1"
            }} />
        </Wrapper>
      </>
    );
}

const Title = styled.Text`
font-size: 24px;
`
const LoginButton = styled.TouchableOpacity`
        background: orange;
        width: 140px;
        margin-bottom: 20px;
        margin-top: 20px;
        border-radius:20px;
        align-self: center
`

const Input = styled.TextInput`
background: #e1e1e1;
width: 80%;
border-radius:20px;
padding-left: 12px;
height: 50px;
margin-top: 20px;
border-radius: 20px;
align-self: center;
`
const HeatImage = styled.Image`
    width: 100%;
    height: 400px;
`
  const Form = styled.View`
    padding:20px;
  `

const Scroll = styled.ScrollView`
  flex: 1;
  backgroundColor: 	#FFEFD5;  
  flexGrow: 1;
  `

  const Wrapper = styled.View`
flex: 1;
width: 100%;
height: 95%;
display: flex;
backgroundColor: 	#FFEFD5;  
`


const Span = styled.Text`
color: #F7F8F3
padding: 12px;
align-self: center
`