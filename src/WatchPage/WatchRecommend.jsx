import SideCard from "./SideCard"
import { Link } from "react-router-dom";
function WatchRecommend()
{
    return <div>
            <div className="ml-2 mt-2 md:mt-0"> <button className="rounded-md pb-1 pt-1 bg-black text-white pl-4 pr-4 mr-2">All</button>
                <button className="rounded-md pb-1 pt-1 hover:bg-stone-300 bg-stone-200 pl-4 pr-4 mr-2">Music</button>
                <button className="rounded-md pb-1 pt-1 hover:bg-stone-300 bg-stone-200 pl-4 pr-4 mr-2">Podcasts</button></div>
            <SideCard image="https://cdn.pixabay.com/photo/2017/10/10/07/48/hills-2836301_960_720.jpg" views="900K views" channel="Arhat sings" title="Count on me Cover song" time="2 months ago"/>
            <SideCard image="https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_960_720.jpg" views="2M views" channel="Arhat sings" title="All of me ~ John Legend" time="1 month ago"/>
            <SideCard image="https://cdn.pixabay.com/photo/2016/09/18/20/47/football-1678992_960_720.jpg" views="22M views" channel="Baller" title="Top Football skills to learn" time="2 years ago"/>
            <SideCard image="https://cdn.pixabay.com/photo/2012/10/26/03/36/jazz-63212_960_720.jpg" views="21M views" channel="Jazzz" title="Jazz Classics" time="2 years ago"/>
            <SideCard image="https://cdn.pixabay.com/photo/2016/11/06/05/36/lake-1802337_960_720.jpg" views="42M views" channel="Nature Love" title="Epic Sunrise" time="3 years ago"/>
            <SideCard image="https://cdn.pixabay.com/photo/2017/10/10/07/48/hills-2836301_960_720.jpg" views="900K views" channel="Arhat sings" title="Count on me Cover song" time="2 months ago"/>
            <SideCard image="https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_960_720.jpg" views="2M views" channel="Arhat sings" title="All of me ~ John Legend" time="1 month ago"/>
            <SideCard image="https://cdn.pixabay.com/photo/2016/09/18/20/47/football-1678992_960_720.jpg" views="22M views" channel="Baller" title="Top Football skills to learn" time="2 years ago"/>
            <SideCard image="https://cdn.pixabay.com/photo/2012/10/26/03/36/jazz-63212_960_720.jpg" views="21M views" channel="Jazzz" title="Jazz Classics" time="2 years ago"/>
            <SideCard image="https://cdn.pixabay.com/photo/2016/11/06/05/36/lake-1802337_960_720.jpg" views="42M views" channel="Nature Love" title="Epic Sunrise" time="3 years ago"/>
            <SideCard image="https://cdn.pixabay.com/photo/2017/10/10/07/48/hills-2836301_960_720.jpg" views="900K views" channel="Arhat sings" title="Count on me Cover song" time="2 months ago"/>
            <SideCard image="https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_960_720.jpg" views="2M views" channel="Arhat sings" title="All of me ~ John Legend" time="1 month ago"/>
            <SideCard image="https://cdn.pixabay.com/photo/2016/09/18/20/47/football-1678992_960_720.jpg" views="22M views" channel="Baller" title="Top Football skills to learn" time="2 years ago"/>
            <SideCard image="https://cdn.pixabay.com/photo/2012/10/26/03/36/jazz-63212_960_720.jpg" views="21M views" channel="Jazzz" title="Jazz Classics" time="2 years ago"/>
            <SideCard image="https://cdn.pixabay.com/photo/2016/11/06/05/36/lake-1802337_960_720.jpg" views="42M views" channel="Nature Love" title="Epic Sunrise" time="3 years ago"/>
            
    </div>
}
export default WatchRecommend