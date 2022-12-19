
import { StyleSheet,Text, View , Button, TextInput} from 'react-native';
import React ,{useState}from 'react';
import Hello from './components/Hello';
import WhereI from './components/WhereI';
import Barometerpage from './components/Barometerpage';
import Lightandmagnetic from './components/Lightandmagnetic';




export default function App() {
  const showalert=()=>{
    if(isVisible){
      setisVis(false)
    }else{
      setisVis(true)
    }
    
  }
  const textshow = ()=>{
    alert(text)
  }
  const [isVisible,setisVis]=useState(true)
  const [text,onChange]=useState("inter your text")
  return (
    < View style={styles.container}> 


<Barometerpage/>

<Lightandmagnetic/>

     <Hello massage={{msg:'Porps are working'}}/>
    <Text>What app</Text>
    {
      isVisible && <Text style={{backgroundColor:'pink'}}>Raz Shahar</Text>
    }
    <Text>Pls write your name</Text>
    <TextInput style={styles.input}
    onChangeText={onChange}
    value={text}
    />
    <Button
    onPress={showalert}
    title='Click me dud'
    />
    <Button
    onPress={textshow}
    title='show text'
    />
    <WhereI/>
  
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width:'100%',
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
