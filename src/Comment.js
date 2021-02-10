import { useRoute } from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Button, TouchableOpacity, Text, View, Dimensions, Callout, TouchableHighlight } from 'react-native';
import 'react-native-gesture-handler';
import {useSelector} from 'react-redux'
import { useDispatch } from 'react-redux'
import {addComments} from './redux/comments'

const Comment = () => {

    const dispatch = useDispatch()
  const [currentComment, setCurrentComment] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/api/v1/comments")
    .then(res => res.json())
    .then(commentsArray => {
      // const mappedLocation = locationArray.map((location) => {
      //   return {
      //     ...location, 
      //   }
      // })
      const action = addComments(commentsArray)
      dispatch(action)
    })
    // the dispatch won't effect the useeffect but will stop console warning
  },[dispatch])

    const comments = useSelector(state => {
        return state.comments
    })

    // const commentsArray = Object.values( comments );

    // console.log(commentsArray)
    const location = useSelector(state => {
        return state.currentLocation
      })

      function handleLikePress(id, likes) {
        const newLikes = parseInt(likes + 1)
        fetch(`http://localhost:3000/api/v1/comments/${id}`,  {
          method: 'PATCH',
          headers: {
              Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              likes: newLikes
          })
      })
      .then((response) => response.json())
      .then(newComment => 
          // const action2 = updateComments(newComment)
          // dispatch(action2)
          console.log(newComment, "57 new like")
      )
      .catch((error) => {
        console.error(error);
      });
      }
      const currentComments = comments.comments.filter(comment => comment.locationId === location.id)

    //   console.log(currentComments)

      const eachComment = currentComments.map((comment, index) => {
              return (
                <View key={comment.id}> 
                  <Text>{index +1}. {comment.content} {'\n'}{'\n'} says {comment.userId}{'\n'} </Text>
                  <Button onPress={() => handleLikePress(comment.id, comment.likes)} title="Add Like" id={comment.id}/>
                  <Text>Likes: {comment.likes}</Text>
                </View>
              )
          }
    )
    // console.log(eachComment)
      
    //   location.comments.map((comment, index) => {
    //       return (
    //       <Text key={comment.index}>{index +1}. {comment.content} {'\n'}{'\n'} says {comment.userId}{'\n'} </Text>
    //       )
    //   })

    return (
        <View>
        {eachComment}
        </View>
    )
}

export default Comment