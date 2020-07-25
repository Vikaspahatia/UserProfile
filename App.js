import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { colors } from "./styles";
import ProfileView from "./screens/Profileview";

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <ProfileView />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#28334f",
  },
});
