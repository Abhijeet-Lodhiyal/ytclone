import { MdTune } from 'react-icons/md'
import ChannelRow from './ChannelRow'
import ChannelCard from './ChannelCard'
function SearchPage() {
    return <>
        <div className="bias-5/6 w-full flex flex-col md:ml-[15%]">
            <div className='flex flex-row items-center hover:bg-[#d0d0d0] w-fit p-1 pl-2 pr-2 rounded-3xl '>
                <MdTune/>
                <p className='pl-2 font-medium'>Filter</p>
            </div>
            <hr className='lg:w-[65%] w-[95%] mt-2 border-[#e0e0e0]'/>
            <ChannelCard image="https://cdn.pixabay.com/photo/2017/11/12/08/43/audio-2941753_960_720.jpg" channel="Arhat sings" subs="1.5M Subscribers" tag="@arhattiwari" descrip="Hello I am Arhat"/>
            <hr className='lg:w-[65%] w-[95%] mt-2 border-[#e0e0e0]'/>
            <p className='p-2 font-semibold'>Latest from Arhat sings</p>
            <ChannelRow />
        </div>
        
       
    </>

}
export default SearchPage