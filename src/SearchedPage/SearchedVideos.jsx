function SearchedVideos({image,title,views,time,channel,descrip,cimage})
{
    return <>
        <div className="md:m-4 flex md:flex-row flex-col md:justify-start w-full mt-2 mb-2">
            <div className="">
             <img src={image} className="md:rounded-2xl md:w-[300px] w-[100%] md:mr-6 "></img>
             </div>
            <div className="flex flex-col flex-wrap md:ml-2">
                <h2 className="font-medium sm:text-base text-sm md:block hidden">{title}</h2>
                <div className=" text-xs flex flex-row mt-2">
                    <img src={cimage} className="w-8 h-8 rounded-full inline"></img>
                    <div className="flex flex-col ml-2 justify-center">
                        <p className=" font-semibold md:hidden block">{title}</p>
                        <p>{channel} <span className="md:hidden inline">· {views} · {time}</span></p> 
                    </div>
                </div>
                
                <p className="sm:text-sm text-xs md:block hidden">{views} · {time}</p>
                <p className="sm:text-sm text-xs md:block hidden">{descrip}</p>
            </div>
        </div>
    </>
}
export default SearchedVideos;