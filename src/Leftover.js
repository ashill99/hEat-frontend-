    // state for user location

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
    //   text = JSON.stringify(userLocation);
    // }

    // console.log(text, "line 48")
    // console.log(text.latitude)
    // console.log(userLocation, "line 50")
    // console.log(userLocation.coords.latitude, "line 51")
// console.log(region, "region")


    // Code for restaurant type filter and a switch button toggle 

    {/* <DropDownPicker
        items={[
            {label: 'All', value: 'All', icon: () => <Icon name="whatshot" size={18} color="#900" />,},
            {label: 'Pizza', value: 'Pizza', icon: () => <Icon name="nightlife" size={18} color="#900" />},
            {label: 'Chinese', value: 'Chinese', icon: () => <Icon name="fastfood" size={18} color="#900" />},
            {label: 'Italian', value: 'Italian', icon: () => <Icon name="fastfood" size={18} color="#900" />},
            {label: 'Burgers', value: 'Burgers', icon: () => <Icon name="fastfood" size={18} color="#900" />},

        ]}
        defaultValue="All"
        containerStyle={{height: 40}}
        style={{backgroundColor: '#fafafa'}}
        itemStyle={{
            justifyContent: 'flex-start'
        }}
        labelStyle={{
            fontSize: 16,
            textAlign: 'left',
            color: '#000'
        }}
        containerStyle={{width: 100, height: 30}}
        dropDownStyle={{backgroundColor: '#fafafa'}}
        onChangeItem={item => dispatch(updateRestType(item.value))}
    /> */}

      {/* <Switch
        backgroundActive={'green'}
        backgroundInactive={'blue'}
        circleActiveColor={'#30a566'}
        circleInActiveColor={'blue'}
        onValueChange={toggleSwitch}
        value={isEnabled}
        activeText={'Restaurant'}
        inActiveText={'Bar'}
      /> */}


        {/* <Button
            style={styles.button}
            title="Faveourites"
            onPress={() => {
              navigation.push('Screen4')
            }}
          /> */}


      //     <Svg height="40" width="100%">
      //     <Text     
      //     fill="orange"
      //     stroke="blue"
      //     fontSize="16"
      //     fontWeight="bold"
      //     x="200"
      //     y="20"
      //     textAnchor="middle"
      //     >Only New York's hottest bars and restaurants.
      //     </Text>
      // </Svg>
      // <Svg height="40" width="100%">
      //     <Text     
      //         fill="orange"
      //         stroke="blue"
      //         fontSize="16"
      //         fontWeight="bold"
      //         x="200"
      //         y="40"
      //         textAnchor="middle"
      //         >Literally.
      //     </Text>
      // </Svg> 