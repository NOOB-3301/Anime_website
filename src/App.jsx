
import { useState } from 'react'
import './App.css'
import AnimeBtn from './components/AnimeBtn'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import AnimeHome from './components/AnimeHome'
import LightNHome from './components/LightNHome'
import AnimeDescPage from './components/pageComponents/AnimeDescPage'
import RecentAnimePlayer from './components/pageComponents/RecentAnimePlayer'
import AnimePlayer from './components/pageComponents/AnimePlayer'
import MangaHome from './components/manga_comps/MangaHome'


function App() {

  const [anime, setAnime] = useState('')
  const routers = createBrowserRouter([
    {
      path:"/",
      element:<Home/>
    },
    {
      path:"/anime",
      element:<AnimeHome/>
    },
    {
      path:"/ln",
      element:<LightNHome/>
    },
    {
      path:"/manga",
      element:<MangaHome/>
    },
    {
      path:"/anime/:title",
      element: <AnimeDescPage/>
    },
    {
      path:"anime/recent/watch/:id/:title",
      element: <RecentAnimePlayer/>
    },
    {
      path:"anime/watch/:title",
      element: <AnimePlayer/>
    }

  ])

  return (
    <>
        <RouterProvider router={routers}/>
    </>
  )
}

export default App
