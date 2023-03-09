import { useState } from 'react'
import logo from './assets/YouTubeLogo.svg'
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdOutlineNotificationsNone, } from 'react-icons/md'
import { BiDotsVerticalRounded, BiSearch } from 'react-icons/bi'
import alo from './assets/alo.jpg'
import { MdHomeFilled, MdSubscriptions, MdVideoLibrary, MdOutlineKeyboardArrowDown } from 'react-icons/md'
import { RiHistoryFill } from 'react-icons/ri'
import { TiMediaPlayOutline } from 'react-icons/ti'
import { AiOutlineClockCircle, AiFillLike } from 'react-icons/ai'
import { BsFillPlayBtnFill, BsCameraReels, BsFillMicFill } from 'react-icons/bs'
import { RxCross1 } from 'react-icons/rx'
import OffCanvas from './OffCanvas'

function Header() {
    const [inputVal, setinputVal] = useState("");
    const [sideBar, setSideBar] = useState(0);
    function handleSubmit(e) {
            window.location.href = '/search/'+inputVal
    }
    return (<>
        <div className='flex flex-row items-center justify-between pt-4 pb-4 sticky top-0 z-10 bg-white'>
            <div className='flex flex-row items-center space-x-4'>
                <button onClick={(e) => {setSideBar(1)}}><GiHamburgerMenu size={20} /></button>
                <Link to="/">
                    <img src={logo} className='w-24' />
                </Link>
            
                <div className={`p-2 absolute w-56 h-screen top-3 -left-4 bg-white opacity-100 ${sideBar === 0 ? 'hidden' : ''}`}>
                            <div className='flex flex-row items-center align-middle gap-4'>
                            <button onClick={(e) => { setSideBar(0)}}><GiHamburgerMenu size={20} className='mt-1'/></button>
                            <Link to="/">
                                <img src={logo} className='w-24 inline-block'  />
                            </Link>
                            </div>
                    <Link to="/"><OffCanvas selected title="Home" Icon={MdHomeFilled} /></Link>
                    <Link to='/shorts'><OffCanvas title="Shorts" Icon={TiMediaPlayOutline} /></Link>
                    <OffCanvas title="Subscriptions" Icon={MdSubscriptions} />
                    <hr className='lg:w-[60%] m-2 ml-0' />
                    <OffCanvas title="Library" Icon={MdVideoLibrary} />
                    <OffCanvas title="Your Videos" Icon={BsFillPlayBtnFill} />
                    <OffCanvas title="History" Icon={RiHistoryFill} />
                    <OffCanvas title="Watch Later" Icon={AiOutlineClockCircle} />
                    <OffCanvas title="Liked Videos" Icon={AiFillLike} />
                    <OffCanvas title="Show More" Icon={MdOutlineKeyboardArrowDown} />
                    <hr className='lg:w-[60%] m-2 ml-0' />
                </div>
     
            </div>
            <div className='flex flex-row items-center space-x-4 w-[40%] justify-center'>
                <form className='flex flex-row sm:border-gray-300 sm:border-2 p-2 rounded-3xl items-center w-[80%]' onSubmit={handleSubmit}>
                    <input type="search" value={inputVal} onChange={(e) => { setinputVal(e.target.value) }} placeholder="Search" className='sm:visible invisible focus:outline-none ml-4 w-[90%]'></input>
                    {
                        (inputVal) !== '' ? <Link to={`/search/ ${inputVal}`} className='flex items-center justify-center'>
                            <button className=''><BiSearch size={20} /></button>
                        </Link> : <Link to="/search/"><button><BiSearch size={20} /></button>  </Link>
                    }
                </form>
                <button><BsFillMicFill size={20} /></button>
            </div>
            <div className='flex flex-row items-center space-x-4'>
                <button><BiDotsVerticalRounded size={25} className="md:hidden block" /></button>
                <button><BsCameraReels size={20} className="md:block hidden" /></button>
                <button><MdOutlineNotificationsNone size={25} className="md:block hidden" /></button>
                <button><img src={alo} className='rounded-full'></img></button>
            </div>
            

        </div>

    </>);
}
export default Header;