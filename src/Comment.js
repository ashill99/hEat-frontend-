import React, {useEffect, useState} from 'react';
import { Button, ScrollView, Text, View, StyleSheet } from 'react-native';
import 'react-native-gesture-handler';
import {useSelector} from 'react-redux'
import { useDispatch } from 'react-redux'
import { updateCommentLikes } from './redux/comments'
import {URL} from '@env'
import Stars from 'react-native-stars';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


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
              <View style={{alignItems:'center', marginTop: 10, marginBottom: 20}}>
              <Text>{comment.content} {'\n'} </Text>
                <Stars
                  default={comment.rating}
                  count={5}
                  fullStar={<Icon name={'fire'} style={[styles.myStarStyle]}/>}
                  emptyStar={<Icon name={'bandcamp'} style={[styles.myStarStyle, styles.myEmptyStarStyle]}/>}
                />
            </View> 
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


const styles = StyleSheet.create({
  myStarStyle: {
    color: 'orange',
    backgroundColor: 'transparent',
    textShadowColor: 'black',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 2,
    fontSize: 30,
    fontFamily: 'San Francisco'
  },
  myEmptyStarStyle: {
    color: 'lightgray',
  }
});