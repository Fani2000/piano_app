import axios from "axios";

export class Dezzer {
  constructor() {
    this.headers = {
      "X-RapidAPI-Key": "83e85eeea3mshca1d7b11b203688p1c9b97jsn905a0f2a1078",
      "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
    };
    this.baseUrl = "https://deezerdevs-deezer.p.rapidapi.com";
  }

  async getArtist(artist) {
    const options = {
      method: "GET",
      url: `${this.baseUrl}/search`,
      params: { q: artist },
      headers: this.headers,
    };

    try {
      const response = await axios.request(options);
      const response_data = response.data.data;

      const results = [];

      response_data.forEach((data) => {
        results.push(data.album);
        results.push(data.artist);
      });

      return results;
    } catch (error) {
      console.log("ERROR: 💣💣💣💣", error);
      return [];
    }
  }
}
