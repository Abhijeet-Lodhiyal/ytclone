import { MdSort } from 'react-icons/md'
import { useState,useEffect } from 'react'
import alo from '../assets/alo.jpg'
import NewComment from './NewComment';
function Comments() {
    var [comm,setComm] = useState([]);
    var [newVal,setNewVal] = useState("");
    var [num,setNum] = useState(0);
    var [foc,setFoc] = useState(0);
    function updateComment(e)
    {
        e.preventDefault();
        if(e.target.newInp.value === '')
            return;
        setComm((comm) =>[...comm,e.target.newInp.value])
        setNewVal("")
        setNum(comm.length + 1)
    }
    return <div className='mt-6'>
        <p className='font-medium'>{num} {num === 1 ? <>Comment</>:<>Comments</>} <MdSort className='inline ml-4' />   <button onClick={()=>{var a = comm;
        a.sort()
        setComm(a)}}>Sort By</button></p>
        <form className='' onSubmit={updateComment}>
            <div className='flex flex-row'><img src={alo} className='rounded-full inline'></img>
            <div className="inline-block m-2 border-1 border-black border-t-0 border-r-0 border-l-0 border-b-2 w-full"><input type="text" className='focus:border-0 outline-none w-full' placeholder='Add Comments' name='newInp' value={newVal} onChange={(e)=> {setNewVal(e.target.value)}} onFocus={(e)=> {setFoc(1)}}></input></div></div>
            <div className={`flex flex-row gap-4 justify-end ${foc === 0 ?  'invisible':'visible'}`}><button className={`block font-medium ${foc === 0 ? 'invisible':'visible'}`} onClick={(e)=> {setFoc(0)}}  >Cancel</button>
            <button className='block font-medium' type='submit'>Comment</button></div>
        </form>
        <div>
            {
                comm.map((e) => {
                    return <NewComment comment={e} />
                })
            }
        </div>
    </div>
}
export default Comments