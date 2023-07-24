import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/Home.screen";
import ArtistScreen from "../screens/Artist.screen";
import MixesScreen from "../screens/Mixes.screen";

const Stack = createNativeStackNavigator();

export const routes = () => (
  <Stack.Navigator
    initialRouteName="Home"
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Artists" component={ArtistScreen} />
    <Stack.Screen name="Mixes" component={MixesScreen} />
  </Stack.Navigator>
);
