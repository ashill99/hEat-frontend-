import { useRoute } from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Button, Text, View, Dimensions, Callout, TouchableHighlight } from 'react-native';
import 'react-native-gesture-handler';
import {useSelector} from 'react-redux'
import Comment from './Comment'
import { NavigationContainer } from '@react-navigation/native';
import AddCommentForm from './AddCommentForm'




const CommentsContainer = ({ navigation, route }) => {

    const location = useSelector(state => {
        return state.currentLocation
      })

    return (
        <View>
        {/* <Text>Hello from the CommentsContainer</Text> */}
        <Comment />
        <AddCommentForm />
</View>
    )
}

export default CommentsContainer 