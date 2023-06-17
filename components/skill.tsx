export default function Skill(props:any){
    return(
        <div className="flex w-1/3 flex-col h-full p-4 bg-white rounded-xl">
            <div className="flex flex-row">
                <div className="p-1 pl-0 text-xl">{props.title}</div>
                <div className="border border-blue-300 p-1 rounded-lg">
                    {props.category}
                </div>
            </div>
            <div className="font-thin text-sm tracking-wide text-gray-700">{props.description}</div>
        </div>
    );
}