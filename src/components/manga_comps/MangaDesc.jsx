import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react' 
import axios from 'axios'


const cover_url = "/aviv2/manga/cover/"

const img_url = '/avi2/manga/image/'
function MangaDesc() {

    let {manga_id} = useParams()
    const [fileName, setFileName] = useState('')


    async function fetch_cover(url,query) {
      let full = `${url}${query}`
      const resp = await axios.get(full)
      console.log(resp.data.data)
      setFileName(resp.data.data[0].attributes.fileName)
      console.log(resp.data.data[0].attributes.fileName)
    }

    async function fetch_cover_image(url,id,file) {
      let full = `${url}/${id}/${file}`
      const resp = await axios.get(full)
      console.log(resp)
    }


    useEffect(() => {
      fetch_cover(cover_url,manga_id)
      fetch_cover_image(img_url, manga_id, fileName)
    }, [])
    


  return (
    <div>
      thhis is manga desc {manga_id}
      and file name {fileName}
    </div>
  )
}

export default MangaDesc
