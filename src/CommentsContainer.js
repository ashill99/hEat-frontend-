import { useRoute } from '@react-navigation/native';
import React from 'react';
import { View, ScrollView } from 'react-native';
import 'react-native-gesture-handler';
import Comment from './Comment'
import AddCommentForm from './AddCommentForm'
import CommentLoad from './CommentsLoad'

const CommentsContainer = ({ navigation, route }) => {

    return (
        <View>
            <Comment />
            <AddCommentForm />
            <CommentLoad />
        </View>
    )
}

export default CommentsContainer 