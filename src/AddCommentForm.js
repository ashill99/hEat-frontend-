import { useRoute } from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Button, Text, View, Dimensions, Callout, TouchableOpacity, TouchableHighlight, TextInput, Keyboard } from 'react-native';
import 'react-native-gesture-handler';
import {useSelector} from 'react-redux'
import { NavigationContainer } from '@react-navigation/native';



const AddCommentForm = () => {

    const [text, setText] = useState('')

    const location = useSelector(state => {
        return state.currentLocation
      })

    function handleSubmitClick(e) {

        // e.preventDefault()
        const newUserId = 1

        // const commentObj = {
        //     content: text, 
        //     userId: 1, 
        //     locationId: location.id 
        // }
        // console.log(commentObj)
        fetch("http://localhost:3000/api/v1/comments",  {
        method: 'POST',
        headers: {
            Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            content: text, 
            user_id: 1, 
            location_id: location.id
        })
    })
    .then((response) => response.json())
    .then(console.log)
    .catch((error) => {
      console.error(error);
    });

    }

    return (
        <View>
            <Text>Post Comment</Text>
            <TextInput
      style={styles.textInput}
      placeholder="Your Comment"
      maxLength={20}
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
            {/* <Button 
        title="Add a Comment"   
        onPress={() => {navigation.push('AddCommentForm')}}
/> */}
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