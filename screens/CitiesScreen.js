import {
  View,
  Text,
  Button,
  FlatList,
  TouchableHighlight,
  StyleSheet,
} from "react-native";
import React, { useState, useEffect } from "react";
import City from "../components/City";
import axios from "axios";

export default function Cities(props) {
  const [cities, setCities] = useState();
  const updateCity = () => {};

  const deleteCity = () => {};
  useEffect(() => {
    axios
      .get("http://localhost:3000/cities")
      .then((data) => setCities(data.data));
  }, []);

  return (
    <View>
      <View style={{ marginTop: 10 }}>
        <FlatList
          data={cities}
          keyExtractor={(city) => city.id}
          renderItem={(city) => (
            <City
              city={city}
              updateCity={updateCity}
              deleteCity={deleteCity}
              {...props}
            />
          )}
        />
      </View>
      <View style={styles.addCity}>
        <Button
          title="Add City"
          onPress={() => props.navigation.navigate("AddCity")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  addCity: {
    alignItems: "center",
    marginVertical: 10,
  },
});
