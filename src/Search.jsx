import { Link } from "react-router-dom";
import { useState } from "react"
import {IoMdArrowBack} from 'react-icons/io'
import {AiOutlineEnter} from 'react-icons/ai'

function Search()
{   
    const [inp,setInp] = useState(''); 
    function handleSearch(e) {
            window.location.href = "/search/"+inp
    }
    return <div className="m-2">
        <form onSubmit={handleSearch}>
        <Link to='/' ><IoMdArrowBack className="inline" /> </Link>
        <input onChange={(e) => {setInp(e.target.value)}} value={inp} className='w-[88%] rounded-3xl p-2 bg-stone-100 inline-block ' placeholder="Search" type="search" ></input>
        <Link to={`/search/${inp}`}><AiOutlineEnter className="inline ml-1"/></Link>
        </form>
        
    </div>
}
export default Search