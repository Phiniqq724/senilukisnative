//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

// create a component
const Home = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => alert("Button pressed")}
        style={styles.button}
      >
        <Text>Materi</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => alert("Button pressed")}
        style={styles.button}
      >
        <Text>Game</Text>
      </TouchableOpacity>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    backgroundColor: "#fff",
    backgroundImage: "",
  },
  button: {
    width: 100,
    height: 50,
    backgroundColor: "#3a3a3a",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    color: "black",
  },
});

//make this component available to the app
export default Home;
