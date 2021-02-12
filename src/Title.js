import React from 'react';
import { View } from 'react-native';
import 'react-native-gesture-handler';
import Svg, { Text } from "react-native-svg";

const Title = () => {

    return (
        <View>
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
        </View>
    )
}

export default Title 