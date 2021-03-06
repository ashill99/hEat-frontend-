import React, {useState} from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux'
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { updateRestBar } from './redux/restBar'
import {updateSearch} from './redux/search'
import SearchDropDown from './SearchDropDown'

const FilterContainer = ({mapRef}) => {

    const dispatch = useDispatch()

    const [isLoaded, setIsLoaded] = useState(false)
    // const [text, setText] = useState("")
    // useSelectors 

    const search = useSelector(state => {
      return state.search.search
    })

    const locations = useSelector(state => {
      return state.location.items
    })

    function loadFilter() {
      locations ? 
      setIsLoaded(true) : null
    }

    const eachLocation = locations ? locations
    .map(location => location) : null

          // States 

    const [dataSource] = useState(eachLocation)
    const [filtered, setFiltered] = useState(dataSource)
    const [searching, setSearching] = useState(false)

    // actions 

    const searchAction = dispatch(updateSearch(search))
      
    const onSearch = (text) => {
      if (text) {
        setSearching(true)
        const temp = text.toLowerCase()
          const dataLowerCase = dataSource.map(item => item.name.toLowerCase())
        const tempList = dataLowerCase.filter(item => {
          if (item.match(temp))
            return item
        })
        console.log(tempList, "templist 54")
        setFiltered(tempList)
        // setText("")
      }
      else {
        setSearching(false)
        setFiltered(dataSource)
      }
  
    }

    return (
<>
      {isLoaded ? 
        <View style={styles.container}>

          <TextInput
            style={styles.textInput}
            placeholder="Search"
            placeholderTextColor='grey'
            onChangeText={onSearch}
          />
          {
          searching &&
          <SearchDropDown
            onPress={() => setSearching(false)}
            dataSource={filtered}
            mapRef={mapRef} />
          }

          <DropDownPicker
            items={[
              {label: 'All', value: 'All', icon: () => <Icon name="whatshot" size={18} color="#900" />,},
              {label: 'Bar', value: 'Bar', icon: () => <Icon name="nightlife" size={18} color="#900" />},
              {label: 'Restaurant', value: 'Restaurant', icon: () => <Icon name="fastfood" size={18} color="#900" />},
            ]}
            defaultValue="All"
            containerStyle={{height: 60}}
            style={{backgroundColor: 'orange'}}
            itemStyle={{
                justifyContent: 'flex-start'
            }}
            labelStyle={{
              fontSize: 16,
              textAlign: 'left',
              color: 'white'
            }}
            containerStyle={{width: 100, height: 40}}
              dropDownStyle={{backgroundColor: 'blue'}}
              onChangeItem={item => dispatch(updateRestBar(item.value))}
            />
        </View>
      : loadFilter()}
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
        position: 'absolute',
        // marginTop: 30,
    },
      textInput: {
        borderColor: '#CCCCCC',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        height: 40,
        fontSize: 18,
        marginLeft: 50,
        // marginTop: 30,
        paddingLeft: 500,
        paddingRight: 200,
        position: 'absolute',
        backgroundColor: '#eefbfb',

      },
})