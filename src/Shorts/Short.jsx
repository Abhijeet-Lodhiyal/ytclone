import ThumbsDown from "../ThumbsDown";
import ThumbsUp from "../ThumbsUp";
import { RiShareForwardFill } from 'react-icons/ri'
function Short()
{
    return <div className="m-4 flex flex-row items-end justify-center">
        <iframe width="469" height="833" src="https://www.youtube.com/embed/JLyhGPBpRdU" className=" rounded-3xl md:h-[85vh] md:w-[45vh] w-screen h-[85vh]" title="Virat kohli's advice for the Youth ✨🚀" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <div className="flex flex-col md:ml-2">
            <div className="bg-gray-200 rounded-full w-10 h-10 items-center justify-center md:flex flex-col hidden "><ThumbsUp /></div>
            <p className="text-sm text-center hidden md:block">Like</p>
            <div className="bg-gray-200 rounded-full w-10 h-10 items-center justify-center md:flex flex-col hidden"><ThumbsDown /></div>
            <p className="text-sm text-center hidden md:block">Dislike</p>
            <div className="bg-gray-200 rounded-full w-10 h-10 items-center justify-center md:flex flex-col hidden"><RiShareForwardFill  /></div>
            <p className="text-sm text-center  hidden md:block">Share</p>
            <div className="bg-gray-200 rounded-full w-10 h-10 items-center justify-center md:flex flex-col hidden">⋅⋅⋅</div>
            <p className="text-sm text-center  hidden md:block">Like</p>
        </div>
    </div>
}
export default Short;