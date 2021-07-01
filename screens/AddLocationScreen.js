import axios from "axios";
import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

export default function AddLocation(props) {
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const addLocation = () => {
    // Add Data from state to Data.json file
    axios
      .get(`http://localhost:3000/cities/${props.route.params.id}`)
      .then((city) => {
        console.log(city);
        axios
          .put(`http://localhost:3000/cities/${props.route.params.id}`, {
            ...city.data,
            locations: [...city.data.locations, { name: location, description }],
          })
          .then(() => {
            props.navigation.navigate("Cities");
          })
          .catch((e) => console.log(e));
      });
  };

  return (
    <View>
      <Text style={styles.title}>Add Your Favourite City</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Enter Location Name"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Describe Location"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <View style={styles.addLocation}>
        <Button
          disabled={location.length === 0 || description.length === 0}
          title="Submit"
          onPress={() => addLocation()}
        />
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
  addLocation: {
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
