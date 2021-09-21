import React from "react";
import { StyleSheet, View, Text, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { Ionicons, Feather, AntDesign, MaterialCommunityIcons, Fontisto } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
    Clear : {
        iconName : "white-balance-sunny",
        gradient : ["#1488CC","#2B32B2"]
    },
    Clouds : {
        iconName : "cloud",
        gradient : ["#2c3e50","#bdc3c7"],
        title : "구름이 많아요",
        subtitle : "많아도 너무 많아요"
    },
    Thunderstorm : {
        iconName : "thunderstorm",
        gradient : ["#000000","#434343"]
    },
    Drizzle : {
        iconName : "",
        gradient : []
    },
    Rain : {
        iconName : "",
        gradient : []
    },
    Snow : {
        iconName : "",
        gradient : []
    },
    Mist : {
        iconName : "",
        gradient : []
    },
    Smoke : {
        iconName : "",
        gradient : []
    },
    Haze : {
        iconName : "",
        gradient : []
    },
    Dust : {
        iconName : "",
        gradient : []
    },
    Fog : {
        iconName : "",
        gradient : []
    },
    Sand : {
        iconName : "",
        gradient : []
    },
    Ash : {
        iconName : "",
        gradient : []
    },
    Squall : {
        iconName : "",
        gradient : []
    },
    Tornado : {
        iconName : "",
        gradient : []
    }
}

export default function Weather( {temp, condition}){
    return (
        <LinearGradient colors= {weatherOptions[condition].gradient} style={styles.container}>

            <StatusBar barStyle = 'light-content'/>

            <View style = {styles.halfContainer_up}>

                <MaterialCommunityIcons 
                    name= {weatherOptions[condition].iconName}
                    size= { 96 }
                    color= "white" />

                <Text style = {styles.temp}>{temp}˚</Text>
            </View>

            <View style = {styles.halfContainer_down}>
                <View style = {{ ...styles.halfContainer_down, ...styles.textContainer }}>

                    <Text style = {styles.title}>{weatherOptions[condition].title}</Text>
                    <Text style = {styles.subtitle}>{weatherOptions[condition].subtitle}</Text>

                </View>
            </View>

        </LinearGradient>
    );
}

Weather.prop = {
    temp : PropTypes.number.isRequired,
    condition : PropTypes.oneOf(["Thunderstorm","Drizzle","Rain","Snow","Mist","Haze","Dust","Fog","Sand","Smoke","Ash","Tornado","Squall","Clear","Clouds"]).isRequired
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
        color : 'white'
    },

    background : {
        padding : 15,
        alignItems : 'center',

    },
    title : {
        color : 'white',
        fontSize : 44,
        fontWeight : "300",
        marginBottom : 10
    },
    subtitle : {
        color : 'white',
        fontWeight : "600",
        fontSize : 24
    },
    textContainer : {
        paddingHorizontal : 20,
        alignItems : "flex-start"
    }
});