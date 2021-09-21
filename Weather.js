import React from "react";
import { StyleSheet, View, Text } from "react-native";
import PropTypes from "prop-types";
import { Ionicons, Feather, AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';

export default function Weather({temp, condition}){
    return (
    <View style = {styles.container}>

        <View style = {styles.halfContainer_up}>
            <MaterialCommunityIcons name="weather-lightning-rainy" size={96} color="black" />
            <Text style = {styles.temp}>{temp}˚</Text>
        </View>

        <View style = {styles.halfContainer_down}>
            <Text >{temp}</Text>
        </View>
    
    </View>
    );
}

Weather.prop = {
    temp : PropTypes.number.isRequired,
    condition : PropTypes.oneOf(["Thunderstorm","Drizzle","Rain","Snow","Atmosphere","Clear","Clouds"]).isRequired
};

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : "center",
        alignItems : "center"
    },

    halfContainer_up : {
        flex : 1,
        justifyContent : "center",
        alignItems : "center"
    },

    halfContainer_down : {
        flex : 1,
        justifyContent : "center",
        alignItems : "center"
    },

    temp : {
        fontSize : 42,
    }
});