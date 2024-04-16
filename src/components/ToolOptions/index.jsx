import { memo } from 'react';

const Options = (props)=> {

    const { options,clickHandler } = props

    return (
        <>
            {options.map((opt, i) => (
                <div key={opt.id} onClick={() => clickHandler(opt)} className="cursor-pointer group p-2 flex gap-1 items-center hover:bg-blue-500 rounded-md">
                    <div className="overflow-hidden w-5 h-5">
                        <img src={opt.img} alt="" />
                    </div>
                    <p className="text-sm group-hover:text-white">{opt.option}</p>
                </div>
            )
            )}
        </>
    )
}

export default memo(Options)