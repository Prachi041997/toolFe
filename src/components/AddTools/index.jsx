import 'react-toastify/dist/ReactToastify.css';

import {
  useCallback,
  useContext,
  useState,
} from 'react';

import {
  toast,
  ToastContainer,
} from 'react-toastify';

import { StepsContext } from '../../Context/StepsContext.jsx';
import { useTools } from '../../hooks/useTools.js';
import { debounce } from '../../utils/toolOptions.js';
import SearchTools from '../SearchTools/index.jsx';
import ToolsSection from '../ToolsSection/index.jsx';

function AddTools({ maxProductsCount }) {
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [filterText, setFilterText] = useState('');
    const [filteredOptions, setFilteredOptions] = useState([])
    const {saveTools, getOptions, loader} = useTools()
    const {setCurrentStep} = useContext(StepsContext)

    const saveConfig = async () => {
        if(loader) {
            return
        }
       const response = await saveTools(selectedOptions)
       if(response.hasError) {
        toast(response.errMessage, {
            type: 'error',
            position: "top-right",
            autoClose: 3000,
        });
         return
       } 
       if(response.data.message === 'added successfully')
       setCurrentStep((prev => prev + 1))
         
    }

    const handleSearch = async(keyWord) => {
         if(!keyWord) {
            return
         }
         const options = await getOptions(keyWord)
         setFilteredOptions(options)
    }

    const betterSearch = debounce(handleSearch, 200)

    const handleOptionClick = useCallback((option) => {
        setFilterText("")
        setSelectedOptions(prev => [...prev, option]);
        setFilteredOptions([])
    }, [])

    const handleOptionRemove = useCallback((option) => {
        setSelectedOptions(selectedOptions.filter((opt) => opt.id != option.id));
    }, [selectedOptions])

    return (
        <>
            <ToastContainer />
            <div className="mt-5 sm:mt-0 flex sm:flex-row sm:gap-5 flex-col w-full h-full items-center">
                <div className="sm:w-1/2 sm:h-full h-1/2 flex-col flex justify-center items-center">
                    <ToolsSection productsCount={maxProductsCount} removeHandler={handleOptionRemove} selectedOptions={selectedOptions} />
                </div>
                <div className="sm:mt-0 mt-5 sm:w-1/2 max-w-96 sm:h-full sm:flex sm:flex-col sm:justify-center h-1/2 px-2">
                    <SearchTools totalSteps={3} handleSearch={betterSearch} filterText={filterText} setFilterText={setFilterText} filteredOptions={filteredOptions} handleOptionClick={handleOptionClick} />
                    <button onClick={saveConfig} className={`${selectedOptions.length > 0 ? "bg-blue-500 pointer-events-auto" : "bg-[#a7b9d6] pointer-events-none" } w-full p-2 mt-5 rounded-md text-white `}>
                        {loader ? <div className="loader" ></div>: 'Next'}
                    </button>
                </div>
            </div>
        </>
    )
}

export default AddTools
