import React from "react";
import { StyleSheet, SafeAreaView, ScrollView } from "react-native";
import { useTheme } from "react-native-paper";
import Albums from "../components/Albums";
import Header from "../components/Header";
import SubHeader from "../components/SubHeader";
import Mixes from "../components/Mixes";

export default function HomeScreen() {
  const theme = useTheme();

  return (
    <SafeAreaView
      style={{
        ...styles.container,
        backgroundColor: theme.colors.secondary,
      }}
    >
      <Header />
      <SubHeader />
      <ScrollView>
        <Albums />
        <Mixes />
      </ScrollView>
      {/* </ScrollView> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 40,
    height: "100%",
    columnGap: 20,
    flexDirection: "column",
  },
});
