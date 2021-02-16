import React, { useState} from 'react';
import {TouchableOpacity, StyleSheet, View, Text,} from 'react-native';
import {useSelector} from 'react-redux'


export default function SearchDropDown({dataSource, mapRef, onSearch}) {

    const locations = useSelector(state => {
        return state.location.items
      })

    const [location, setLocation] = useState([])

    function goToSearch(item) {
        console.log(item, 'item search bar')
        console.log('testing search bar')

        const currentLocation = locations.filter(location2 => location2.name.toLowerCase() === location)
        const newLat = parseFloat(currentLocation.map(c => c.latitude))
        const newLon = parseFloat(currentLocation.map(c => c.longitude))

        newLat ? 
        mapRef.current.animateToRegion(
            {
              latitude: newLat,
              longitude: newLon,
              latitudeDelta: 0.004,
              longitudeDelta: 0.004
            }, 1000)  
            : null
    }

    return (

        <TouchableOpacity
            OnPress={onSearch}
            style={styles.container}>

            <View style={styles.subContainer}>
                {
                    dataSource.length ?
                        dataSource.map(item => {
                            return (
                                <TouchableOpacity key={item.id} onPress={() => {setLocation(item); setLocation(item); goToSearch(item)}} style={styles.itemView}>
                                    <Text style={styles.itemText}>{item}</Text>
                                </TouchableOpacity>                            
                                )
                        })
                        :
                        <View
                            style={styles.noResultView}
                        >
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
        position: 'absolute'

    },
    subContainer: {

        backgroundColor: '#FFEFD5',
        paddingTop: 10,
        // marginLeft: 100,
        marginTop: 30,
        width: 440,
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
        flexWrap: 'wrap',
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        position: 'absolute'

    },
    itemView: {
        // marginHorizontal: '70%',
        backgroundColor: 'white',
        height: 35,
        width: '100%',
        marginBottom: 10,
        justifyContent: 'center',
        borderRadius: 4,
        // position: 'absolute'

    },
    itemText: {
        color: 'blue',
        paddingHorizontal: 10,
        textTransform: 'capitalize',
        // position: 'absolute'
        fontSize: 18,
        alignContent: 'center',

    },
    noResultView: {
        alignSelf: 'center',
        // margin: 20,
        height: 100,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        // position: 'absolute'

    },
    noResultText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'blue',
        // position: 'absolute'

    },

});