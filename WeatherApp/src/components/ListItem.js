import React from "react";

import { View, Text, StyleSheet } from "react-native";

import { Feather } from "@expo/vector-icons";
const ListItem = (props) => {
  const { dt_txt, min, max, condition } = props;
  const { item, date, temp } = styles;
  return (
    <View style={item}>
      <Feather name="sun" size={24} color="#f8c630" />
      <Text style={date}>{dt_txt}</Text>
      <Text style={temp}>{min}</Text>
      <Text style={temp}>{max}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderWidth: 5,
    backgroundColor: "#724e91",
    borderColor: "#22162b",
  },
  temp: {
    color: "#f8c630",
    fontSize: 20,
  },
  date: {
    color: "#f8c630",
    fontSize: 15,
  },
});

export default ListItem;
