import {View , Text, Button ,StyleSheet} from 'react-native'
import React from 'react'
import {useState} from 'react'
import {LightSensor , Magnetometer } from 'expo-sensors';


export default ()=>{
    const [{ x, y, z }, setData] = useState({
        x: 0,
        y: 0,
        z: 0,
      });

      const _subscribe = () => {
          Magnetometer.addListener(result => {
            setData(result);
          })
        
      };
      const [{ illuminance }, setlData] = useState({ illuminance: 0 });
      const _subscribeL = () => {
         LightSensor.addListener(setlData);
      };
    return(
        <View>
          
            <Text style={styles.heder}>Light and Magnetic Sensores</Text>
            <Text style={styles.parameter}>x: {x}</Text>
            <Text style={styles.parameter}>y: {y}</Text>
            <Text style={styles.parameter}>z: {z}</Text>
            <Button
                title='Magnetic Chack'
                onPress={_subscribe}
            >Magnetic Chack</Button>

            <Text style={styles.heder}>Light</Text>
            <Text style={styles.light}>Light Sensor:</Text>
      <Text style={styles.parameter}>
        Illuminance: {illuminance}
      </Text>
      <Button
                title='Light Chack'
                onPress={_subscribeL}
            >Magnetic Chack</Button>
        </View>
    )
}


const styles = StyleSheet.create({
    heder:{
        backgroundColor:'red',
        margin:2,
        fontSize: 25,
        
    },
    parameter:{
        fontSize:20,
    },

    light:{
        fontSize:23,
        backgroundColor:'#f3333'
    }


})