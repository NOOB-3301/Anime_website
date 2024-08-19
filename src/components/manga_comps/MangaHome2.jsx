import React from 'react';
import axios from 'axios';

function MangaHome2() {
  const title = 'Demon Slayer';

  async function fetch_manga() {
    try {
      const response = await axios({
        method: 'GET',
        url: '/api/manga',
        params: {
          title: title,
        },
      });
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching manga:', error);
    }
  }

  return (
    <div>
      this is 2
      <button onClick={fetch_manga}>Click me</button>
      <img
        src="/manga-cover/covers/7e19c079-3a9d-4f61-88e7-b9c72eb69705/7c928a0c-4ff9-464e-b16f-95c470951914.jpg"
        alt="lwra img"
      />
    </div>
  );
}

export default MangaHome2;
