import React from "react";
import { View ,Text , StyleSheet } from "react-native";
// import { Barometer  } from 'expo-sensors';


export default (props)=>{
    // const [{ pressure, relativeAltitude }, setData] = useState({ pressure: 0, relativeAltitude: 0 })
    // const [subscription, setSubscription] = useState(null);
    // const toggleListener = () => {
    //     subscription ? unsubscribe() : subscribe();
    //   };
    
    //   const subscribe = () => {
    //     setSubscription(Barometer.addListener(setData));
    //   };
    
    //   const unsubscribe = () => {
    //     subscription && subscription.remove();
    //     setSubscription(null);
    //   };
    
    return(
    <View style={style.view1}>
        <Text>Hello component</Text>
        <Text> {props.massage.msg}</Text>
        </View>
    //     <View >
    //     <Text>Barometer: Listener {subscription ? 'ACTIVE' : 'INACTIVE'}</Text>
    //     <Text>Pressure: {pressure} hPa</Text>
    //     <Text>
    //       Relative Altitude:{' '}
    //       {Platform.OS === 'ios' ? `${relativeAltitude} m` : `Only available on iOS`}
    //     </Text>
    //     <TouchableOpacity onPress={toggleListener} >
    //       <Text>Toggle listener</Text>
    //     </TouchableOpacity>
    //   </View>
    //  </ View>
    )
}

const style = StyleSheet.create({
    view1:{
        backgroundColor:'green',
        height:20,
        margin:30
    }
})