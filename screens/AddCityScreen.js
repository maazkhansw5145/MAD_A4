import axios from "axios";
import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

export default function AddCity(props) {
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const addCity = () => {
    // Add Data from state to Data.json file
    axios
      .post("http://localhost:3000/cities", { city, country })
      .then(() => props.navigation.navigate("Cities"));
  };
  return (
    <View>
      <Text style={styles.title}>Add Your Favourite City</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Enter City Name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Enter Country Name"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
      />
      <View style={styles.addCity}>
        <Button disabled={country.length === 0 || city.length === 0} title="Submit" onPress={() => addCity()} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    border: "grey solid 2px",
    borderRadius: 10,
    paddingVertical: 5,
    paddingLeft: 20,
    marginTop: 30,
    marginHorizontal: "auto",
    textAlign: "center",
    width: 300,
  },
  addCity: {
    alignItems: "center",
    marginVertical: 30,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 30,
    color: "cornflowerblue",
  },
});
