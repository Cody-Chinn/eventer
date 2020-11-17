import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, TextInput, KeyboardAvoidingView, Switch, ScrollView } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { TouchableOpacity } from 'react-native-gesture-handler';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Moment from 'moment'; // Using moment here because luxon and Date() don't work with Android
import { EVENT_TIMES } from '../globals';
import { useHeaderHeight } from '@react-navigation/stack';

export default function AddEventScreen({navigation, route}){

  // Before the screen loads make sure that the header has the correct grammar and set the title of the page
  useEffect(() => {
    let date = new Moment(route.params.dateFilter).format('MMMM Do')
    navigation.setOptions({title: `${date}`})
  })

  const [startTime, setStartTime] = useState(new Date())
  const [endTime, setEndTime] = useState(new Date())
  const [allDay, setAllDay] = useState(false)
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isStart, setIsStart] = useState(false)

  const { register, setValue, handleSubmit, control, reset, errors } = useForm();

  const onSubmit = data => {
    // Since the date/time pickers are annoying, I'm doing this manually
    if(!allDay){
      data['startTime'] = startTime;
      data['endTime'] = endTime;
    } else {
      data['startTime'] = null;
      data['endTime'] = null;
    } 

    console.log(data);
  };

  const showDatePicker = (startOrEnd) => {
    if(startOrEnd === EVENT_TIMES.START){
      setIsStart(true)
    } else {
      setIsStart(false)
    }
    setDatePickerVisibility(true);
  };
 
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
 
  const handleConfirm = (time) => {
    isStart ? setStartTime(time) : setEndTime(time);
    hideDatePicker();
  };

  return (
    <KeyboardAvoidingView  
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={styles.container} 
      keyboardVerticalOffset = {Platform.OS == "ios" ? useHeaderHeight() + 16 : useHeaderHeight()}>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.label}>Title</Text>
          <Controller
            control={control}
            render={({ onChange, onBlur, value }) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
              />
            )}
            name="title"
            rules={{ required: true }}
            defaultValue={null}
          />
          
          <Text style={styles.label}>Location</Text>
          <Controller
            control={control}
            render={({ onChange, onBlur, value }) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
              />
            )}
            name="location"
            rules={{ required: false }}
            defaultValue={null}
          />

          <View style={styles.formRow}>
            <Text style={styles.formRowLabel}>All-day: </Text>
              <Switch
                trackColor={{ false: "#767577", true: "#98FB98" }}
                thumbColor={"white"}
                onValueChange={() => setAllDay(!allDay)}
                value={allDay}
              />
          </View>

          {!allDay && 
          <>
            <View style={{...styles.formRow, paddingBottom: 2}}>
              <Text style={styles.formRowLabel}>Start Time: </Text>
                  <TouchableOpacity onPress={() => showDatePicker(EVENT_TIMES.START)}>
                    <Text style={styles.timeButtons} >
                      {Moment(startTime).format('h:mm A')}
                    </Text>
                  </TouchableOpacity>
            </View>
            
            <View style={{...styles.formRow, paddingTop: 2}}>
              <Text style={styles.formRowLabel}>End Time: </Text>
              <TouchableOpacity onPress={() => showDatePicker(EVENT_TIMES.END)}>
                <Text style={styles.timeButtons}>{Moment(endTime).format('h:mm A')}</Text>
              </TouchableOpacity>
            </View>
          </>}

          <Text style={styles.label}>Details</Text>
          <Controller
            control={control}
            render={({ onChange, onBlur, value }) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                multiline={true}
                numberOfLines={4}
                textAlignVertical='top'
              />
            )}
            name="details"
            rules={{ required: false }}
            defaultValue={null}
          />

          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="time"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          />

          <TouchableOpacity 
            onPress={handleSubmit(onSubmit)}
            style={styles.button}>
            <Text style={styles.buttonInner}>Create Event</Text>
          </TouchableOpacity>
        </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    backgroundColor: 'white',
  },
  label: {
    color: 'black',
    margin: 10,
    marginLeft: 8
  },
  button: {
    color: 'white',
    backgroundColor: '#B19CD9',
    borderRadius: 4,
    padding: 10,
    marginTop: 20,
    width: '90%',
    alignSelf: 'center'
  },
  buttonInner:{
    color: 'white',
    justifyContent: 'center',
    alignSelf: 'center',
    fontSize: 18,
  },
  input: {
    backgroundColor: 'white',
    padding: 10,
    paddingTop: 0,
    borderRadius: 8,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey'
  },
  formRow:{
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal:8,
    paddingVertical: 15
  },
  formRowLabel: {
    flexDirection: 'row',
    flexGrow: 1,
    fontSize: 14,
  },
  timeButtons:{
    fontSize: 18, 
    color: '#0066CC',
    borderWidth: 1,
    borderRadius: 8,
    padding: 5,
    borderColor: '#0066CC'
  }
});

export default AddEventScreen;