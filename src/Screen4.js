import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { StyleSheet, Linking } from 'react-native';
import 'react-native-gesture-handler';
import NavBar from './NavBar'
import {URL} from '@env'
import { addFaves } from './redux/fave'
import styled from 'styled-components'
import Stars from 'react-native-stars';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Screen4 = ({ navigation, route}) => {

const dispatch = useDispatch();

const [search, setSearch] = useState("")
const [faves, setFaves] = useState([])
const [currentFaves, setCurrentFaves] = useState([])
const [ratAv, setRatAv] = useState(0)

  useEffect(() => {
    fetch(`${URL}/api/v1/favourites`)
    .then(res => res.json())
    .then(faveArray => {
      const faveAction = addFaves(faveArray)
      dispatch(faveAction)
      setFaves(faveArray)
    })
    .catch((error) => {
      console.error(error);
    })
  },[dispatch])

  const locations = useSelector(state => {
    return state.location.items
  })

  function handleNewSearch(search) {
    setSearch(search)
    setSearch(search)
}

const faveArrays = faves.map(fave => fave.locationId)

const newLocations = locations.filter(item => { return faveArrays.includes(item.id)})

const filteredlocations = newLocations.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
const sortedLocations = filteredlocations.sort((a, b) => a.name.localeCompare(b.name));

const eachLocation = sortedLocations.map(item => {

  const ratings = item.comments.map((comment => comment.rating))

  function getAvg(ratings) {
    const total = ratings.reduce((acc, c) => acc + c, 0);
    return total / ratings.length;
  }
  
  const average = getAvg(ratings);
  const ratAv = Math.round(average)

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

  const faveLocations = locations.filter(location => location.id === faves.map(fave => fave.locationId))

    return (
      <>
        <NavBar navigation={navigation}/>
        <Wrapper >
            <Form>
            <SearchBar
            placeholder="Search..." 
            value={search}
              onChangeText={handleNewSearch}
            />
        </Form>
            {eachLocation}
        </Wrapper>
        </>
      )
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

const Wrapper = styled.ScrollView`
flex: 1;
width: 100%;
height: 95%;
display: flex;
backgroundColor: 	#FFEFD5;  
`

const Title = styled.Text`
font-family: "PlayWithFire";
font-size: 35px;
color: black;
padding-top: 10px;
padding-bottom: 10px;
align-self: center;
`

const RestaurantTitle = styled.Text`
font-family: "PlayWithFire";
font-size: 24px;
color: orange;
padding-top: 10px;
padding-bottom: 10px;
align-self: center;
`

const RestaurantText = styled.Text`
font-size: 15px;
color: #777;
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
padding-bottom: 10px;
padding-left: 10px;
align-self: center;


    `

    const NoStars = styled.Text`
    font-size: 10px;    
    align-self: center;
    color: gray;

`
const styles = StyleSheet.create({
  title: {
    padding: 20,
    fontSize: 42,
  },
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
  }
});

export default Screen4
