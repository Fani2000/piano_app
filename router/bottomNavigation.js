import HomeScreen from "../screens/Home.screen";
import ArtistScreen from "../screens/Artist.screen";
import MixesScreen from "../screens/Mixes.screen";
import ClubScreen from "../screens/Club.screen";

import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import MatIcon from "@expo/vector-icons/MaterialIcons";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

const ChooseTabIcon = (name, color) => {
  switch (name) {
    case "Home":
      return <MatIcon name="home" size={24} color={color} />;
    case "Artists":
      return <Icon name="music" size={24} color={color} />;
    case "Mixes":
      return <Icon name="adjust" size={24} color={color} />;
    case "Club":
      return <MatIcon name="people" size={24} color={color} />;
    default:
      return <MatIcon name="home" size={24} color={color} />;
  }
};

export const BottomNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: "#4caf50",
        headerShown: false,
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => ChooseTabIcon("Home", color),
        }}
      />
      <Tab.Screen
        name="Artists"
        component={ArtistScreen}
        options={{
          tabBarIcon: ({ color, size }) => ChooseTabIcon("Artists", color),
        }}
      />
      <Tab.Screen
        name="Mixes"
        component={MixesScreen}
        options={{
          tabBarIcon: ({ color, size }) => ChooseTabIcon("Mixes", color),
        }}
      />

      <Tab.Screen
        name="Club"
        component={ClubScreen}
        options={{
          tabBarIcon: ({ color, size }) => ChooseTabIcon("Club", color),
        }}
      />
    </Tab.Navigator>
  );
};
