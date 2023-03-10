import { useState } from "react";
import {FaThumbsUp ,FaRegThumbsUp} from 'react-icons/fa'
function ThumbsUp()
{
    var [like,setLike] = useState(0);
    return <>
        {like === 0 ? <button onClick={(e) => {setLike(1)}}> <FaThumbsUp className='inline' /></button>: <button onClick={(e) => {setLike(0)}}> <FaRegThumbsUp className='inline' /></button>}
    </>
}
export default ThumbsUp