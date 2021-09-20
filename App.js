import React from 'react';
import Loading from './Loading';
import * as Location from 'expo-location';
import { Alert } from 'react-native';
import axios from "axios"
import Weather from "./Weather"

const API_KEY = "bd79a62f3d0f41fb801fdbdf4063c0e9";

export default class extends React.Component {

  state = {
    isLoading : true
  }

  getWeather = async (latitude, longitude) => {
    const {data} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`)
    this.setState({ isLoading : false, temp : data.main.temp, condition: data.weather[0].main })    
  }

  getLocation = async () => {
    try{
      await Location.requestForegroundPermissionsAsync();
      const {
        coords : {latitude, longitude}
        } = await Location.getCurrentPositionAsync();  
        this.getWeather(latitude, longitude)
    } catch (error) {
      Alert.alert("당신을 찾을 수 없어요","너무 슬퍼요"); 
    }
  };

  componentDidMount() {
    this.getLocation();
  }

  render() {
    const { isLoading, temp, condition } =  this.state;
    return isLoading ? <Loading/> : <Weather temp={Math.round(temp)} condition = {condition}/>;
  }
}