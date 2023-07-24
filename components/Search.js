import { View, Text, TextInput } from "react-native";
import React from "react";
import { useTheme } from "react-native-paper";

const Search = () => {
  const theme = useTheme();
  return (
    <View
      style={{
        backgroundColor: theme.colors.grey,
        borderRadius: 30,
        padding: 15,
        color: "white",
      }}
    >
      <TextInput placeholder={"Search amapiano music..."} />
    </View>
  );
};

export default Search;
