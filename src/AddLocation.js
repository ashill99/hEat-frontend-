import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { StyleSheet, Linking, Item, Text, View} from 'react-native';
import 'react-native-gesture-handler';
import NavBar from './NavBar'
import {URL} from '@env'
import styled from 'styled-components'
import Geocoder from 'react-native-geocoding';
import { updateLocations } from './redux/location'
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/MaterialIcons';


const AddLocation = ({ navigation, route}) => {

const dispatch = useDispatch();

const [name, setName] = useState("")
const [address, setAddress] = useState("")
const [restBar, setRestBar] = useState("Restaurant")
const [restType, setRestType] = useState("")
const [hours, setHours] = useState("")
const [website, setWebsite] = useState("")
const [menu, setMenu] = useState("")
const [latitude, setLatitude] = useState(0)
const [longitude, setLongitude] = useState(0)


function handleAddress() {
    Geocoder.init(""); // use a valid API key

    Geocoder.from(address)
            .then(json => {
                var location = json.results[0].geometry.location;
                console.log(location, "location")
                console.log(location.lng, "lng")
                console.log(location.lat, "lat")
                setLatitude(location.lat)
                console.log(latitude)
                setLongitude(location.lng)
                console.log(longitude)
                let lat = location.lat 
                let lng = location.lng
                handleSubmit(lat, lng)
            })
            .catch(error => console.warn(error));
    }

function handleSubmit(lat, lng) {
    
    console.log("button pressed")

    fetch(`${URL}/api/v1/locations`,  {
        method: 'POST',
        headers: {
            Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name, 
            address: address, 
            restOrBar: restBar,
            longitude: lng,
            latitude: lat,
            restType: restType,
            hours: hours,
            website: website,
            menu: menu,
            imgUrl: ""
        })
    })
    .then((response) => response.json())
    .then(newLocation => {
        console.log(newLocation, "newLocation")
        const action2 = updateLocations(newLocation)
        dispatch(action2)
        setName("")
        setAddress("")
        setRestBar("")
        setRestType("")
        setHours("")
        setMenu("")
        setWebsite("")
    })
    .catch((error) => {
      console.error(error);
    });



}
    return (
      <>
        <NavBar navigation={navigation}/>
        <Wrapper>
            <Form>
            <Input
                placeholder={"Name"}
                value={name}
                onChangeText={setName}
            />
            <Input
                placeholder={"Address"}
                value={address}
                onChangeText={setAddress}
            />
            {/* <Input
                placeholder={"Restaurant or Bar?"}
                value={restBar}
                onChangeText={setRestBar}
            /> */}
            <DropDownPicker
    items={[
        {label: 'Bar', value: 'Bar', icon: () => <Icon name="nightlife" size={18} color="gray" />},
              {label: 'Restaurant', value: 'Restaurant', icon: () => <Icon name="fastfood" size={18} color="#900" />},
    ]}
    defaultValue={'Restaurant'}
    containerStyle={{marginTop: 20, height: 40, width: 310, marginLeft: 40, borderRadius: 20}}
    style={{backgroundColor: '#e1e1e1'}}
    itemStyle={{
        justifyContent: 'flex-start'
    }}
    dropDownStyle={{backgroundColor: '#e1e1e1'}}
    onChangeItem={item => setRestBar(item.value)}
/>
            <Input
                placeholder={"Type of Restaurant"}
                value={restType}
                onChangeText={setRestType}
            />
            <Input
                placeholder={"Website"}
                value={website}
                onChangeText={setWebsite}
            />
            <Input
                placeholder={"Menu"}
                value={menu}
                onChangeText={setMenu}
            />
            <Input
                placeholder={"Hours"}
                value={hours}
                onChangeText={setHours}
            />
            <AddButton
                onPress={handleAddress}
            >
                <Span>Share the Warmth</Span>
            </AddButton>
            </Form>
        </Wrapper>
        </>
      )
}

export default AddLocation

const Form = styled.View`
padding:20px;
`
const Span = styled.Text`
color: #F7F8F3;
padding: 12px;
align-self: center;
font-size: 20px;

`
const SearchBar = styled.TextInput`
background: #eefbfb;
width: 100%;
border-radius: 30px;
padding-left: 24px;
padding-top: 20px;
font-size: 20px;
`

const Wrapper = styled.ScrollView`
flex: 1;
width: 100%;
height: 95%;
display: flex;
backgroundColor: 	#FFEFD5;  
`

const Title = styled.Text`
font-family: "PlayWithFire";
font-size: 35px;
color: black;
padding-top: 10px;
padding-bottom: 10px;
align-self: center;
`

const RestaurantTitle = styled.Text`
font-family: "PlayWithFire";
font-size: 24px;
color: orange;
padding-top: 10px;
padding-bottom: 10px;
align-self: center;
`

const RestaurantText = styled.Text`
font-size: 15px;
color: #777;
align-self: center;

`

const ItemView = styled.View`
border-bottom-color: black;
border-bottom-width: 2px;
margin-bottom: 10px;
`

const RestaurantItem = styled.View`
padding-top: 10px;
display: flex;
padding-bottom: 10px;
padding-left: 10px;
align-self: center;


    `

    const AddButton = styled.TouchableOpacity`
        background: orange;
        width: 240px;
        margin-bottom: 20px;
        margin-top: 20px;
        border-radius:20px;
        align-self: center;
        padding: 10px;
`

const Input = styled.TextInput`
background: #e1e1e1;
width: 80%;
border-radius:20px;
padding-left: 12px;
height: 50px;
margin-top: 20px;
border-radius: 20px;
align-self: center;
`