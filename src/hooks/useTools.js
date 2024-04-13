import { useState } from 'react';

import { productOptions } from '../data/productOptions';
import axios from '../utils/axios';

export const useTools = () => {
    const [loader, setLoader] = useState(false)
    const saveTools = async(softwares) => {
        setLoader(true)
        try {
           const response = await axios.post("/add-product", { softwares })
           setLoader(false)
           return response

        } catch (err) {
            setLoader(false)
            return {
                hasError: true,
                errMessage: 'Something went wrong'
            }
        }
    }

    const getOptions = (keyWord) => {
        let fileteredOptions = productOptions.filter(option => {
           let optionLowerCased = option.option.toLowerCase()
           return optionLowerCased.includes(keyWord.toLowerCase())
        })
        return new Promise((res, rej) => {
           setTimeout(() => {
               res(fileteredOptions)
           }, 800)
        })
    }

    return {
        saveTools,
        getOptions,
        loader
    }
}

