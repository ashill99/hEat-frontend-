import React, {useEffect, useState} from 'react';
import { View } from 'react-native';
import 'react-native-gesture-handler';
import Comment from './Comment'
import AddCommentForm from './AddCommentForm'
import { addComments } from "./redux/comments";
import {useDispatch} from 'react-redux'


const CommentsContainer = ({ navigation, route }) => {

    const [isLoaded, setIsLoaded] = useState(false) 

    const dispatch = useDispatch()

    useEffect(() => {
      fetch("http://c7d8b7116cd6.ngrok.io/api/v1/comments")
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
        <View>
            {isLoaded ? 
            <>
                <Comment />
                <AddCommentForm />
            </>
            : null }
        </View>
    )
}

export default CommentsContainer 