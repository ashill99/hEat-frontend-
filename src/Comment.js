import React, {useEffect, useState} from 'react';
import { Button, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import {useSelector} from 'react-redux'
import { useDispatch } from 'react-redux'
import { updateCommentLikes } from './redux/comments'
import {URL} from '@env'


const Comment = ({location}) => {

  const dispatch = useDispatch()

  const [currentComment, setCurrentComment] = useState([])

    const comments = useSelector(state => {
        return state.comments
    })

      function handleLikePress(comment) {
          const newLikes = {
            likes: parseInt(comment.likes + 1),
          }
          fetch(`${URL}/api/v1/comments/${comment.id}`, {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(newLikes)
        })

        .then(response => response.json())
        .then(newComment => {
          const action2 = updateCommentLikes(newComment)
          dispatch(action2)
      })
      }

      // function updateLikesNum(newLikes) {
      //   setLikesNum(newLikes)
      // }

      const currentComments = comments.comments.filter(comment => comment.locationId === location.id)

      const eachComment = currentComments.map((comment, index) => {
        return (
          <View key={comment.id}> 
            <Text>{comment.content} {'\n'}{'\n'} </Text>
            <Button onPress={() => handleLikePress(comment)} title={`👍 ${comment.likes}`} id={comment.id}/>
          </View>
        )
      }
    )

    return (
        <View>
        {eachComment}
        </View>
    )
}

export default Comment