import React from 'react'
import { Route, Routes, HashRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client'
import App from './OpeningPage/App'
import './index.css'
import Header from './Header'
import Sidebar from './Sidebar/Sidebar';
import SearchPage from './SearchedPage/SearchPage';
import VideoWatchPage from './WatchPage/VideoWatchPage';
import Search from './Search';
import ShowShort from './Shorts/ShowShort';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
    <Routes >
      <Route path='/' element={<App />} />
      <Route path='/search/:searchValue' element={<>
        <Header />
        <div className='flex'>
          <Sidebar />
          <SearchPage />
        </div>
      </>} />
      <Route path='/search/' element={<Search />} />
      <Route path='/watch' element={<>
        <Header />
        <VideoWatchPage />
      </>} />
      <Route path='/shorts' element={<>
        <Header />
        <div className='flex relative'>
          <Sidebar />
          <ShowShort />
        </div>
      </>} />
      </Routes>
    </HashRouter>

  </React.StrictMode>,
)
