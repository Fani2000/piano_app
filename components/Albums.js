import { Image, View, Text, StyleSheet, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { Dezzer } from "../services/Dezzer";
import { Card } from "react-native-paper";

const Albums = () => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    (async () => {
      const dezzer = new Dezzer();
      const data = await dezzer.getArtist("Pabi cooper");
      setAlbums(data);
    })();
  }, []);

  return (
    <>
      <Text
        style={{
          color: "white",
          paddingRight: 10,
          paddingLeft: 25,
          paddingVertical: 10,
          paddingBottom: 20,
          fontSize: 16,
          fontWeight: "bold",
        }}
      >
        Trending Songs
      </Text>
      <ScrollView style={styles.scrollbar} horizontal={true}>
        <View style={styles.container}>
          {albums.length == 0 && <Text>Loading...</Text>}
          {albums.length > 0 &&
            albums.map(
              (album, i) =>
                album.cover_big && (
                  <Card key={i}>
                    <Card.Cover
                      source={{ uri: album.cover_big }}
                      style={styles.card}
                      resizeMethod="resize"
                      resizeMode="cover"
                    />
                    <Card.Content>
                      <Text style={{ color: "white" }}>{album.title}</Text>
                    </Card.Content>
                  </Card>
                )
            )}
        </View>
      </ScrollView>
    </>
  );
};

export default Albums;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 20,
    overflow: "scroll",
    paddingLeft: 25,
  },
  scrollbar: {
    height: "40%",
  },
  card: {
    width: 180,
    height: 180,
  },
});
