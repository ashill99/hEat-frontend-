import React, {useEffect, useState} from 'react';
import 'react-native-gesture-handler';
import styled from 'styled-components'
import MyTabs from './MyTabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { color } from 'react-native-reanimated';


const NavBar = ({navigation, route}) => {


    return (
        <Wrapper>
            <Container>
                <MaterialCommunityIcons
                name="home" 
                color='blue' 
                size="40" 
                onPress={() => {navigation.navigate('Screen1')}}
                />
            </Container>
            <Container >
                <MaterialCommunityIcons name="account" color={'blue'} size={'40'} />
            </Container>
            <Container>
                <Icon 
                name="restaurant" 
                size="40" 
                color='blue'
                onPress={() => {navigation.navigate('RestaurantList', {
                    type: "Restaurant",
                })
                }}
                />
            </Container>
            <Container>
                <Icon 
                name="map" 
                size="40" 
                color='blue' 
                onPress={() => {
              navigation.navigate('Screen2', {
                latitude: 40.6942696,
            longitude: -73.9187482
              })
            }}
                />
            </Container>
            <Container>
                <Icon 
                name="nightlife" 
                size="40" 
                color='blue'
                onPress={() => {navigation.navigate('BarList', {
                    type: "Bar"
                })
                }}
                />
            </Container>
            <Container>
                <Icon 
                name="stars" 
                size="40" 
                color='blue'
                onPress={() => {navigation.navigate('Screen4')}}
                />
            </Container>
        </Wrapper>
    )
}

export default NavBar 

const Wrapper = styled.View`
    height: 6%;
    display: flex;
    flex-wrap: wrap;
    background-color: #FFEFD5;
    ${'' /* border: 1px solid orange; */}
`

const Container = styled.View`
      display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-left: 25px;
    padding-top: 4px;
`