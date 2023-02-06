import { Link } from "react-router-dom";
import SearchedVideos from "./SearchedVideos";

function ChannelRow()
{
    return <>
        <Link to='/watch'><SearchedVideos image='https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_960_720.jpg' time="1 month ago" channel="Arhat Sings" views="2M" descrip="Cover song" title="All of me ~ John Legend (cover song)" cimage="https://cdn.pixabay.com/photo/2017/11/12/08/43/audio-2941753_960_720.jpg"/></Link>  
        <Link to='/watch'><SearchedVideos image='https://cdn.pixabay.com/photo/2017/10/10/07/48/hills-2836301_960_720.jpg' time="2 months ago" channel="Arhat Sings" views="900K" descrip="Cover song" title="Count on me Cover song" cimage="https://cdn.pixabay.com/photo/2017/11/12/08/43/audio-2941753_960_720.jpg"/></Link> 
        <Link to='/watch'><SearchedVideos image='https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_960_720.jpg' time="1 month ago" channel="Arhat Sings" views="2M" descrip="Cover song" title="All of me ~ John Legend (cover song)" cimage="https://cdn.pixabay.com/photo/2017/11/12/08/43/audio-2941753_960_720.jpg"/></Link>  
        <Link to='/watch'><SearchedVideos image='https://cdn.pixabay.com/photo/2017/10/10/07/48/hills-2836301_960_720.jpg' time="2 months ago" channel="Arhat Sings" views="900K" descrip="Cover song" title="Count on me Cover song" cimage="https://cdn.pixabay.com/photo/2017/11/12/08/43/audio-2941753_960_720.jpg"/></Link> 
        <Link to='/watch'><SearchedVideos image='https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_960_720.jpg' time="1 month ago" channel="Arhat Sings" views="2M" descrip="Cover song" title="All of me ~ John Legend (cover song)" cimage="https://cdn.pixabay.com/photo/2017/11/12/08/43/audio-2941753_960_720.jpg"/></Link>  
        <Link to='/watch'><SearchedVideos image='https://cdn.pixabay.com/photo/2017/10/10/07/48/hills-2836301_960_720.jpg' time="2 months ago" channel="Arhat Sings" views="900K" descrip="Cover song" title="Count on me Cover song" cimage="https://cdn.pixabay.com/photo/2017/11/12/08/43/audio-2941753_960_720.jpg"/></Link> 
        
    </>
}
export default ChannelRow;