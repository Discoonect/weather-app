import React from "react";
import { StyleSheet, View, Text } from "react-native";
import PropTypes from "prop-types";

export default function Weather({temp, condition}){
    return (
    <View style = {styles.container}>
        
        
        <Text >{temp}</Text>
        <Text >{condition}</Text>
    
    
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
});