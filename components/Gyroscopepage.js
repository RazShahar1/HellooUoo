import {View , Text, Button} from 'react-native'
import React from 'react'
import {useState} from 'react'
import {Gyroscope  } from 'expo-sensors';

export default ()=>{
    const [{ x, y, z }, setData] = useState({
        x: 0,
        y: 0,
        z: 0,
      });

      const [subscription, setSubscription] = useState(null);
      const _slow = () => Gyroscope.setUpdateInterval(1000);
      const _fast = () => Gyroscope.setUpdateInterval(16);
      const _subscribe = () => {
          Gyroscope.addListener(gyroscopeData => {
            setData(gyroscopeData);
          })
      };
      const _unsubscribe = () => {
        setData('')
        
      };
    return(
        <View>
            <Text>Gyroscope Page</Text>
            <Text>Gyroscope:</Text>
            <Text>x: {x}</Text>
            <Text>y: {y}</Text>
            <Text>z: {z}</Text>
            <Button 
            title='Gyroscope chack'
            onPress={_subscribe}>Gyroscope</Button>
            <Button 
            title='slow'
            onPress={_slow}
            >Slow</Button>
            <Button
            title='Fast'
            onPress={_fast}>Fast</Button>
            <Button 
            title='Gyroscope chack2'
            onPress={_unsubscribe}>Gyroscope</Button>
        </View>
    )
}