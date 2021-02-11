import React, { useEffect } from 'react';
import { StyleSheet, Button, Image, View, ImageBackground } from 'react-native';
import 'react-native-gesture-handler';
import Svg, { Text } from "react-native-svg";

const Screen1 = () => {

  // const [userLocation, setUserLocation] = useState(null);
  // const [errorMsg, setErrorMsg] = useState(null);

  // location fetch below 

  // useEffect(() => {
  //   (async () => {
  //     let { status } = await Location.requestPermissionsAsync();
  //     if (status !== 'granted') {
  //       setErrorMsg('Permission to access location was denied');
  //       return;
  //     }

  //     let userLocation = await Location.getCurrentPositionAsync({});
  //     setUserLocation(userLocation);
  //   })();
  // }, []);

  // let text = 'Waiting..';
  // if (errorMsg) {
  //   text = errorMsg;
  // } else if (userLocation) {
  //   text = JSON.stringify(userLocation)
  // const action = addRegion(userLocation.coords.latitude, userLocation.coords.longitude)
  // dispatch(action)
  // }

  // const dispatch = useDispatch()

  // const action = addRegion(userLocation.coords.latitude, userLocation.coords.longitude)
  // dispatch(action)

// region = useSelector(state => {
//     return state.region
//   })

  // console.log(text, "line 48")
  // console.log(text.latitude)
  // console.log(userLocation, "line 50")
  // console.log(userLocation.coords.latitude, "line 51")
// console.log(region, "region")

    return( ({ navigation, route }) => (
        <View style={styles.container}>
          <ImageBackground source={{uri: "https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/rm21-marble-sasi-117.jpg?w=1200&h=1200&dpr=1&fit=clip&crop=default&fm=jpg&q=75&vib=3&con=3&usm=15&cs=srgb&bg=F4F4F3&ixlib=js-2.2.1&s=571bf921d1424d22a2004bcce5f94bc1"}} style={{width: '100%', height: '100%'}}>
            <Svg height="100" width="100%">
              <Text     
                fill="orange"
                stroke="blue"
                fontSize="60"
                fontWeight="bold"
                x="220"
                y="80"
                textAnchor="middle"
                >hEat NYC
              </Text>
            </Svg>
            <Svg height="40" width="100%">
              <Text     
                fill="orange"
                stroke="blue"
                fontSize="16"
                fontWeight="bold"
                x="200"
                y="20"
                textAnchor="middle"
                >Only New York's hottest bars and restaurants.
              </Text>
            </Svg>
            <Svg height="40" width="100%">
            <Text     
              fill="orange"
              stroke="blue"
              fontSize="16"
              fontWeight="bold"
              x="200"
              y="40"
              textAnchor="middle"
              >Literally.
            </Text>
          </Svg>
          <Button
            style={styles.button}
            title="Warm Up"
            onPress={() => {
              navigation.push('Screen2')
            }}
          />
          <Image source={{uri: "https://media.timeout.com/images/105711851/1372/772/image.jpg"}} style={{width: '100%', height: '50%'}} />
          <Text>2021</Text>
          </ImageBackground>
        </View>
      )
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#F4C430',
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