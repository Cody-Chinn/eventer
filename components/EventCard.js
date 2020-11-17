import React from 'react';
import { Card, CardTitle, CardContent } from 'react-native-material-cards';
import { useSelector } from 'react-redux';
import Moment from 'moment';

export default function EventCard({event, navigation}){

  const dateFilter = useSelector(state => state.dateFilter)

  return(
    <Card 
      onPress={() => navigation.navigate('Details', {event})}>
      <CardTitle 
        title={event.title}
        subtitle={dateFilter == null ? Moment(event.startDate).format('MMMM DD, YYYY') : undefined}
      />
      <CardContent text={event.content}/>
    </Card>
  )
}