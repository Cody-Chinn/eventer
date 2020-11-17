import React from 'react';
import { FlatList, View } from 'react-native';
import { useSelector } from 'react-redux';
import EventCard  from './EventCard';
import FilterBar from './FilterBar';
import Moment from 'moment';

export default function EventList({events, month, navigation}){

  const dateFilter = useSelector(state => state.dateFilter)
  
  if(dateFilter !== null){
    events = events.filter(event => Moment(event.startDate).format('YYYY-MM-DD') === Moment(dateFilter).format('YYYY-MM-DD'))
  } else {
    events = events.filter(event =>  parseInt(Moment(event.startDate).format('MM')) === month)
  }

  // The deconstructed 'item' param shouldn't be changed here.
  // the renderItem variable specifically breaks the objects into
  // larger objects with keys called 'item' then renders it
  const renderItem = ({item}) => (
    <EventCard event={item} navigation={navigation}/>
  );

  return(
  <View style={{flex: 1, backgroundColor:'white'}}>
    {dateFilter === null ? null : <FilterBar date={dateFilter} navigation={navigation}/>} 
    <FlatList 
      data={events}
      renderItem={renderItem}
      keyExtractor={event => event.key}
    />
  </View>
  )
}