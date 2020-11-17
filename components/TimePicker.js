import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { EVENT_TIMES } from '../globals';

export default function TimePicker({time, ...props}){

  const [timeToSet, setTimeToSet] = useState()

  switch(time){
    case EVENT_TIMES.START:
      setTimeToSet('start');
    case EVENT_TIMES.END:
      setTimeToSet('end');
    default:
      setTimeToSet(null);
  }

  return(
    <View style={styles.container}>
      <Text style={styles.label}>
          {label}
      </Text>
      <TextInput 
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, flex:1 }}
        onChangeText={text => setTime(text)}
        value={timeValue}
        keyboardType='number-pad'/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white'
  },
  label: {
    flexGrow: 1,
    alignSelf: 'center'
  }
})