import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

export default function Input(props) {
  return (
    <View style={styles.wrapper}>
      <TextInput
        {...props}
      />
      {props.errorText && (
        <Text style={styles.errorText}>{props.errorText}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({

})