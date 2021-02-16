import { useRoute } from '@react-navigation/native';
import React, {useState} from 'react';
import { StyleSheet, ScrollView, Button, Text, View, TouchableOpacity, TextInput, Keyboard } from 'react-native';
import 'react-native-gesture-handler';
import { updateComments } from './redux/comments'
import { useDispatch } from 'react-redux'
import {URL} from '@env'
import Stars from 'react-native-stars';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styled from 'styled-components'

const AddCommentForm = ({location}) => {
  
    const dispatch = useDispatch()

    const [text, setText] = useState('')
    const [rating, setRating] = useState(0)

    function handleSubmitClick(e) {
        const newUserId = 1

        fetch(`${URL}/api/v1/comments`,  {
        method: 'POST',
        headers: {
            Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            content: text, 
            user_id: 1, 
            location_id: location.id,
            likes: 0,
            rating: rating
        })
    })
    .then((response) => response.json())
    .then(newComment => {
        const action2 = updateComments(newComment)
        dispatch(action2)
        setText("")
        setRating(0)
    })
    .catch((error) => {
      console.error(error);
    });

    }

    return (
        <View style={{paddingTop: 50}}>
          <Stars
            default={rating}
            count={5}
            update={(val)=>{setRating(val)}}
            fullStar={<Icon name={'fire'} style={[styles.myStarStyle]}/>}
            emptyStar={<Icon name={'bandcamp'} style={[styles.myStarStyle, styles.myEmptyStarStyle]}/>}
          />
<TextInput
            style={styles.textInput}
            placeholder="What's good here?"
            onBlur={Keyboard.dismiss}
            value={text}
            onChangeText={setText}
          />
          <AddComment
            onPress={handleSubmitClick}
          >
            <Text style={styles.saveButtonText}>Post Comment</Text>
          </AddComment>
      </View>
    )
}

export default AddCommentForm 

const styles = StyleSheet.create({
    inputContainer: {
        paddingTop: 15
      },
      textInput: {
        borderColor: '#CCCCCC',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        height: 40,
        fontSize: 18,
        paddingLeft: 10,
        paddingRight: 10
      },
      saveButton: {
        borderWidth: 1,
        borderColor: '#007BFF',
        backgroundColor: '#007BFF',
        padding: 15,
        margin: 5
      },
      saveButtonText: {
        color: '#FFFFFF',
        fontSize: 20,
        textAlign: 'center'
      },
      myStarStyle: {
        color: 'yellow',
        backgroundColor: 'transparent',
        textShadowColor: 'black',
        textShadowOffset: {width: 1, height: 1},
        textShadowRadius: 2,
        fontSize: 30,
      },
      myEmptyStarStyle: {
        color: 'white',
      }
})

const AddComment = styled.TouchableOpacity`
background: orange;
width: 420px;
border-radius:20px;
align-self: center;
margin-top:10px;
margin-bottom:10px;
padding: 15px;

`