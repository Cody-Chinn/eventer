import React, { useState } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import {Calendar} from 'react-native-calendars';
import { useDispatch, useSelector } from 'react-redux';
import EventList from '../components/EventList';
import EVENTS from '../API/index';
import {StatusBar} from 'expo-status-bar'

export default function CalendarScreen({navigation}) {

  const [prevDate, setPrevDate] = useState('')
  const [month, setMonth] = useState(new Date().getMonth()+1) // For whatever reason Date() is 0 indexed??? 

  const events = useSelector(state => state.eventsList)
  const dateFilter = useSelector(state => state.dateFilter)

  const dispatchEvents = useDispatch()
  const dispatchDate = useDispatch()

  const dayPressHandler = day => {
    dispatchEvents({type: 'SET_SELECTED', payload: {prevDate: prevDate, newDate: day.dateString}})
    dispatchDate({type: 'DATE_FILTER', payload: day.dateString})

    // Make sure this is the last thing that happens
    setPrevDate(day.dateString)
  }

  const handleMonthChange = (dateObj) => {
    dispatchEvents({type: 'SET_SELECTED', payload: {newDate: '', prevDate: dateFilter}})
    dispatchDate({type: 'DATE_FILTER', payload: null})
    setMonth(dateObj.month)
  }

  return (
    <SafeAreaView style={styles.container}>
      <Calendar
        // Handler which gets executed on day press. Default = undefined
        onDayPress={(day) => dayPressHandler(day)}
        // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
        monthFormat={'MMMM'}
        markedDates={events}
        markingType="multi-dot"
        onMonthChange={(dateObj) => handleMonthChange(dateObj)}
      />
      <EventList 
        events={EVENTS}
        month={month}
        navigation={navigation}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1, 
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0  
  }
})