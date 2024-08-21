import React from 'react';
import axios from 'axios';

const url = "/image/jujutsu-kaisen";

function Mangadex() {

  async function fetchImage() {
    try {
      const response = await axios.get(url, { responseType: 'blob' });
      const imageObjectURL = URL.createObjectURL(response.data);
      document.getElementById('manga-image').src = imageObjectURL;
    } catch (error) {
      console.error('Error fetching the image', error);
    }
  }

  return (
    <div>
      <h1>This is MangaDex</h1>
      <img id="manga-image" alt="Manga Cover" />
      <button onClick={fetchImage}>Fetch Jujutsu Kaisen Image</button>
    </div>
  );
}

export default Mangadex;
