import { getPathFromState } from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import { StyleSheet, FlatList, Linking, ScrollView, Button, Image, TouchableOpacity, Text, View, Dimensions, Callout, TouchableHighlight } from 'react-native';
import 'react-native-gesture-handler';
import CommentsContainer from './CommentsContainer'
import {useSelector, useDispatch} from 'react-redux'
import { addFaves, updateFaves, deleteFave } from './redux/fave'

  const Screen3 = ({ navigation, route}) => {

    const [currentFave, setCurrentFave] = useState([])
    const [faves, setFaves] = useState([])

    const dispatch = useDispatch()
    
    const location = useSelector(state => {
      return state.currentLocation
    })

   useEffect(() => {
        fetch("http://localhost:3000/api/v1/favourites")
        .then(res => res.json())
        .then(setFaves)
    },[])

    // console.log(faveArray, "otherfave")

    // const faves = useSelector(state => {
    //   return state.fave.items
    // })

    // console.log(location.id, "line 21")

    useEffect(() => {
      const thisFave = faves.filter(fave => 
      fave.locationId === location.id )
      thisFave ? setCurrentFave(thisFave) : setCurrentFave([])
    },
    [setCurrentFave]
    )

      // console.log(fave.id, "current fave in ternary") : setCurrentFave([]) 
    
    // currentFave ? setFaved(true) : null 

    // console.log(faves, "all faves")
    // console.log(currentFave, "currentFave")
    
    // console.log(faves, "line 23")

    function handleFavePress() {

        fetch("http://localhost:3000/api/v1/favourites",  {
        method: 'POST',
        headers: {
            Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user_id: 1, 
            location_id: location.id,
        })
    })
    .then((response) => response.json())
    .then(newFave => {
        const action2 = updateFaves(newFave)
        dispatch(action2)
        setCurrentFave(newFave)
          })
    .catch((error) => {
      console.error(error);
    });
    }

    function handleUnfave() {
      // console.log(currentFave[0].id, "line 67")
      fetch(`http://localhost:3000/api/v1/favourites/${currentFave.id}`,  {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json' // Indicates the content 
       },
      })
  .then((response) => response.json())
  .then((newFave) => {
    // console.log('removed')
    setCurrentFave([])
    setFaves(faves.filter(fave => fave.id !== newFave.id))
    // const action3 = deleteFace(newFave)
    // dispatch(action3)  
    forceUpdate()
  })
  .catch((error) => {
    console.error(error);
  });
  }

  const faveStar = currentFave.locationId === location.id ? <Button title="⭐" onPress={handleUnfave} /> : <Button title="☆" onPress={handleFavePress} />


    return (
      <ScrollView>
    <View>
      <Text style={styles.title}>{location.name}       </Text>
      {faveStar}
      <Text>{location.restOrBar}</Text>
      {location.restType.length > 0 ? 
        <Text>{location.restType}</Text> : null}
      <Text>{location.address}</Text>
      <Text>{location.hours}</Text>
      {/* <Text>{location.rating}</Text>
      <Text>{location.name}</Text> */}
      <Image source={{uri: location.imgUrl}} style={{width: "100%", height: "45%"}}/>
      <Text style={{color: 'blue'}}
      onPress={() => Linking.openURL(location.website)}>
  Website</Text>      
<Text style={{color: 'blue'}}
      onPress={() => Linking.openURL(location.menu)}>
  Menu{'\n'}</Text> 

  {/* <Button
            style={styles.button}
            title="Faveourites"
            onPress={() => {
              navigation.push('Screen4')
            }}
          /> */}

          <CommentsContainer />
    </View>
    </ScrollView>
    )
    }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    screen: {
      marginTop: 40,
      alignItems: 'center',
    },
    title: {
      padding: 20,
      fontSize: 42,
    },
    stretch: {
      width: 50,
      height: 200,
      resizeMode: 'stretch',
    },
    map: {
      width: Dimensions.get('window').width,
      height: 550,
      // Dimensions.get('window').height,
    },
    marker: {
      backgroundColor: "#fff",
      padding: 5, 
      borderRadius: 5
    },
    text: {
      color: "#000000"
    }
  });

  export default Screen3