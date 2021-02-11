import React, { useState} from 'react';
import {TouchableOpacity, StyleSheet, View, Text,} from 'react-native';
import {useSelector} from 'react-redux'


export default function SearchDropDown(props) {

    const locations = useSelector(state => {
        return state.location.items
      })

    const [location, setLocation] = useState([])
    console.log(location, "line 8")

    function goToSearch() {

        console.log('testing search bar')

        const currentLocation = locations.filter(location2 => location2.name.toLowerCase() === location)
        const newLat = currentLocation.map(c => c.latitude)
        const newLon = currentLocation.map(c => c.longitude)

        console.log(newLat, "newlat ")

        props.mapRef.current.animateToRegion(
            {
              latitude: newLat[0],
              longitude: newLon[0],
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
                                <TouchableOpacity key={item.id} onPress={() => {setLocation(item); goToSearch()}} latitude={item.latitude} longitude={item.longitude} style={styles.itemView}>
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

        backgroundColor: '#FED8B1',
        paddingTop: 10,
        // marginLeft: 100,
        marginTop: 30,
        width: 120,
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
        // marginHorizontal: '10%',
        backgroundColor: 'white',
        height: 30,
        width: '100%',
        marginBottom: 10,
        justifyContent: 'center',
        borderRadius: 4,
        // position: 'absolute'

    },
    itemText: {
        color: 'black',
        paddingHorizontal: 10,
        // position: 'absolute'

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
        color: 'white',
        // position: 'absolute'

    },

});