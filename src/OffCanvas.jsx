

function OffCanvas({title,Icon}) {
    return <div className=" w-44 flex flex-col mt-2 mb-2 flex-shrink-0">
        <div className="flex flex-row gap-2 items-center p-2">
        <Icon  className="inline"/>
        <p className="inline p-2">{title}</p>
        </div>
        
    </div>
}
export default OffCanvas