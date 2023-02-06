import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client'
import App from './OpeningPage/App'
import './index.css'
import Header from './Header'
import Sidebar from './Sidebar/Sidebar';
import SearchPage from './SearchedPage/SearchPage';
import VideoWatchPage from './WatchPage/VideoWatchPage';
import Search from './Search';
import ShowShort from './Shorts/ShowShort';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/search/:searchValue",
    element: <>
      <Header />
      <div className='flex'>
        <Sidebar />
        <SearchPage /> 
      </div>
    </>
  },
  {
    path: "/search/",
    element: <>
      <Search />
    </>
  },
  {
    path:"/watch",
    element:<>
      <Header />
      <VideoWatchPage />
    </>
  },
  {
    path:"/shorts",
    element:<>
      <Header />
      <div className='flex relative'>
        <Sidebar />
        <ShowShort />
      </div>
     
    </>
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
    </RouterProvider>
  </React.StrictMode>,
)
