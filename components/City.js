import { View,  StyleSheet,Text, TouchableHighlight } from "react-native";
import React from "react";

export default function City(props) {
  return (
    <View>
      <TouchableHighlight
        onPress={() => props.navigation.navigate(`CityDetails`, {id:props.city.item.id })}
      >
        <View style={{marginLeft: 10}}>
          <View style={styles.city}>{props.city.item.city}</View>
          <View style={styles.country}>{props.city.item.country}</View>
        </View>
      </TouchableHighlight>
      <View
        style={styles.line}
      />
    </View>
  );
}
const styles = StyleSheet.create({
    line:{
    borderBottomColor: "blue",
    borderBottomWidth: 1, 
} ,
city: {
    fontWeight: "bold",
    fontSize: 22,
    margin: 5
},
country: {
    margin: 5
}
});
  
