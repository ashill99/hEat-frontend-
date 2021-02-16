import React, { useEffect, useState } from 'react';
import { StyleSheet, SafeAreaView, Linking, ScrollView, Button, Image, Text, View, Dimensions } from 'react-native';
import 'react-native-gesture-handler';
import CommentsContainer from './CommentsContainer'
import {useSelector, useDispatch} from 'react-redux'
import FaveContainer from './FaveContainer'
import { addFaves, updateFaves, deleteFave } from './redux/fave'
import NavBar from './NavBar'
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import styled from 'styled-components'
import Stars from 'react-native-stars';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


  const Screen3 = ({ navigation, route}) => {
    
    const [faves, setFaves] = useState([])
    const [ratAv, setRatAv] = useState(0)
    // const [average, setAverage] = useState(0)

    const { location } = route.params;

    console.log(location.comments)

    useEffect(() => {

    if (location.comments) { 
    const ratings = location.comments.map((comment => comment.rating))

    function getAvg(ratings) {
      const total = ratings.reduce((acc, c) => acc + c, 0);
      return total / ratings.length;

    }
    
    const average = getAvg(ratings);
    setRatAv(average)
  }

    },[])


    // const avRating = (avCommentRating.sum / avCommentRating.length)

  const dispatch = useDispatch()

  let [fontsLoaded] = useFonts({
    'PlayWithFire': require('../assets/fonts/PlayWithFire.ttf'),
  });

function restTypeDisplay() {
  if (location.restType.length > 0) {
    return ( 
    <Info>
      {location.restType}
    </Info>)} 
    else { return null }
  }

    return (
      <Wrapper>
      <ScrollView contentContainerStyle={{paddingBottom: 300}} >
                <NavBar navigation={navigation}/>

        <View style={{height: "60%"}}> 

          <RestaurantTitle>
            {location.name}
          </RestaurantTitle>
          <Info>
            {location.restOrBar}
          </Info>
          {restTypeDisplay()}
          <Info>
            {location.address}
          </Info>
          <Info>
            {location.hours}
          </Info>

          <Links 
            style={{color: 'blue'}}
            onPress={() => Linking.openURL(location.website)}>
            Website
          </Links>      
          <Links 
            style={{color: 'blue'}}
            onPress={() => Linking.openURL(location.menu)}>
            Menu{'\n'}
          </Links> 
          <Info>Average User Rating:{'\n'} {'\n'}  
          <Stars
            default={Math.round(ratAv)}
            count={5}
            fullStar={<Icon name={'fire'} style={[styles.myStarStyle]}/>}
            emptyStar={<Icon name={'bandcamp'} style={[styles.myStarStyle, styles.myEmptyStarStyle]}/>}
          />
                </Info>
                    <Image 
            source={{uri: location.imgUrl}} 
            style={{width: "100%", height: "45%"}}
          />
          {/* <FaveContainer faves={faves} location={location}/> */}

          <CommentsContainer location={location}/>

        </View>
        </ScrollView>
    </Wrapper>
    )
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      height: '100%'
      // marginTop: Constants.statusBarHeight,
    },
    scrollView: {
      backgroundColor: 'white',
      marginHorizontal: 20,
    },
    title: {
      padding: 20,
      fontSize: 42,
    },
    text: {
      color: "#000000"
    },
    myStarStyle: {
      color: 'yellow',
      backgroundColor: 'transparent',
      textShadowColor: 'black',
      textShadowOffset: {width: 1, height: 1},
      textShadowRadius: 2,
      fontSize: 30,
    },
    myEmptyStarStyle: {
      color: 'white',
    }
  });

  export default Screen3

  const Wrapper = styled.View`
flex: 1;
width: 100%;
height: 100%;
display: flex;
backgroundColor: 	#FFEFD5;  
`

  const RestaurantTitle = styled.Text`
  font-family: "PlayWithFire";
    font-size: 50px;
    color: orange;
    padding-top: 10px;
    padding-bottom: 10px;
    align-self: center;
  `

  const Info = styled.Text`
  font-size: 18px;
    color: blue;
    padding-top: 5px;
    padding-bottom: 5px;
    align-self: center;
  `

  const Links = styled.Text`
    font-size: 20px;
    color: #4169e1;
    padding-top: 10px;
    padding-bottom: 5px;
    align-self: center;
    text-decoration: underline;

`

