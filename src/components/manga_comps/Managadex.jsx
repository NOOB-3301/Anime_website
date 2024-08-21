import React from 'react';
import axios from 'axios';

const url = "/image/jujutsu-kaisen";

function Mangadex() {

  async function fetchImage() {
    try {
      const response = await axios.get(url, { responseType: 'blob' });
      const imageObjectURL = URL.createObjectURL(response.data);
      document.getElementById('manga-image').src = imageObjectURL;
      console.log("fetching")
    } catch (error) {
      console.error('Error fetching the image', error);
    }
  }

  return (
    <div>
      <h1>This is MangaDex</h1>
      <img id="manga-image" alt="Manga Cover" />
      <button onClick={fetchImage}>Fetch Jujutsu Kaisen Image</button>
      <img src="https://uploads.mangadex.org/covers/8f3e1818-a015-491d-bd81-3addc4d7d56a/26dd2770-d383-42e9-a42b-32765a4d99c8.png" alt="image" />
    </div>
  );
}

export default Mangadex;
