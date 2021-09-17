import React from 'react';
import Loading from './Loading';
import * as Location from 'expo-location';
import { Alert } from 'react-native';

export default class extends React.Component {

  state = {
    isLoading : true
  }

  getLocation = async() => {
  
    try{
      const response = await Location.requestForegroundPermissionsAsync();
      
      const {
        coords : {latitude, longitude}
        } = await Location.getCurrentPositionAsync();
      this.setState({ isLoading : false });
      
    } catch (error) {
      Alert.alert("당신을 찾을 수 없어요","너무 슬퍼요");
      
    }
    
  }

  componentDidMount() {
    this.getLocation();
  }

  render() {
    const { isLoading } = this.state;
    return isLoading ? <Loading/> : null;
  }

  

  

  
}