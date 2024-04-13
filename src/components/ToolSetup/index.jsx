import React, { useContext } from 'react';

import { StepsContext } from '../../Context/StepsContext';

const ToolSetup = () => {

      const {currentStep, steps} = useContext(StepsContext)

    return (
        <>
        {steps[currentStep].component}
        </>
    )
}
export default ToolSetup