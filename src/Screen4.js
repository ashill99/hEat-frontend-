import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { StyleSheet, Linking, Text, View} from 'react-native';
import 'react-native-gesture-handler';
import NavBar from './NavBar'
import {URL} from '@env'
import { addFaves } from './redux/fave'
import styled from 'styled-components'

const Screen4 = ({ navigation, route}) => {

const dispatch = useDispatch();

const [faves, setFaves] = useState([])
const [currentFaves, setCurrentFaves] = useState([])

  useEffect(() => {
    fetch(`${URL}/api/v1/favourites`)
    .then(res => res.json())
    .then(faveArray => {
      const faveAction = addFaves(faveArray)
      dispatch(faveAction)
      setFaves(faveArray)
      // setFavesLoaded(true)
    })
    .catch((error) => {
      console.error(error);
    })
  },[dispatch])

  const locations = useSelector(state => {
    return state.location.items
  })

const faveArrays = faves.map(fave => fave.locationId)

const newLocations = locations.filter(item => { return faveArrays.includes(item.id)})

const eachLocation = newLocations.map(item => {

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

console.log(eachLocation)
  const faveLocations = locations.filter(location => location.id === faves.map(fave => fave.locationId))

  // console.log(faves.map(fave => fave.locationId))
  // console.log(faveLocations, "eachLocation")

    return (
      <>
        <NavBar navigation={navigation}/>
        <View style={styles.title}>
            <Text>
              ⭐Favourites⭐
            </Text>
            {eachLocation}
        </View>
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


const styles = StyleSheet.create({
  title: {
    padding: 20,
    fontSize: 42,
  },
});

export default Screen4