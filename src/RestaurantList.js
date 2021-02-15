import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, ScrollView, Linking, Text, View } from 'react-native';
import {useSelector} from 'react-redux'
import NavBar from './NavBar'
import 'react-native-gesture-handler';
import styled from 'styled-components'
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

export default function RestaurantList({navigation, route}) {  
    
  let [fontsLoaded] = useFonts({
    'PlayWithFire': require('../assets/fonts/PlayWithFire.ttf'),
  });


  const [search, setSearch ] = useState("")

  const locations = useSelector(state => {
    return state.location.items
  })

  function handleNewSearch(search) {
    setSearch(search)
    setSearch(search)
    console.log(search)
}

const restaurants = locations.filter((item) => item.restOrBar === "Restaurant")
const filteredRestaurants = restaurants.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
const sortedLocations = filteredRestaurants.sort((a, b) => a.name.localeCompare(b.name));

  const eachLocation = sortedLocations.map(item => {
    return (

    <View
      key={item.id}
    >
      <RestaurantTitle
        onPress={() => navigation.push('Screen3', {
        location: item
        })}
      >
        {item.name}
      </RestaurantTitle>
            <RestaurantText
          onPress={() => navigation.push('Screen2', {
          latitude: item.latitude,
          longitude: item.longitude
          })}
        >
          Map
        </RestaurantText>
        <RestaurantText 
        style={{color: 'blue'}}
        onPress={() => Linking.openURL(item.menu)}
      >
        Menu{'\n'}
      </RestaurantText> 

      <RestaurantText 
        style={{color: 'blue'}}
        onPress={() => Linking.openURL(item.website)}
      >
        Website
      </RestaurantText> 



    </View>
)
  }) 
    
    return (
      <Scroll>
        <Wrapper>
        <NavBar navigation={navigation}/>
        <Form>
          <SearchBar
            placeholder="Search..." 
            value={search}
              onChangeText={handleNewSearch}
            />
        </Form>
          <RestaurantItem>
          {eachLocation}
          </RestaurantItem>
        </Wrapper>
      </Scroll>
    );
  }
  
  const Form = styled.View`
    padding:20px;
  `
  
  const SearchBar = styled.TextInput`
  background: #eefbfb;
  width: 100%;
  border-radius: 30px;
  padding-left: 24px;
  padding-top: 20px;
  font-size: 20px;
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

const RestaurantTitle = styled.Text`
font-family: "PlayWithFire";
  font-size: 25px;
  color: #103;
  padding-top: 10px;
  padding-bottom: 10px;
`

  const RestaurantText = styled.Text`
    font-size: 15px;
    color: #777;
    ${'' /* padding-bottom: 10; */}
    ${'' /* padding-top: 10; */}
  `
  const RestaurantItem = styled.View`
  padding-top: 10px;
  display: flex;
  padding-bottom: 10px;
    padding-left: 10px;

        `