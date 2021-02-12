import React, {useEffect, useState} from 'react';
import { StyleSheet, SafeAreaView, Linking, ScrollView, Button, Image, Text, View, Dimensions } from 'react-native';
import 'react-native-gesture-handler';
import CommentsContainer from './CommentsContainer'
import {useSelector, useDispatch} from 'react-redux'
import { addFaves, updateFaves, deleteFave } from './redux/fave'

const FaveContainer = ({faves}) => {

    const [currentFave, setCurrentFave] = useState(faves)

    console.log(faves, "first faves")
    const dispatch = useDispatch()

    const location = useSelector(state => {
        return state.currentLocation
      })

// const faves = useSelector(state => {
//             return state.faves
// })

function thisFave() {
    useEffect(() => {  
        const thisFave = faves.filter(fave => fave.locationId === location.id)
        console.log(thisFave, "thisFave")
        if (thisFave.length > 0) {
            setCurrentFave(thisFave) }
            else { setCurrentFave([]) }
        }
        , [])
        console.log(currentFave, "currentFave")
    }

console.log(location.id, "location favecontainer") 

function faveStar() {
    thisFave()
    if (currentFave.length > 0) {
  if (currentFave[0].locationId === location.id) {
    return (
    <Button title="⭐" onPress={handleUnfave} />
    )
  }
}
    else { 
      return (
        <Button title="☆" onPress={handleFavePress} />
      )
    }
  }

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
})
.catch((error) => {
console.error(error);
});
}

return (
<>
{faveStar()}
</>


)
}

export default FaveContainer