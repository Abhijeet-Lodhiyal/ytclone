

function SideCard({ image, title, channel, time, views }) {
    return <div className="flex flex-row items-center m-2 cursor-pointer">
        <img src={image} className="w-[170px] h-[100px] rounded-2xl inline-block"></img>
        <div className="pl-2"> 
            <p className="font-semibold text-sm">{title}</p>
            <p className="text-xs text-slate-600">{channel} </p>
            <p className="text-xs text-slate-600"><span>{views}</span> <span>{time}</span></p>
        </div>


    </div>
}
export default SideCard