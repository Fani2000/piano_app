import { Platform, StyleSheet, View, StatusBar } from "react-native";
import { NavigationContainer, ThemeProvider } from "@react-navigation/native";
import React from "react";
import { routes as Routes } from "./router/index";
import { theme } from "./theme/theme";
import { Provider as PaperProvider } from "react-native-paper";
import { BottomNavigation } from "./router/bottomNavigation";

const App = (props) => {
  const isAndroid = Platform.OS === "android";

  return (
    <PaperProvider theme={theme}>
      {isAndroid && (
        <View style={{ marginTop: StatusBar.currentHeight }}></View>
      )}
      <NavigationContainer>
        <BottomNavigation />
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  marginTop: {
    marginTop: 50,
  },
});
