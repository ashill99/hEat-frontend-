import React, {useRef, useEffect, useState} from 'react';
import {TouchableOpacity, StyleSheet, ScrollView, View, Text, TextInput,} from 'react-native';
import {useSelector} from 'react-redux'


export default function SearchDropDown(props) {

    const locations = useSelector(state => {
        return state.location.items
      })

    const [location, setLocation] = useState([])
    console.log(location, "line 8")


    function goToSearch(e) {
        console.log('testing search bar')
        // console.log(item)
        console.log(location, "line12")

        props.mapRef.current.animateToRegion(
            {
              latitude: 40.7026,
              longitude: -73.9172,
              latitudeDelta: 0.02,
              longitudeDelta: 0.02
            }, 1000)  
            const currentLocation = locations.filter(location => location.name.toLowerCase() === location)

            console.log(currentLocation, "line 14")
    }
    const { dataSource } = props
    console.log(dataSource, "line 7")

    return (
        <TouchableOpacity
            OnPress={props.onSearch}
            style={styles.container}>

            <View style={styles.subContainer}>
                {
                    dataSource.length ?
                        dataSource.map(item => {
                            return (
                                <TouchableOpacity onPress={() => {goToSearch(); setLocation(item)}} latitude={item.latitude} longitude={item.longitude} style={styles.itemView}>
                                    <Text style={styles.itemText}>{item}</Text>
                                </TouchableOpacity>                            
                                )
                        })
                        

                        :
                        <View
                            style={styles.noResultView}>
                            <Text style={styles.noResultText}>No search items matched</Text>
                        </View>
                }

            </View>
        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    container: {
        // position: 'absolute',
        top: '6.2%',
        left: 0, right: 0, bottom: 0,

    },
    // subContainer: {

    //     backgroundColor: '#FED8B1',
    //     paddingTop: 10,
    //     marginHorizontal: 20,
    //     borderTopLeftRadius: 4,
    //     borderTopRightRadius: 4,
    //     flexWrap: 'wrap',

    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     alignContent: 'center'
    // },
    itemView: {
        // marginHorizontal: '10%',
        backgroundColor: 'white',
        height: 30,
        width: '90%',
        marginBottom: 10,
        justifyContent: 'center',
        borderRadius: 4,
    },
    itemText: {
        color: 'black',
        paddingHorizontal: 10,
    },
    noResultView: {
        alignSelf: 'center',
        // margin: 20,
        height: 100,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center'
    },
    noResultText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
    },

});