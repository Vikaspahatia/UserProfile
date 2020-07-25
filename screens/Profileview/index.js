import React from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ActivityIndicator,
} from "react-native";
import Header from "./components/Header";
import Stats from "./components/Stats";
import { gs, colors } from "../../styles";

export default class index extends React.Component {
  state = {
    user: {},
    isLoading: true,
  };

  async componentDidMount() {
    try {
      let res = await fetch(
        "https://randomuser.me/api/?inc=name,picture,location&noinfo"
      );
      let users = await res.json();

      this.setState({ user: users.results[0] }, () => {
        this.setState({ isLoading: false });
      });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={[gs.center, styles.container]}>
          <StatusBar barStyle="light-content" />

          <ActivityIndicator size="large" />
        </View>
      );
    }
    return (
      <View style={{ backgroundColor: "#28334f" }}>
        <Header user={this.state.user} />
        <Stats />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#28334f",
  },
});
