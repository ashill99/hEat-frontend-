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
  const [likesNum, setLikesNum] = useState(0)

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

    function updateCommentLikes(newComment) {

    }

    // const commentsArray = Object.values( comments );

    // console.log(commentsArray)
    const location = useSelector(state => {
        return state.currentLocation
      })

          // const action2 = updateComments(newComment)
          // dispatch(action2)

      function handleLikePress(id, likes) {
          const newLikes = {
            likes: parseInt(likes + 1)
          }
          setLikesNum(newLikes)
          fetch(`http://localhost:3000/api/v1/comments/${id}`, {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(newLikes),
        })
        updateLikesNum(newLikes)
        // setLikesNum(newLikes)
        // .then(response => response.json())
        // .then(data => {console.log('success:', data)})
        // .catch((error) => {
        //   console.error('Error:', error);
        // });
      }

      function updateLikesNum(newLikes) {
        setLikesNum(newLikes)
      }

      const currentComments = comments.comments.filter(comment => comment.locationId === location.id)

      const eachComment = currentComments.map((comment, index) => {
              return (
                <View key={comment.id}> 
               {/* {setLikesNum(comment.likes)} */}
                <Text>{comment.content} {'\n'}{'\n'} </Text>
                  {/* <Text>{index +1}. {comment.content} {'\n'}{'\n'} says {comment.userId}{'\n'} </Text> */}
                  <Button onPress={() => handleLikePress(comment.id, comment.likes)} title={`Likes: ${comment.likes}`} id={comment.id}/>
                  {/* <Text>Likes: {comment.likes}</Text> */}
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