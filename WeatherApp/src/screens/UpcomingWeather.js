import React from "react";
import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  FlatList,
  View,
  Text,
  ImageBackground,
} from "react-native";
import ListItem from "../components/ListItem";

/* Text.defaultProps = {
  style: {
    color: "white",
  },
};*/

const DATA = [
  {
    dt_txt: "2023-02-18 12:00:00",
    main: { temp_max: 8.55, temp_min: 7.55 },
    weather: [{ main: "Clear" }],
  },
  {
    dt_txt: "2023-02-18 15:00:00",
    main: { temp_max: 8.55, temp_min: 7.55 },
    weather: [{ main: "Clouds" }],
  },
  {
    dt_txt: "2023-02-18 18:00:00",
    main: { temp_max: 8.55, temp_min: 7.55 },
    weather: [{ main: "Rain" }],
  },
];

const Empty = () => {
  return (
    <View>
      <Text>Empty</Text>
    </View>
  );
};

const UpcomingWeather = () => {
  const renderItem = ({ item }) => (
    <ListItem
      condition={item.weather[0].main}
      dt_txt={item.dt_txt}
      min={item.main.temp_min}
      max={item.main.temp_max}
    />
  );

  const { container, image } = styles;

  return (
    <SafeAreaView style={container}>
      <ImageBackground
        source={require("../../assets/upcoming-background.jpg")}
        style={image}
      >
        <Text>Upcoming Weather</Text>

        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.dt_text}
          ItemSeparatorComponent={() => (
            <View style={{ backgroundColor: "#22162b", height: 2 }} />
          )}
          ListEmptyComponent={<Empty />}
        ></FlatList>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "#451f55",
    color: "white",
  },

  image: {
    flex: 1,
  },
});
export default UpcomingWeather;
