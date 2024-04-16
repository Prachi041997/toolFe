import React, {
  memo,
  useContext,
} from 'react';

import { MdSearch } from 'react-icons/md';

import { StepsContext } from '../../Context/StepsContext.jsx';
import Options from '../ProductOptions/index.jsx';

const SearchTools = ({handleSearch, filterText, setFilterText, filteredOptions, handleOptionClick }) => {
   const {currentStep, steps} = useContext(StepsContext)
   const onChangeHandle = (e) => {
        setFilterText(e.target.value)
        handleSearch(e.target.value)
    }
    return (
        <>
          <div className="mb-5 px-3 py-1 w-fit rounded-md bg-gradient-to-tr from-indigo-500 to-fuchsia-500">
            <p className="text-white text-sm">{currentStep + 1} of {steps.length}</p>
          </div>
          <h3 className="mb-3 font-semibold text-2xl">Let's add your internal tools </h3>
          <p className="font-light text-md">Search to quickly add products your team uses today. You'll be able to add as many as you need later bit for now let's add four.</p>
          <div className="relative">
            <div className="py-2 px-3 gap-2 rounded-md mt-5 flex items-center bg-slate-200">
              <MdSearch/>
              <input type="text" value={filterText}onChange={(e) => onChangeHandle(e)} placeholder="Search for any software..." className="bg-transparent outline-none " />
            </div>
            <div className={`${filteredOptions.length == 0 && "hidden" } absolute w-full flex flex-col gap-1 bg-white translate-y-3 p-2 rounded-md border-slate-100 border-2 shadow-[0_0px_10px_1px_rgba(0,0,0,0.04)]`}>
              <Options options={filteredOptions} clickHandler={handleOptionClick}/>
            </div>
          </div>
        </>
    )
}

export default memo(SearchTools)