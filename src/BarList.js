import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {useSelector} from 'react-redux'
import NavBar from './NavBar'
import 'react-native-gesture-handler';
import styled from 'styled-components'



export default function BarList({navigation, routes}) {  
    
  const locations = useSelector(state => {
    return state.location.items
  })

const bars = locations.filter((item) => item.restOrBar === "Bar")
// const filteredBars = bars.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
// const sortedBars = filteredBars.sort((a, b) => a.name.localeCompare(b.name));

  const eachBar = bars.map(item => {
    return (<BarText>{item.name}</BarText>)
  })

  
  // function barOrRest(location) {
  //   if (location.restOrBar === "Bar") {
  //     return (
  //       <Text>Bar</Text>
  //     )
  //   } else {
  //     <Text>Bar</Text>
  //   }
  // }
  // const location = locations.map((location) => {return (
  //   <BarText>{Bars.name}</BarText>
  //   )})
    
    return (
      <Wrapper>
      <NavBar navigation={navigation}/>
        <BarItem>
        {eachBar}
        </BarItem>
      </Wrapper>
    );
  }
  
  const Wrapper = styled.View`
flex: 1;
width: 100%;
height: 95%;
display: flex;
backgroundColor: 	#FFEFD5;  `

  const BarText = styled.Text`
    font-size: 15px;
    color: #777;
    padding-bottom: 10;
    padding-top: 10;


  `
  const BarItem = styled.View`
          alignItems: center;
      justifyContent: center;
        `