import React, {useRef, useEffect, useState} from 'react';

import {
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    View,
    Text,
    TextInput,
} from 'react-native';
// import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';


export default function SearchDropDown(props) {


    function goToSearch() {
        console.log('testing search bar')
        props.mapRef.current.animateToRegion(
            {
              latitude: 40.7026,
              longitude: -73.9172,
              latitudeDelta: 0.02,
              longitudeDelta: 0.02
            }, 1000)  
    }

    const { dataSource } = props

    return (
        <TouchableOpacity
            OnPress={props.onSearch}
            style={styles.container}>

            <View style={styles.subContainer}>
                {
                    dataSource.length ?

                        dataSource.map(item => {
                            return (
                                <TouchableOpacity onPress={goToSearch} style={styles.itemView}>
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
        position: 'absolute',
        top: '6.2%',
        left: 0, right: 0, bottom: 0,

    },
    subContainer: {

        backgroundColor: '#FED8B1',
        paddingTop: 10,
        marginHorizontal: 20,
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
        flexWrap: 'wrap',

        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center'
    },
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