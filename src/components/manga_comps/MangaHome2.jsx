import React from 'react'
import axios from 'axios';

function MangaHome2() {

  const title = 'Demon Slayer';
  
  const baseUrl = 'https://api.mangadex.org';

  async function fetch_manga(url,title) {
    cover_id= '82ef38e4-2cad-47a6-81fa-6425cbf43990'
    const resp = await axios({
      method: 'GET',
      url: `${baseUrl}/manga`,
      params: {
        title: title
      }
    })
    console.log(resp)
  }

  return (
    <div>
      this is 2
      <button onClick={()=>fetch_manga(baseUrl,title)}>Click me</button>
      <img src="https://uploads.mangadex.org/covers/7e19c079-3a9d-4f61-88e7-b9c72eb69705/7c928a0c-4ff9-464e-b16f-95c470951914.jpg" alt="lwra img" />
    </div>
  )
}

export default MangaHome2
