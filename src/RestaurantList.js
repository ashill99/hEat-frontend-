import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, ScrollView, Linking, Text, View } from 'react-native';
import {useSelector} from 'react-redux'
import NavBar from './NavBar'
import 'react-native-gesture-handler';
import styled from 'styled-components'
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import Stars from 'react-native-stars';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


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

      const ratings = item.comments.map((comment => comment.rating))

      function getAvg(ratings) {
        const total = ratings.reduce((acc, c) => acc + c, 0);
        return total / ratings.length;

      }
      
      const average = getAvg(ratings);
      const ratAv = Math.round(average)
    // } 


    return (

    <ItemView
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
          style={{color: 'blue'}}
          onPress={() => navigation.push('Screen2', {
          latitude: item.latitude,
          longitude: item.longitude
          })}
        >
          Map 📍
        </RestaurantText>
        <RestaurantText 
        style={{color: 'blue'}}
        onPress={() => Linking.openURL(item.menu)}
      >
        Menu
      </RestaurantText> 

      <RestaurantText 
        style={{color: 'blue'}}
        onPress={() => Linking.openURL(item.website)}
      >
        Website
      </RestaurantText> 
      {ratAv > 0 ? <Stars
            default={ratAv}
            count={5}
            fullStar={<Icon name={'fire'} style={[styles.myStarStyle]}/>}
            emptyStar={<Icon name={'bandcamp'} style={[styles.myStarStyle, styles.myEmptyStarStyle]}/>}
          /> 
          :
          <NoStars>Not Enough Reviews</NoStars>  }
    </ItemView>
)
  }) 
    
    return (
      <>
        <NavBar navigation={navigation}/>
        <Wrapper>
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
        </>
    );
  }
  
  const Form = styled.View`
    padding:20px;
  `

  const ItemView = styled.View`
      border-bottom-color: black;
  border-bottom-width: 2px;
  margin-bottom: 10px;
  `
  
  const SearchBar = styled.TextInput`
  background: #eefbfb;
  width: 100%;
  border-radius: 30px;
  padding-left: 24px;
  padding-top: 20px;
  font-size: 20px;
`

  const Wrapper = styled.ScrollView`
flex: 1;
width: 100%;
height: 90%;
display: flex;
backgroundColor: 	#FFEFD5;  
flexGrow: 1;

`

const RestaurantTitle = styled.Text`
font-family: "PlayWithFire";
  font-size: 25px;
  color: orange;
  padding-top: 15px;
  padding-bottom: 5px;
  align-self: center;
`

  const RestaurantText = styled.Text`
    font-size: 16px;
    color: #777;
    padding-bottom: 5px;
    padding-top: 10px;
    align-self: center;

  `
  const RestaurantItem = styled.View`
  padding-top: 10px;
  display: flex;
  padding-bottom: 20px;
    padding-left: 10px;
    align-self: center;
        `
const NoStars = styled.Text`
    font-size: 10px;    
    align-self: center;
    color: gray;
    padding-bottom: 5px;


`
        const styles = StyleSheet.create({
        myStarStyle: {
          color: 'orange',
          backgroundColor: 'transparent',
          textShadowColor: 'black',
          textShadowOffset: {width: 1, height: 1},
          textShadowRadius: 1,
          fontSize: 30,
          paddingBottom: 5,

        },
        myEmptyStarStyle: {
          color: 'lightgray',
        }})