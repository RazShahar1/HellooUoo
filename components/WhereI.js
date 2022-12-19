import React from "react";
// import MapView from "react-native-maps";
import { StyleSheet,View } from "react-native";

export default ()=>{
    return(
        <View style={styles.view2}>
        {/* <MapView style={styles.map}
        initialRegion={{
            latitude:38,
            longitude:38,
            latitudeDelta:38,
            longitudeDelta:90
        }}/> */}
        </View>
    )
}

const styles=StyleSheet.create({
    map:{
        height: '500',
        width: '500'
    },
    view2:{
        backgroundColor: 'red'
    }
})