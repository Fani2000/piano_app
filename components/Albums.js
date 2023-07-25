import { Image, View, Text, StyleSheet, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { Dezzer } from "../services/Dezzer";
import { Card } from "react-native-paper";
import { useTruncate } from "../hooks/useTruncate";

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
                  <Card style={styles.card} key={i}>
                    <Card.Cover
                      style={styles.image}
                      source={{ uri: album.cover_big }}
                      resizeMethod="resize"
                      resizeMode="cover"
                    />
                    <Card.Content>
                      <Text style={{ color: "white" }}>
                        {useTruncate(album.title)}
                      </Text>
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
    height: "30%",
  },
  image: {
    height: 100,
  },
  card: {
    width: 140,
    maxWidth: 140,
    height: 140,
  },
});
