import { Link } from "react-router-dom";
import { useState } from "react"
import {IoMdArrowBack} from 'react-icons/io'
import {BsFillMicFill} from 'react-icons/bs'
import {AiOutlineEnter} from 'react-icons/ai'

function Search()
{   
    const [inp,setInp] = useState(''); 
    return <div className="m-2">
        <Link to='/' ><IoMdArrowBack className="inline" /> </Link>
        <input onChange={(e) => {setInp(e.target.value)}} value={inp} className='w-[88%] rounded-3xl p-2 bg-stone-100 inline-block ' placeholder="Search"></input>
        <Link to={`/search/${inp}`}><AiOutlineEnter className="inline ml-1"/></Link>
    </div>
}
export default Search