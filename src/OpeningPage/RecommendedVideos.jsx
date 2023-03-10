import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
function RecommendedVideos() {
    return <>
        <div className="overflow-hidden"> 
            <div className="w-full overflow-auto flex md:p-2 mb-2 md:ml-10">
                <button className="rounded-md pb-1 pt-1   bg-black text-white pl-4 pr-4 mr-2">All</button>
                <button className="rounded-md pb-1 pt-1 hover:bg-stone-300 bg-stone-200 pl-4 pr-4 mr-2">Music</button>
                <button className="rounded-md pb-1 pt-1 hover:bg-stone-300 bg-stone-200 pl-4 pr-4 mr-2">Podcasts</button>
                <button className="rounded-md pb-1 pt-1 hover:bg-stone-300 bg-stone-200 pl-4 pr-4 mr-2">Gaming</button>
                <button className="rounded-md pb-1 pt-1 hover:bg-stone-300 bg-stone-200 pl-4 pr-4 mr-2">Computer Science</button>
                <button className="rounded-md pb-1 pt-1 hover:bg-stone-300 bg-stone-200 pl-4 pr-4 mr-2">Physics</button>
                <button className="rounded-md pb-1 pt-1 hover:bg-stone-300 bg-stone-200 pl-4 pr-4 mr-2">Comedy</button>
                <button className="rounded-md pb-1 pt-1 hover:bg-stone-300 bg-stone-200 pl-4 pr-4 mr-2">Fashion</button>
                <button className="rounded-md pb-1 pt-1 hover:bg-stone-300 bg-stone-200 pl-4 pr-4 mr-2">Live</button>
                <button className="rounded-md pb-1 pt-1 hover:bg-stone-300 bg-stone-200 pl-4 pr-4 mr-2">Gadgets</button>
                <button className="rounded-md pb-1 pt-1 hover:bg-stone-300 bg-stone-200 pl-4 pr-4 mr-2">Calculus</button>
                <button className="rounded-md pb-1 pt-1 hover:bg-stone-300 bg-stone-200 pl-4 pr-4 mr-2">Pop Music</button>

            </div>
            <div className="flex flex-row flex-wrap justify-center">
                <Link to="/watch" className="flex flex-row flex-wrap justify-center">
                    <VideoCard image='https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_960_720.jpg' thumbnail="All of me ~ John Legend (cover song)" cicon="https://cdn.pixabay.com/photo/2017/11/12/08/43/audio-2941753_960_720.jpg" views="2M" time="1 month ago" channel="Arhat Sings" vid='video.mp4' />
              
                    <VideoCard image='https://cdn.pixabay.com/photo/2016/11/06/05/36/lake-1802337_960_720.jpg' thumbnail="Epic Sunrise" views="42M" time="3 years ago" cicon="https://cdn.pixabay.com/photo/2018/07/12/11/45/sunrise-3533173_960_720.jpg" channel="Nature Love" vid='/Sunrise.mp4' />
   
                    <VideoCard image='https://cdn.pixabay.com/photo/2012/10/26/03/36/jazz-63212_960_720.jpg' thumbnail="Jazz Classics" cicon="https://cdn.pixabay.com/photo/2012/10/26/03/36/jazz-63212_960_720.jpg" views="101K" time="2 years ago" channel="Jazzz" vid='Jazz.mp4' />
        
                    <VideoCard image='https://cdn.pixabay.com/photo/2016/09/18/20/47/football-1678992_960_720.jpg' thumbnail="Top Football skills to learn" views="22M" time="3 years ago" cicon="https://cdn.pixabay.com/photo/2016/05/16/21/07/football-1396740_960_720.jpg" channel="Baller" vid='Football.mp4' />
           
                    <VideoCard image='https://cdn.pixabay.com/photo/2017/10/10/07/48/hills-2836301_960_720.jpg' thumbnail="Count on me Cover song" cicon="https://cdn.pixabay.com/photo/2017/11/12/08/43/audio-2941753_960_720.jpg" views="900K" time="1 year ago" channel="Arhat Sings" vid='video.mp4' />
                    <VideoCard image='https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_960_720.jpg' thumbnail="All of me ~ John Legend (cover song)" cicon="https://cdn.pixabay.com/photo/2017/11/12/08/43/audio-2941753_960_720.jpg" views="2M" time="1 month ago" channel="Arhat Sings" vid='video.mp4' />
              
                    <VideoCard image='https://cdn.pixabay.com/photo/2016/11/06/05/36/lake-1802337_960_720.jpg' thumbnail="Epic Sunrise" views="42M" time="3 years ago" cicon="https://cdn.pixabay.com/photo/2018/07/12/11/45/sunrise-3533173_960_720.jpg" channel="Nature Love" vid='/Sunrise.mp4' />
   
                    <VideoCard image='https://cdn.pixabay.com/photo/2012/10/26/03/36/jazz-63212_960_720.jpg' thumbnail="Jazz Classics" cicon="https://cdn.pixabay.com/photo/2012/10/26/03/36/jazz-63212_960_720.jpg" views="101K" time="2 years ago" channel="Jazzz" vid='Jazz.mp4' />
        
                    <VideoCard image='https://cdn.pixabay.com/photo/2016/09/18/20/47/football-1678992_960_720.jpg' thumbnail="Top Football skills to learn" views="22M" time="3 years ago" cicon="https://cdn.pixabay.com/photo/2016/05/16/21/07/football-1396740_960_720.jpg" channel="Baller" vid='Football.mp4' />
           
                    <VideoCard image='https://cdn.pixabay.com/photo/2017/10/10/07/48/hills-2836301_960_720.jpg' thumbnail="Count on me Cover song" cicon="https://cdn.pixabay.com/photo/2017/11/12/08/43/audio-2941753_960_720.jpg" views="900K" time="1 year ago" channel="Arhat Sings" vid='video.mp4' />
                    <VideoCard image='https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_960_720.jpg' thumbnail="All of me ~ John Legend (cover song)" cicon="https://cdn.pixabay.com/photo/2017/11/12/08/43/audio-2941753_960_720.jpg" views="2M" time="1 month ago" channel="Arhat Sings" vid='video.mp4' />
              
                    <VideoCard image='https://cdn.pixabay.com/photo/2016/11/06/05/36/lake-1802337_960_720.jpg' thumbnail="Epic Sunrise" views="42M" time="3 years ago" cicon="https://cdn.pixabay.com/photo/2018/07/12/11/45/sunrise-3533173_960_720.jpg" channel="Nature Love" vid='/Sunrise.mp4' />
   
                    <VideoCard image='https://cdn.pixabay.com/photo/2012/10/26/03/36/jazz-63212_960_720.jpg' thumbnail="Jazz Classics" cicon="https://cdn.pixabay.com/photo/2012/10/26/03/36/jazz-63212_960_720.jpg" views="101K" time="2 years ago" channel="Jazzz" vid='Jazz.mp4' />
        
                    <VideoCard image='https://cdn.pixabay.com/photo/2016/09/18/20/47/football-1678992_960_720.jpg' thumbnail="Top Football skills to learn" views="22M" time="3 years ago" cicon="https://cdn.pixabay.com/photo/2016/05/16/21/07/football-1396740_960_720.jpg" channel="Baller" vid='Football.mp4' />
           
                    <VideoCard image='https://cdn.pixabay.com/photo/2017/10/10/07/48/hills-2836301_960_720.jpg' thumbnail="Count on me Cover song" cicon="https://cdn.pixabay.com/photo/2017/11/12/08/43/audio-2941753_960_720.jpg" views="900K" time="1 year ago" channel="Arhat Sings" vid='video.mp4' />
                    <VideoCard image='https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_960_720.jpg' thumbnail="All of me ~ John Legend (cover song)" cicon="https://cdn.pixabay.com/photo/2017/11/12/08/43/audio-2941753_960_720.jpg" views="2M" time="1 month ago" channel="Arhat Sings" vid='video.mp4' />
              
                    <VideoCard image='https://cdn.pixabay.com/photo/2016/11/06/05/36/lake-1802337_960_720.jpg' thumbnail="Epic Sunrise" views="42M" time="3 years ago" cicon="https://cdn.pixabay.com/photo/2018/07/12/11/45/sunrise-3533173_960_720.jpg" channel="Nature Love" vid='/Sunrise.mp4' />
   
                    <VideoCard image='https://cdn.pixabay.com/photo/2012/10/26/03/36/jazz-63212_960_720.jpg' thumbnail="Jazz Classics" cicon="https://cdn.pixabay.com/photo/2012/10/26/03/36/jazz-63212_960_720.jpg" views="101K" time="2 years ago" channel="Jazzz" vid='Jazz.mp4' />
        
                    <VideoCard image='https://cdn.pixabay.com/photo/2016/09/18/20/47/football-1678992_960_720.jpg' thumbnail="Top Football skills to learn" views="22M" time="3 years ago" cicon="https://cdn.pixabay.com/photo/2016/05/16/21/07/football-1396740_960_720.jpg" channel="Baller" vid='Football.mp4' />
           
                    <VideoCard image='https://cdn.pixabay.com/photo/2017/10/10/07/48/hills-2836301_960_720.jpg' thumbnail="Count on me Cover song" cicon="https://cdn.pixabay.com/photo/2017/11/12/08/43/audio-2941753_960_720.jpg" views="900K" time="1 year ago" channel="Arhat Sings" vid='video.mp4' />
                </Link>




            </div>


        </div>
    </>
}
export default RecommendedVideos;