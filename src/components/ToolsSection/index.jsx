import React, { memo } from 'react';

import SelectionBox from '../SelectionBox/index.jsx';

const ToolsSection = ({productsCount, selectedOptions, removeHandler }) => {
   return (
      <>
        <div className="grid grid-cols-2 lg:gap-7 gap-5">
         {[...new Array(productsCount)].fill('').map((_, idx) => {
            return (
            <div key={window.crypto.randomUUID()} className="rounded-md border-slate-100 border-2 shadow-[0_0px_10px_1px_rgba(0,0,0,0.04)] sm:h-36 md:w-36 md:h-40 lg:h-48 lg:w-44  w-32 h-32">
                <SelectionBox option={selectedOptions[idx] ? selectedOptions[idx] : null} removeHandler={removeHandler} />
            </div>
            )
         })}
         </div>
         <div className="mt-5">
                <p className="text-sm text-slate-400">{selectedOptions.length} Products Added</p>
          </div>
      </>
   )
}

export default memo(ToolsSection)