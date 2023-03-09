import {MdHomeFilled,MdSubscriptions,MdVideoLibrary,MdOutlineKeyboardArrowDown} from 'react-icons/md'
import {RiHistoryFill} from 'react-icons/ri'
import {TiMediaPlayOutline} from 'react-icons/ti'
import {AiOutlineClockCircle,AiFillLike} from 'react-icons/ai'
import {BsFillPlayBtnFill} from 'react-icons/bs'
import SidebarRow from './SidebarRow'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

function Sidebar()
{
    const location = useLocation();
    return <>
        <div className="p-2 sm:block hidden shrink-0 basis-1/6 overflow-auto sticky top-20 h-[90%]">
            <Link to="/"><SidebarRow selected={location.pathname === '/'} title="Home" Icon={MdHomeFilled}/></Link>
            <Link to='/shorts'><SidebarRow title="Shorts" selected={location.pathname === '/shorts'} Icon={TiMediaPlayOutline}/></Link>
            <SidebarRow title="Subscriptions" Icon={MdSubscriptions}/>
            <hr className='lg:w-[60%] m-2 ml-0'/>
            <SidebarRow title="Library" Icon={MdVideoLibrary}/>
            <SidebarRow title="Your Videos" Icon={BsFillPlayBtnFill}/>
            <SidebarRow title="History" Icon={RiHistoryFill}/>
            <SidebarRow title="Watch Later" Icon={AiOutlineClockCircle}/>
            <SidebarRow title="Liked Videos" Icon={AiFillLike}/>
            <SidebarRow title="Show More" Icon={MdOutlineKeyboardArrowDown}/>
            <hr className='lg:w-[60%] m-2 ml-0'/>
        </div>
    </>
}
export default Sidebar