import React, {useEffect} from 'react';
import 'react-native-gesture-handler';
 import {useDispatch} from 'react-redux'
 import { addItems } from "./redux/location";

  const LocationLoad = () => {

    const dispatch = useDispatch()

    useEffect(() => {
      fetch("http://localhost:3000/api/v1/locations")
      .then(res => res.json())
      .then(locationArray => {
        const action = addItems(locationArray)
        dispatch(action)
      })
      .catch((error) => {
        console.error(error);
      })
    },[dispatch])

    return(
        <>
        </>
      )
  }
  
  export default LocationLoad