import React, {useEffect, useState} from 'react';
import { StyleSheet, SafeAreaView, Linking, ScrollView, Button, Image, Text, View, Dimensions } from 'react-native';
import 'react-native-gesture-handler';
import CommentsContainer from './CommentsContainer'
import {useSelector, useDispatch} from 'react-redux'
import { addFaves, updateFaves, deleteFave } from './redux/fave'
import {URL} from '@env'

const FaveContainer = ({location}) => {

    const [currentFave, setCurrentFave] = useState(false)
    const [favesLoaded, setFavesLoaded] = useState(false)
    const [allFaves, setAllFaves] = useState([])

    console.log(allFaves, "first faves")

    // const dispatch = useDispatch()

    console.log(location, "location line 18")

useEffect(() => {
  fetch(`${URL}/api/v1/favourites`)
  .then(res => res.json())
  .then(faveArray => {
    const faveAction = addFaves(faveArray)
    // dispatch(faveAction)
    setAllFaves(faveArray)
    setFavesLoaded(true)
    console.log(faveArray, "faves line 34")
      const thisFave = faveArray.filter(fave => fave.locationId === location.id)
      console.log(thisFave, "thisFave")
      if (thisFave.length > 0) {
          setCurrentFave(true) }

  })
  .catch((error) => {
    console.error(error);
  })
},[])



console.log(allFaves, 'second faves')

// function thisFave() {
//         const thisFave = allFaves.filter(fave => fave.locationId === location.id)
//         // console.log(thisFave, "thisFave")
//         if (thisFave.length > 0) {return}
//             // setCurrentFave(true)
//         console.log(currentFave, "currentFave")
//     }

function isCurrentFave() {
  
  const faveIdArrays = allFaves.map(fave => fave.locationId)
  const aFave = faveIdArrays.map(id => id === location.id)
  if (aFave.length > 0 ) {
    // setCurrentFave(true)
  }
  // { setCurrentFave(true) }
}

console.log(location.id, "location favecontainer") 
console.log(currentFave, 'currentfave')

function faveStar() {
    // thisFave()
    // isCurrentFave()
    return (
    currentFave ? 
    <>
      <Button title="⭐" onPress={handleUnfave} />
    </>
    : 
    <>
      <Button title="☆" onPress={handleFavePress} />
    </>
    )
}

function handleFavePress() {

    fetch(`${URL}/api/v1/favourites`,  {
    method: 'POST',
    headers: {
        Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        user_id: 1, 
        location_id: location.id
    })
})
.then((response) => response.json())
.then(newFave => {
    // const action2 = updateFaves(newFave)
    // dispatch(action2)
    setCurrentFave(true)
    setAllFaves([...allFaves, newFave])
      })
.catch((error) => {
  console.error(error);
});
}

function handleUnfave() {
  // console.log(currentFave[0].id, "line 67")
  fetch(`${URL}/api/v1/favourites/${currentFave.id}`,  {
  method: 'DELETE',
  headers: {
    'Content-type': 'application/json' // Indicates the content 
   },
  })
.then((response) => response.json())
.then((newFave) => {
// console.log('removed')
setCurrentFave(false)
setAllFaves(allFaves.filter(fave => fave.id !== newFave.id))
// const action3 = deleteFace(newFave)
// dispatch(action3)  
})
.catch((error) => {
console.error(error);
});
}

return (
  <>
    {favesLoaded ? 
      faveStar()
    : null }
  </>


)
}

export default FaveContainer