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
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Login({navigation, route}) {  
    
    const dispatch = useDispatch()

    // const { currentUser, setCurrentUser, loggedIn, setLoggedIn } = route.params;
    const {currentUser, setCurrentUser } = route.params
    const [users, setUsers] = useState([])
    const [caseEmail, setCaseEmail] = useState("")
    const [casePassword, setCasePassword] = useState("")
    const [loaded, setLoaded] = useState(false)

console.log(currentUser, "currentUser")

  let [fontsLoaded] = useFonts({
    'PlayWithFire': require('../assets/fonts/PlayWithFire.ttf'),
  });

  useEffect(() => {
    fetch(`${URL}/api/v1/users`)
    .then(r => r.json())
    .then(usersArray => {
        setUsers(usersArray)
    })
  }, [])
  
function handleSubmit(e) {
  e.preventDefault()
  const email = caseEmail.toLowerCase()
  const password = casePassword.toLowerCase()
  const formData = { email, password };
  console.log(formData, "formData");
  fetch(`${URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(formData)
  })
  .then((r) => r.json())
  .then((data) => {
    setCurrentUser(data.user)
    AsyncStorage.setItem("token", data.token)
    navigation.navigate("Screen1")
  })
  console.log(currentUser, "second currentUser")
}
  
//   function handleSubmit() {
//     const thisUser = users.filter(user => user.email.toLowerCase() === email.toLowerCase())
//     // dispatchCurrentUser(thisUser)
//     setCurrentUser(thisUser) 
//     console.log(currentUser)
//     setLoggedIn(true)
//     setEmail("")
//     navigation.navigate("Screen1")
// }

// function dispatchCurrentUser(user) {
//     const action = addCurrentUser(user)
//     dispatch(action)
//     console.log (action.payload, "state and action payload")

// }

// console.log(currentUser, 'currentUser')

    return (
        <>
        <Wrapper>
        <NavBar navigation={navigation}/>
        {/* <Title>Login</Title> */}
            <Input 
                placeholder="example@hEat.com"
                value={caseEmail}
                onChangeText={setCaseEmail}
            />
            <Input 
                placeholder="p@55w0rd"
                secureTextEntry={true}
                value={casePassword}
                onChangeText={setCasePassword}
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
        margin-top: 40px;
        margin-bottom: 20px;
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
${'' /* margin-bottom: 20px; */}
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