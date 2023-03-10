
function SidebarRow({ selected, Icon, title }) {
    return <>
        <div className="flex flex-row items-center lg:mt-2 lg:mb-2 flex-shrink-0">
            <div className={`flex flex-col items-center text-center w-full hover:bg-[#e0e0e0] rounded-md p-2 lg:flex-row cursor-pointer icon-s ${selected ? "bg-[#e0e0e0]" : ""}`}>
                <Icon className={`icon-show ${selected ? "text-red-600" : ""} flex-shrink-0`} />
                <h2 className=" font-normal md:p-2 lg:text-[15px] text-xs">{title}</h2>
            </div>
        </div>

    </>
}
export default SidebarRow