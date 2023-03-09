import HoverVideoPlayer from 'react-hover-video-player';
function VideoCard({ image, views, channel, cicon, time, thumbnail ,vid}) {
    return <>
        <div className='md:m-2 md:w-[320px] w-[100%] flex flex-col md:ml-2 group/main hover:cursor-pointer hover:scale-[1.2] delay-500   md:hover:bg-[#f0f0f0] rounded-xl hover:z-10  h-fit'>
            <HoverVideoPlayer
                videoSrc={vid} 
                pausedOverlay={
                    <img
                        src={image} className=" w-[100%] h-fit bg-transparent inline-block aspect-video"
                    />
                }
                loadingOverlay={
                    <div className="loading-overlay">
                        <div className="loading-spinner" />
                    </div>
                }
            />
            <p className='relative top-[-25px] bg-black left-[61%] w-fit text-white text-xs p-1 md:group-hover/main:visible invisible'>Keep hovering to play</p>
            <div className='flex flex-row md:m-4'>
                <img src={cicon} className="w-10 h-10 rounded-full"></img>
                <div className='flex flex-col pl-2 h-[75px] mb-2 '>
                    <h3 className='text-md font-bold'>{thumbnail}</h3>
                    <p className='text-sm font-medium'>{channel}</p>
                    <p className='text-[14px] font-medium'>{views} views · {time}</p>
                </div>
            </div>
            <div className='hidden md:group-hover/main:flex flex-row justify-center gap-4 mb-2'><p className='font-medium text-sm bg-white rounded-3xl p-1'>Watch Later</p><p className='font-medium text-sm  bg-white rounded-3xl p-1'>Add to queue</p>
            </div>
        </div>
    </>
}

export default VideoCard;