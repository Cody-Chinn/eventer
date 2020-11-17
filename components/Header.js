import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default function Header(){
  return(
    <Text style={styles.header}>Eventer</Text>
  )
}

const styles = StyleSheet.create({
  header: {
    padding: 15,
    alignSelf: "stretch",
    textAlign: "center",
    backgroundColor: "#B19CD9",
    color: "white",
  },
})