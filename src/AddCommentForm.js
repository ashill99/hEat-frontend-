import { useRoute } from '@react-navigation/native';
import React, {useState} from 'react';
import { StyleSheet, Button, Text, View, TouchableOpacity, TextInput, Keyboard } from 'react-native';
import 'react-native-gesture-handler';
import { updateComments } from './redux/comments'
import { useDispatch } from 'react-redux'
import {URL} from '@env'

const AddCommentForm = ({location}) => {
  
    const dispatch = useDispatch()

    const [text, setText] = useState('')

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
            likes: 0
        })
    })
    .then((response) => response.json())
    .then(newComment => {
        const action2 = updateComments(newComment)
        dispatch(action2)
        setText("")
    })
    .catch((error) => {
      console.error(error);
    });

    }

    return (
        <View>
          <TextInput
            style={styles.textInput}
            placeholder="Your Comment"
            onBlur={Keyboard.dismiss}
            value={text}
            onChangeText={setText}
          />
          <TouchableOpacity
            style={styles.saveButton}
            onPress={handleSubmitClick}
          >
            <Text style={styles.saveButtonText}>Post Comment</Text>
          </TouchableOpacity>
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
      }
})