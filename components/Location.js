import { View,  StyleSheet,Text, TouchableHighlight } from "react-native";
import React from "react";

export default function Location(props) {
  return (
    <View>

        <View style={{marginLeft: 10}}>
          <View style={styles.name}>{props.location.item.name}</View>
          <View style={styles.description}>{props.location.item.description}</View>
        </View>
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
name: {
    fontWeight: "bold",
    fontSize: 22,
    margin: 5
},
description: {
    margin: 5
}
});
  
