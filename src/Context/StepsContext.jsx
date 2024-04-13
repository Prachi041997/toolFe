import {
  createContext,
  useState,
} from 'react';

import AddTools from '../components/AddTools';

export const StepsContext = createContext()
const StepsProvider = ({children}) => {
    const steps = [
        {id: '1', 
         stepTitle: "Let's add your internal tools",
         component: <AddTools maxProductsCount={4}/>
        },
        {id: '2',
          stepTitle: "Let's configure your internal tools",
          component: <div className='w-full flex-1 flex items-center justify-center'>
          <div className='px-10 py-3 rounded-lg bg-blue-500 text-white font-semibold tracking-tight'>Step 2</div>
      </div>

        }
      ]
    const [currentStep, setCurrentStep] = useState(0)
    return(
        <StepsContext.Provider value={{currentStep, setCurrentStep, steps}}>
            {children}
        </StepsContext.Provider>
    )
}
export default StepsProvider