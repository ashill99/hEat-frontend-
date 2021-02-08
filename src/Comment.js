import { useRoute } from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Button, Text, View, Dimensions, Callout, TouchableHighlight } from 'react-native';
import 'react-native-gesture-handler';
import {useSelector} from 'react-redux'
import { useDispatch } from 'react-redux'
import {addComments} from './redux/comments'

const Comment = () => {

    const dispatch = useDispatch()

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

    console.log(comments)

    // const commentsArray = Object.values( comments );

    // console.log(commentsArray)
    const location = useSelector(state => {
        return state.currentLocation
      })

      const currentComments = comments.comments.filter(comment => comment.locationId === location.id)

    //   console.log(currentComments)
    console.log(typeof(comments))
    console.log(comments.comments)


      const eachComment = currentComments.map((comment, index) => {
          console.log(comment)
              return (
                <Text key={comment.id}>{index +1}. {comment.content} {'\n'}{'\n'} says {comment.userId}{'\n'} </Text>
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