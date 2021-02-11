import { useRoute } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import 'react-native-gesture-handler';
import Comment from './Comment'
import AddCommentForm from './AddCommentForm'

const CommentsContainer = ({ navigation, route }) => {

    return (
        <View>
            <Comment />
            <AddCommentForm />
        </View>
    )
}

export default CommentsContainer 