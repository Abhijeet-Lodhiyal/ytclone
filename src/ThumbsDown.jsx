import { useState } from "react";
import {FaThumbsDown , FaRegThumbsDown} from 'react-icons/fa'
function ThumbsDown()
{
    var [like,setLike] = useState(0);
    return <>
        {like === 1 ? <button onClick={(e) => {setLike(0)}}><FaThumbsDown className='inline' /></button>: <button onClick={(e) => {setLike(1)}} ><FaRegThumbsDown className='inline' /></button>}
    </>
}
export default ThumbsDown