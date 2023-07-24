import { View, Text } from "react-native";
import React from "react";
import { MaterialIcons as MatIcon } from "@expo/vector-icons";
// import { IconButton,  } from "react-native-paper";

const Header = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        paddingTop: 40,
        paddingBottom: 10,
        elevation: 4,
      }}
    >
      <View>
        <Text style={{ color: "white", fontSize: 24, fontWeight: "bold" }}>
          Welcome To Piano
        </Text>
      </View>
      <MatIcon name="notifications" color="white" size={30} />
    </View>
  );
};

export default Header;
