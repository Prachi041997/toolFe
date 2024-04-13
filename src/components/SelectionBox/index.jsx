import { MdOutlineAdd ,MdClose } from "react-icons/md";


const SelectionBox = (props) => {
    const {option,removeHandler} = props

    return (
        <>
        {option ? (
            <div className="p-2 sm:p-3 md:p-4 lg:p-5 h-full items-center flex flex-col justify-between">
                <div className="mt-3 lg:mt-5 flex flex-col items-center">
                <div className="w-1/3 overflow-hidden"> 
                    <img src={option.img} alt="" />
                </div>
                <p className="mt-1 sm:mt-2 text-sm font-semibold">{option.option}</p>
                </div>
                <div  onClick={()=>removeHandler(option)} className="flex gap-1">
                <MdClose className="text-rose-500 font-semibold"/>
                <p className="text-xs text-slate-400 font-medium">Remove</p>
                </div>
            
            </div>
            ) : (
            <div className="flex w-full h-full justify-center items-center">
                <div className="rounded-md p-4 bg-slate-100">
                    <MdOutlineAdd className="text-2xl text-slate-400"/>
                </div>
            </div>
            )}
        </>
    )
}

export default SelectionBox