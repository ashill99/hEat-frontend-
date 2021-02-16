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


export default function BarList({navigation, route}) {  
    
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

const bars = locations.filter((item) => item.restOrBar === "Bar")
const filteredBars = bars.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
const sortedBars = filteredBars.sort((a, b) => a.name.localeCompare(b.name));

  const eachLocation = sortedBars.map(item => {

      const ratings = item.comments.map((comment => comment.rating))

      function getAvg(ratings) {
        const total = ratings.reduce((acc, c) => acc + c, 0);
        return total / ratings.length;

      }
      
      const average = getAvg(ratings);
      // setRatAv(Math.round(average))
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
  color: orange;
  padding-top: 15px;
  padding-bottom: 5px;
  align-self: center;
`

  const RestaurantText = styled.Text`
    font-size: 16px;
    color: #777;
    ${'' /* padding-bottom: 10; */}
    ${'' /* padding-top: 10; */}
    align-self: center;
  `
  const ItemView = styled.View`
  border-bottom-color: black;
border-bottom-width: 2px;
margin-bottom: 10px;
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

`

        const styles = StyleSheet.create({
        myStarStyle: {
          color: 'orange',
          backgroundColor: 'transparent',
          textShadowColor: 'black',
          textShadowOffset: {width: 1, height: 1},
          textShadowRadius: 1,
          fontSize: 30,
        },
        myEmptyStarStyle: {
          color: 'lightgray',
        }})