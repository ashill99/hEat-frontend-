import React, {useEffect} from 'react';
import 'react-native-gesture-handler';
 import {useDispatch} from 'react-redux'
 import { addComments } from "./redux/comments";
 import {URL} from '@env'

  const CommentLoad = () => {

    const dispatch = useDispatch()

    useEffect(() => {
      fetch(`${URL}/api/v1/comments`)
      .then(res => res.json())
      .then(commentsArray => {
        const action = addComments(commentsArray)
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
  
  export default CommentLoad