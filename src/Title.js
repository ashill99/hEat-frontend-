import React from 'react';
import { View } from 'react-native';
import 'react-native-gesture-handler';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import styled from 'styled-components'


const Title = () => {

    let [fontsLoaded] = useFonts({
        'PlayWithFire': require('../assets/fonts/PlayWithFire.ttf'),
      });

    return (
        <View>
            <HeatTitle>hEat</HeatTitle>
            <HeatSubTitle>New York City</HeatSubTitle>
            <HeatBio>Only New York's Hottest Bars and Restaurants.</HeatBio>
            <HeatBio>Literally.</HeatBio>

        </View>
    )
}

export default Title 

const HeatTitle = styled.Text`
padding-top: 40px;
padding-right: 35px;
font-family: "PlayWithFire";
font-size: 115px;
color: orange;
text-align: center;
`

const HeatSubTitle = styled.Text`
font-family: "PlayWithFire";
font-size: 24px;
color: orange;
text-align: center;
`
const HeatBio = styled.Text`
font-size: 20px;
color: blue;
text-align: center;
padding-top: 10px;
`
