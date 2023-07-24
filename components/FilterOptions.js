import { View, Text, ScrollView } from "react-native";
import React from "react";
import { Chip, useTheme } from "react-native-paper";

const FilterOptions = () => {
  const theme = useTheme();
  return (
    <ScrollView horizontal={true}>
      <View
        style={{
          flexDirection: "row",
          gap: 20,
          justifyContent: "space-between",
          paddingVertical: 20,
        }}
      >
        <Chip
          selected={true}
          selectedColor={theme.colors.accent}
          style={{ backgroundColor: "white", borderRadius: 20 }}
        >
          Songs
        </Chip>
        <Chip style={{ backgroundColor: "white", borderRadius: 20 }}>
          Artists
        </Chip>
        <Chip style={{ backgroundColor: "white", borderRadius: 20 }}>
          Albums
        </Chip>
        <Chip style={{ backgroundColor: "white", borderRadius: 20 }}>
          Mixes
        </Chip>
        <Chip style={{ backgroundColor: "white", borderRadius: 20 }}>
          Podcast
        </Chip>
        <Chip style={{ backgroundColor: "white", borderRadius: 20 }}>
          Trending Snaps
        </Chip>
      </View>
    </ScrollView>
  );
};

export default FilterOptions;
