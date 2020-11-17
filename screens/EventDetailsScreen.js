import React, {useEffect} from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Moment from 'moment';

export default function EventDetails({navigation, route}){

  const event = route.params.event;
  console.log(event)
  useEffect(() => {
    navigation.setOptions({title: event.title})
  })

  return(
    <View>
      <View style={{flexDirection: 'row', justifyContent:'center', alignItems: 'center'}}>
        <Image style={{width: 24, height: 24}}source={require('../assets/baseline_alarm_black_18dp.png')}/>
        {event.allDay ? <Text style={styles.times}>All Day Event</Text> : 
          <>
          <Text style={styles.times}>Starts {Moment(event.startTime).format('MMMM DD, h:mm A')}</Text>
          </>
        }
      </View>
      <Text style={styles.details}>{event.content}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  details: {
    padding: 20,
    paddingTop: 5
  },
  times: {
    padding: 10,
    flexDirection: 'row',
    fontSize: 24,
  }
})