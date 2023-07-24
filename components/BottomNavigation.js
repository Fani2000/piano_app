import { View, StyleSheet } from "react-native";
import { IconButton } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import MatIcon from "@expo/vector-icons/MaterialIcons";
import { useTheme } from "react-native-paper";

const BottomNavigation = () => {
  const theme = useTheme();

  return (
    <View
      style={{
        ...styles.bottomNav,
        backgroundColor: theme.colors.primary,
      }}
    >
      <IconButton
        icon={() => <MatIcon name="home" size={24} style={styles.icon} />}
      />
      <IconButton
        icon={() => <Icon name="music" size={24} style={styles.icon} />}
      />
      <IconButton
        icon={() => <Icon name="adjust" size={24} style={styles.icon} />}
      />
      <IconButton
        icon={() => <MatIcon name="search" size={24} style={styles.icon} />}
      />
    </View>
  );
};

export default BottomNavigation;

const styles = StyleSheet.create({
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    elevation: 3,
    padding: 2,
  },
  icon: {
    color: "white",
  },
});
