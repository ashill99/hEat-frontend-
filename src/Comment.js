import React, {useEffect, useState} from 'react';
import { Button, Text, View } from 'react-native';
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
      const action = addComments(commentsArray)
      dispatch(action)
    })
  },[dispatch])

    const comments = useSelector(state => {
        return state.comments
    })

    function updateCommentLikes(newComment) {
    }

    const location = useSelector(state => {
        return state.currentLocation
      })

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
            <Text>{comment.content} {'\n'}{'\n'} </Text>
            <Button onPress={() => handleLikePress(comment.id, comment.likes)} title={`👍 ${comment.likes}`} id={comment.id}/>
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