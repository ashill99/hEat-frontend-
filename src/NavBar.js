import React, {useEffect, useState} from 'react';
import { View, Text } from 'react-native';
import 'react-native-gesture-handler';
import styled from 'styled-components'
import MyTabs from './MyTabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/MaterialIcons';


const NavBar = ({navigation, routes}) => {

    return (
        <Wrapper>
            <Container>
                <MaterialCommunityIcons
                name="home" 
                color={'blue'} 
                size={'40'} 
                onPress={() => {navigation.navigate('Screen1')}}
                />
            </Container>
            <Container >
                <MaterialCommunityIcons name="account" color={'blue'} size={'40'} />
            </Container>
            <Container>
                <Icon name="restaurant" size={40} color={'blue'} />
            </Container>
            <Container>
                <Icon name="nightlife" size={40} color={'blue'} /></Container>
            <Container>
                <Icon 
                name="stars" 
                size={40} 
                color={'blue'} 
                onPress={() => {navigation.navigate('Screen4')}}
                />
            </Container>
        </Wrapper>
    )
}

export default NavBar 

const Wrapper = styled.View`
    height: 5%;
    display: flex;
    flex-wrap: wrap;
    background-color: #F4C430;
`

const Container = styled.View`
      display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-left: 40;
`