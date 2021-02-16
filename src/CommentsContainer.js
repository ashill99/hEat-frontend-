import React, {useEffect, useState} from 'react';
import { View, ScrollView } from 'react-native';
import 'react-native-gesture-handler';
import Comment from './Comment'
import AddCommentForm from './AddCommentForm'
import { addComments } from "./redux/comments";
import {useDispatch} from 'react-redux'
import {URL} from '@env'
import styled from 'styled-components'


const CommentsContainer = ({ navigation, route, location }) => {

    const [isLoaded, setIsLoaded] = useState(false) 

    const dispatch = useDispatch()

    useEffect(() => {
      fetch(`${URL}/api/v1/comments`)
      .then(res => res.json())
      .then(commentsArray => {
        const action = addComments(commentsArray)
        dispatch(action)
        setIsLoaded(true)
      })
      .catch((error) => {
        console.error(error);
      })
    },[dispatch])

    return (

          <Wrapper>
              {isLoaded ? 
              <>
                  <Comment location={location}/>
                  <AddCommentForm location={location}/>
              </>
              : null }
            </Wrapper>
    )
}

export default CommentsContainer 


const Wrapper = styled.View`
`