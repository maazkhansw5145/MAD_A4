import React, { useEffect, useState } from "react";
import { View,Button, Text, FlatList, StyleSheet } from "react-native";
import axios from "axios";
import Location from "../components/Location";
export default function cityDetails(props) {
  console.log(props);
  const id = props.route.params.id;
  console.log(id);
  const [city, setCity] = useState(null);
  useEffect(() => {
    axios
      .get(`http://localhost:3000/cities/${id}/`)
      .then((data) => setCity(data.data));
  }, []);
  console.log(city);
  if (!city) {
    return <Text>Loading</Text>;
  }
  return (
    <View>
      <View style={styles.title}>
        <Text style={styles.city}>{city.city}</Text>
        <Text style={styles.country}>{city.country}</Text>
      </View>
      <FlatList
        data={city.locations}
        renderItem={(location) => <Location location={location} />}
      />
      <View style={styles.addLocation}>
        <Button
          title="Add Location"
          onPress={() => props.navigation.navigate("AddLocation",{id: city.id})}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    margin: 15,
    backgroundColor: "thistle",
    borderRadius: 20,
  },
  city: {
    fontWeight: "bold",
    fontSize: 22,
    margin: 5,
  },
  country: {
    margin: 5,
  },
  addLocation: {
    alignItems: "center",
    marginVertical: 10,
  },
});
