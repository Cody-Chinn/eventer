import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import DateTime from 'luxon/src/datetime.js'; // Using Luxon on now becuase moment() is losing support
import { COLORS } from '../globals';

export default function FilterBar({navigation, date}){

  let dateTitle = new DateTime.fromISO(date).toLocaleString({ month: 'long', day: 'numeric', year: 'numeric' })

  const dispatchEvents = useDispatch()
  const dispatchDate = useDispatch()

  const dateFilter = useSelector(state => state.dateFilter)

  const onAddPressed = () => {
    navigation.navigate('Add Event', {
      dateFilter: dateFilter
    })
  }

  const onClearPressed = () => {
    dispatchEvents({type: 'SET_SELECTED', payload: {newDate: '', prevDate: dateFilter}})
    dispatchDate({type: 'DATE_FILTER', payload: null})
  }
  
  return(
    <View style={styles.container}>
      {/* Title of the month */}
      <Text style={styles.filterTitle}>{dateTitle.toString()}</Text>

      {/* buttons */}
      <View style={styles.buttonContainer}>

        {/* left button for adding events */}
        <View style={styles.buttonSpacer} >
          <TouchableOpacity
            style={styles.buttons}
            onPress={onAddPressed}>
            <Text style={styles.buttonText}>  +  </Text>
          </TouchableOpacity>
        </View>

        {/* right button for clearing filter */}
        <View style={styles.buttonSpacer}>
          <TouchableOpacity
            style={styles.buttons}
            onPress={onClearPressed}>
              <Text style={styles.buttonText}> reset </Text>
            </TouchableOpacity>
          </View>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', 
    paddingTop: 10,
    width:"90%",
    alignSelf: 'center'
  },
  filterTitle: {
    fontSize: 24, 
    flexDirection: 'row', 
    flex:1, 
    flexWrap: 'wrap-reverse', 
    justifyContent: 'flex-start', 
    paddingTop: 3
  },
  buttonContainer: {
    flexDirection: 'row', 
    alignItems: 'center', 
    flexWrap: 'wrap-reverse'
  },
  buttonSpacer: {
    paddingHorizontal: 4, 
    paddingBottom: 10
  },
  buttons: {
    alignItems: "center",
    padding: 6,
    backgroundColor: COLORS.MAIN,
    borderRadius: 50
  },
  buttonText: {
    color: 'white'
  }
})