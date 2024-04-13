import React from 'react';

import ToolSetup from '../../components/ToolSetup';
import StepsProvider from '../../Context/StepsContext';

const Steps = () => {
  return(
    <>
      <StepsProvider>
         <ToolSetup/>
      </StepsProvider>
    </>
  )
}
export default Steps


