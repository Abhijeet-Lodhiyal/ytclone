
import './App.css'
import Header from '../Header';
import RecommendedVideos from './RecommendedVideos';
import Sidebar from '../Sidebar/Sidebar';
function App() {
  return (
    <>
      <Header />
      <div className=' flex relative'>
        <Sidebar />
        <RecommendedVideos />
      </div>
    </>
  );
};
export default App