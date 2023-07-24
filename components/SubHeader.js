import React from "react";
import { Chip, useTheme } from "react-native-paper";
import { StyleSheet, Text, View, TextInput, ScrollView } from "react-native";
import Search from "./Search";
import FilterOptions from "./FilterOptions";

const SubHeader = () => {
  const theme = useTheme();
  return (
    <View style={{ paddingHorizontal: 20, paddingVertical: 10 }}>
      <Search />
      <FilterOptions />
    </View>
  );
};

export default SubHeader;
