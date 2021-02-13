import React, { useEffect } from 'react';
import { StyleSheet, Button, Image, View, ImageBackground } from 'react-native';
import 'react-native-gesture-handler';
import { Text } from "react-native-svg";
import Title from './Title'
import NavBar from './NavBar'
import styled from 'styled-components'



const Screen1 = ({ navigation, route }) => {


    return( 
      <>
      <NavBar navigation={navigation}/>
        <Container>
          {/* <ImageBackground source={{uri: "https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/rm21-marble-sasi-117.jpg?w=1200&h=1200&dpr=1&fit=clip&crop=default&fm=jpg&q=75&vib=3&con=3&usm=15&cs=srgb&bg=F4F4F3&ixlib=js-2.2.1&s=571bf921d1424d22a2004bcce5f94bc1"}} style={{width: '100%', height: '100%'}}> */}
          <Title />
          <Button
            style={styles.button}
            title="Warm Up"
            onPress={() => {
              navigation.navigate('Screen2')
            }}
          />
          <Image source={{uri: "https://media.timeout.com/images/105711851/1372/772/image.jpg"}} style={{width: '100%', height: '50%'}} />
          <Text style={styles.bigblue}>2021</Text>
          {/* </ImageBackground> */}
          {/* <LocationLoad/> */}
        </Container>
        </>
  )
}

const Container = styled.View`
flex: 1;
width: 100%;
height: 95%;
display: flex;
backgroundColor: #F4C430;
`

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4C430',
    alignItems: 'center',
    justifyContent: 'center',
  },
  screen: {
    flex: 1,
    marginTop: 40,
    alignItems: 'center',
    backgroundColor: '#6ED4C8'
  },
  title: {
    padding: 20,
    fontSize: 42,
    color: '#d6ffff'
  },
  text: {
    color: "#d6ffff",
    fontWeight: 'bold'
  },
  button: {
    fontSize: 50
  },
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 15,
    borderColor: '#d6ffff',
    borderWidth: 1
},
  textshadow: {
    fontSize:18,
    color:'#d6ffff',
    fontFamily:'Times New Roman',
    paddingLeft:30,
    paddingRight:30,
    textShadowColor:'#585858',
    textShadowOffset:{width: 5, height: 5},
    textShadowRadius:10,
  },
});

export default Screen1