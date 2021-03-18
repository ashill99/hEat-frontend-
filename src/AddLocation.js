import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import 'react-native-gesture-handler';
import NavBar from './NavBar';
import { URL, GEOCODE } from '@env';
import styled from 'styled-components';
import Geocoder from 'react-native-geocoding';
import { updateLocations } from './redux/location';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/MaterialIcons';


const AddLocation = ({ navigation }) => {

const dispatch = useDispatch();

const [name, setName] = useState("");
const [address, setAddress] = useState("");
const [restBar, setRestBar] = useState("Restaurant");
const [restType, setRestType] = useState("");
const [hours, setHours] = useState("");
const [website, setWebsite] = useState("");
const [menu, setMenu] = useState("");

function handleAddress() {
    Geocoder.init(`${GEOCODE}`);

    Geocoder.from(address)
            .then(json => {
                let location = json.results[0].geometry.location;

                let lat = location.lat;
                let lng = location.lng;
                handleSubmit(lat, lng);
                })
            .catch(error => console.warn(error));
    }

function handleSubmit(lat, lng) {
    
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
                <DropDownPicker
                    items={[
                        {label: 'Bar', value: 'Bar', icon: () => <Icon name="nightlife" size={18} color="gray" />},
                            {label: 'Restaurant', value: 'Restaurant', icon: () => <Icon name="fastfood" size={18} color="gray" />},
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
    margin-top: 10px;
    padding:20px;
`
const Span = styled.Text`
    color: #F7F8F3;
    padding: 12px;
    align-self: center;
    font-size: 20px;
`

const Wrapper = styled.ScrollView`
    flex: 1;
    width: 100%;
    height: 95%;
    display: flex;
    backgroundColor: #FFEFD5;  
`

const AddButton = styled.TouchableOpacity`
    background: orange;
    width: 200px;
    margin-bottom: 20px;
    margin-top: 20px;
    border-radius:20px;
    align-self: center;
    padding: 5px;
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