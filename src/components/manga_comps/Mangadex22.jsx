import React from 'react'
import axios from 'axios'

const info_url = "https://express-img.vercel.app/aviv2/manga/info/"



function Mangadex22() {

  async function fetch_info(url,query) {
    let full = `${url}${query}`
    const resp = await axios.get(full)
    console.log(resp.data)
  }
  return (
    <div>
      this is manga dex
      <button onClick={()=>fetch_info(info_url,'naruto')} >clickkk</button>
    </div>
  )
}

export default Mangadex22
