import React, {useEffect, useState} from 'react';
import { StyleSheet, SafeAreaView, Linking, ScrollView, Button, Image, Text, View, Dimensions } from 'react-native';
import 'react-native-gesture-handler';
import CommentsContainer from './CommentsContainer'
import {useSelector, useDispatch} from 'react-redux'
import { addFaves, updateFaves, deleteFave } from './redux/fave'
import {URL} from '@env'

const FaveContainer = ({faves, location}) => {

    const [currentFave, setCurrentFave] = useState(false)
    const [favesLoaded, setFavesLoaded] = useState(false)
    const [allFaves, setAllFaves] = useState(faves)

    console.log(allFaves, "first faves")
    const dispatch = useDispatch()

    console.log(location, "location line 18")

    // const location = useSelector(state => {
    //     return state.currentLocation
    //   })

// const faves = useSelector(state => {
//             return state.faves
// })

useEffect(() => {
  fetch(`${URL}/api/v1/favourites`)
  .then(res => res.json())
  .then(faveArray => {
    const faveAction = addFaves(faveArray)
    dispatch(faveAction)
    setAllFaves(faveArray)
    setFavesLoaded(true)
    console.log(faveArray, "faves line 34")
  })
  .catch((error) => {
    console.error(error);
  })
},[dispatch])

console.log(allFaves, 'second faves')

// function thisFave() {
//     useEffect(() => {  
//         const thisFave = faves.filter(fave => fave.locationId === location.id)
//         console.log(thisFave, "thisFave")
//         if (thisFave) {
//         if (thisFave.length > 0) {
//             setCurrentFave(thisFave) }
//             else { setCurrentFave([]) }
//         }
//         }
//         , [])
//         console.log(currentFave, "currentFave")
//     }

const faveIdArrays = allFaves.map(fave => fave.locationId)

function isCurrentFave() {
  faveIdArrays.includes(location.id) ? setCurrentFave(true) : null
}

console.log(location.id, "location favecontainer") 
console.log(currentFave, 'currentfave')

function faveStar() {
    // thisFave()
    isCurrentFave()
    currentFave ? 
    <Button title="⭐" onPress={handleUnfave} />
    : <Button title="☆" onPress={handleFavePress} />
}

// }
//     else { 
//       return (
//         <Button title="☆" onPress={handleFavePress} />
//       )
//     }
//   }

function handleFavePress() {

    fetch(`${URL}/api/v1/favourites`,  {
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
  fetch(`${URL}/api/v1/favourites/${currentFave.id}`,  {
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
{favesLoaded ? 
faveStar()
: null }
</>


)
}

export default FaveContainer