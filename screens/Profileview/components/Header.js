import React, { useReducer } from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { LinearGradient, colors } from 'expo-linear-gradient';
import {Ionicons, Entypo} from '@expo/vector-icons';
import { gs } from "../../../styles";

export default class Header extends React.Component {
  render() {
    const user = this.props.user
    const name = "${user.name.first} ${user.name.last}"
    return (
    <LinearGradient colors={["#ffcc00", "#ff9100"]} start={[0, 0]} end={[1,1]}>
      <View style={{marginHorizontal: 32, paddingVertical: 64, flexDirection: 'row' }}>
        <View style={styles.rowBetween}>
        <Ionicons name="md-arrow-back" color={"white"} size={32} />
        </View>
      
        <View style={styles.imageContainer}>
            <View>
                <View style={styles.check}>
                    <Ionicons name="md-checkmark" size={20} color={"#fea405"} />
                </View>

                <Image 
                  source={{uri: user.picture.large }}
                  style={{width: 110, height: 110, borderRadius: 25}} 
                />
            </View>
        </View>
        
          <View style={{marginLeft: -170, marginBottom: 7, marginVertical: 180}}>
                <Text styles={gs.title}>{name}</Text>
          </View>
          </View>
    </LinearGradient>

    );
  }
}

const styles = StyleSheet.create({
  imageContainer: { 
    marginLeft: 100,
    marginTop: 40,
    shadowColor: "#28334f",
    shadowOffset: { height: 3, width: 1 }, 
    shadowOpacity: 0.5,
  },
  check: { 
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: 100, 
    width: 32, 
    height: 32, 
    shadowColor: "black",
    shadowOffset: {height: 3, width: 1},
    shadowOpacity: 0.3,
    position: 'absolute',
    zIndex: 1,
    right: -16,
    bottom: 16,
  },
});

/* for three dots : <Entypo name="dots-three-vertical" color={"white"} size={32} /> */