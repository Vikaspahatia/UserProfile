import React from "react";
import { View, Text, StyleSheet } from "react-native";


export default function Stats() {

    return (
      <View style={styles.container, {color: "white"}}>
        <Text>Stats</Text>
      </View>
    );
}


const styles = StyleSheet.create({
  container: {
    color: "white",
  fontSize: 80,
  alignItems: "center",
  justifyContent: "center",
  },
});