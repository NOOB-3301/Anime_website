import React, { useEffect } from 'react'
import { useState } from 'react';
import axios from 'axios';


const imageUrl = "http://fmcdn.mangahere.com/store/manga/29763/cover.jpg?token=49d859d1a7e0fb608afbe397b89d8c9b714315dc&ttl=1724151600&v=1723854424";
const referer = "http://www.mangahere.cc";
const manga_url = 'https://animeapi-xi.vercel.app/manga/mangahere/'

// const manga_img_url = "https://animeapi-xi.vercel.app/manga/mangadex/"

function MangaHome() {

  const [manga_val, setManga_val] = useState('')
  const [manga_res_arr, setManga_res_arr] = useState([])
  const[searched,setSearched] = useState(false)
  const [img_url, setImgUrl] = useState('')

  async function fetch_manga (url,query) {
    let full_url = `${url}${query}`
    const res = await axios.get(full_url)
    console.log(res.data.results)
    setManga_res_arr(res.data.results)
    
  }

  const fetchImageWithReferer = async (url, referer) => {
    try {
      const response = await axios.get(url, {
        headers: {
          'Referer': referer
        },
        responseType: 'blob' // Important for handling image data
      });      
      const imageObjectURL = URL.createObjectURL(response.data);
      return imageObjectURL;
    } catch (error) {
      console.error('There was a problem with the axios operation:', error);
      throw error; // Optionally rethrow the error if needed
    }
  };


  useEffect(() => {
    fetchImageWithReferer(imageUrl, referer)
    .then(imageObjectURL => {
      console.log('Image URL:', imageObjectURL);
      // Use imageObjectURL for an <img> element, etc.
    })
    .catch(error => {
      console.error('Error fetching image:', error);
    })
  }, [])
  

  // async function fetch_img(url,query,index) {
  //   let full_img_url = `${url}${query}`
  //   const res = await axios.get(full_img_url)
  //   setImgUrl(res.data.results[index])
  // }

  const handleSubmit =(e)=>{
    e.preventDefault();
    setSearched(true)
    alert(`entered values: ${manga_val}`)
    fetch_manga(manga_url,manga_val)
    
  }

  return (
    <>
            <div className="relative w-full bg-white">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
                    <form onSubmit={handleSubmit} className="flex grow justify-center w-full">
                        <input
                            className="flex h-10 w-full max-w-lg rounded-md bg-gray-100 px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                            type="text"
                            placeholder="Search"
                            value={manga_val}
                            onChange={(e) => setManga_val(e.target.value)}
                        />
                        <button type="submit" className="hidden">Submit</button>
                    </form>
                </div>
            </div>

      <div>
        {
          searched ? (
            manga_res_arr.length > 0 ? (
              manga_res_arr.map((manga,index)=>(
                <div key={index}>
                  {/* <img src={manga.image}  /> */}
                  {manga.title}
                  
                  
                </div>
              ))
            ):(
              <div>
                check spelling....
              </div>
            )
          ):(
            <div>
              Search your faviourite manag and beging reading :)
            </div>
          )
        }
      </div>
    </>
  )
}

export default MangaHome
  