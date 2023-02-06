import Subscriber from "../Subscriber";

function ChannelCard({ image, channel, subs, tag, descrip }) {
    return <div className="m-4 flex flex-row items-center ">
            <div className="mr-[10%]">
             <img src={image} className="rounded-full w-[150px] h-[150px] "></img>
             </div>
            <div>
                <h3 className=" font-medium">{channel}</h3>
                <p className="text-sm">{tag} {subs}</p>
                <p className="text-sm">{descrip}</p>
            </div>
            <Subscriber className='ml-[10%] '/>
        </div>
}
export default ChannelCard;