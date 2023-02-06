import { RiShareForwardFill, RiMenuAddLine } from 'react-icons/ri'
import Comments from '../CommentSection/Comments'
import Subscriber from '../Subscriber'
import ThumbsDown from '../ThumbsDown'
import ThumbsUp from '../ThumbsUp'
import WatchRecommend from './WatchRecommend'

function VideoWatchPage() {
    return <>
        <div className='flex flex-row lg:pl-24 p-2 pt-5'>
            <div className='flex lg:flex-row flex-col w-[100%]'>
                <div className='md:basis-2/3'>
                    <iframe className="lg:w-[100%] w-[100%] h-fit aspect-video" src="https://www.youtube.com/embed/AF_TTflN-o8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    <h2 className=' font-semibold text-lg ml-0 mr-2 mt-2 mb-2'>All of me ~ John Legend (cover song)</h2>
                    <div className='flex md:flex-row flex-col justify-between w-[90%] gap-y-2'>
                        <div className='flex flex-row'> <img src="https://i.redd.it/3ios27oa1i271.jpg" className='w-10 h-10 rounded-full'></img>
                            <div className='flex flex-col ml-3'>
                                <p className='font-semibold shrink-0'>Arhat sings</p>
                                <p className='text-xs'>1.5M subscribers</p>
                            </div>
                            <Subscriber hideit="hide" />
                        </div>
                        <div className='flex flex-row flex-wrap'>
                            <button className=' p-2 rounded-3xl bg-[#f0f0f0] flex flex-row gap-3 items-center mr-2'><span> 60K <ThumbsUp /></span> | <span> <ThumbsDown /></span></button>
                            <button className='p-2 rounded-3xl bg-[#f0f0f0] flex flex-row gap-3 items-center mr-2'><RiShareForwardFill className='inline' />Share</button>
                            <button className='p-2 rounded-3xl bg-[#f0f0f0] flex flex-row gap-3 items-center mr-2'><RiMenuAddLine className='inline' />Save</button>
                            <button className='p-2 rounded-3xl bg-[#f0f0f0] flex flex-row gap-3 items-center mr-2' >⋅⋅⋅</button>
                        </div>
                    </div>
                    <Comments />
                </div>
                <div className='basis-1/3'><WatchRecommend /></div>
            </div>


        </div>
    </>
}
export default VideoWatchPage