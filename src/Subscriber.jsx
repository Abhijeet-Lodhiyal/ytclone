import {MdOutlineKeyboardArrowDown} from 'react-icons/md'
import {TbBellRinging} from 'react-icons/tb'
import { useState } from "react"

function Subscriber(props) {
    var [sub,setSub] = useState(0);
    return <>
    { sub === 0 ? 
    <button className={`ml-2 font-semibold bg-[#f0f0f0] p-2 rounded-3xl flex flex-row items-center gap-2 shrink-0 ${props.hideit === "hide" ?  '' :'hidden md:flex' }`} onClick={(e) => {setSub(1)}} > <TbBellRinging size={20}/>Subscribed <MdOutlineKeyboardArrowDown/></button> : <button onClick={(e) => {setSub(0)}} className='rounded-3xl p-2 bg-black text-white ml-4 shrink-0'>Subscribe</button>
        }
    
    </>
    
}
export default Subscriber