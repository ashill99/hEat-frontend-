import { useRoute } from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Button, SearchBar, Text, View, Dimensions, Callout, TouchableOpacity, TouchableHighlight, TextInput, Keyboard } from 'react-native';
import 'react-native-gesture-handler';
import {useSelector} from 'react-redux'
import { NavigationContainer } from '@react-navigation/native';
import { updateComments } from './redux/comments'
import { useDispatch } from 'react-redux'
import { Switch } from 'react-native-switch';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { updateRestBar } from './redux/restBar'
import { updateRestType } from './redux/restType'
import {updateSearch} from './redux/search'


const FilterContainer = () => {

    const dispatch = useDispatch()

    const restOrBar = useSelector(state => {
        return state.restBar.restBar
      })

      const search = useSelector(state => {
        return state.search.search
      })

      const restType = useSelector(state => {
          return state.restType.restType
      })

      console.log(restOrBar, "line 31")
      console.log(restType, "line 32")
      
      const searchAction = dispatch(updateSearch(search))

    return (
        <>
        <TextInput
        placeholder="Search..."
        onChangeText={(e) => {dispatch(updateSearch(e.target.value))}}
        value={search}
      />
        <View style={styles.container}>
        {/* <View> */}
    <DropDownPicker
        items={[
            {label: 'All', value: 'All', icon: () => <Icon name="whatshot" size={18} color="#900" />,},
            {label: 'Bar', value: 'Bar', icon: () => <Icon name="nightlife" size={18} color="#900" />},
            {label: 'Restaurant', value: 'Restaurant', icon: () => <Icon name="fastfood" size={18} color="#900" />},
        ]}
        defaultValue="All"
        containerStyle={{height: 40}}
        style={{backgroundColor: '#fafafa'}}
        itemStyle={{
            justifyContent: 'flex-start'
        }}
        labelStyle={{
    fontSize: 16,
    textAlign: 'left',
    color: '#000'
}}
containerStyle={{width: 100, height: 30}}

        dropDownStyle={{backgroundColor: '#fafafa'}}
        onChangeItem={item => dispatch(updateRestBar(item.value))}
    />
    <DropDownPicker
        items={[
            {label: 'All', value: 'All', icon: () => <Icon name="whatshot" size={18} color="#900" />,},
            {label: 'Pizza', value: 'Pizza', icon: () => <Icon name="nightlife" size={18} color="#900" />},
            {label: 'Chinese', value: 'Chinese', icon: () => <Icon name="fastfood" size={18} color="#900" />},
            {label: 'Italian', value: 'Italian', icon: () => <Icon name="fastfood" size={18} color="#900" />},
            {label: 'Burgers', value: 'Burgers', icon: () => <Icon name="fastfood" size={18} color="#900" />},

        ]}
        defaultValue="All"
        containerStyle={{height: 40}}
        style={{backgroundColor: '#fafafa'}}
        itemStyle={{
            justifyContent: 'flex-start'
        }}
        labelStyle={{
            fontSize: 16,
            textAlign: 'left',
            color: '#000'
        }}
        containerStyle={{width: 100, height: 30}}
        dropDownStyle={{backgroundColor: '#fafafa'}}
        onChangeItem={item => dispatch(updateRestType(item.value))}
    />

      {/* <Switch
        backgroundActive={'green'}
        backgroundInactive={'blue'}
        circleActiveColor={'#30a566'}
        circleInActiveColor={'blue'}
        onValueChange={toggleSwitch}
        value={isEnabled}
        activeText={'Restaurant'}
        inActiveText={'Bar'}
      /> */}

        </View>
        </>
    )
}

export default FilterContainer 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
        backgroundColor: '#F5FCFF',
        flexDirection: "row",
        alignSelf: "flex-start",

        
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
})