import 'react-toastify/dist/ReactToastify.css';

import {
  Route,
  Routes,
} from 'react-router-dom';

import NavBar from './components/NavBar/';
import Home from './pages/Home';
import Steps from './pages/Steps';

function App() {
  return (
    <>
    <div className="w-full flex flex-col h-full p-5 md:p-10">
      <NavBar/>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/tools-setup" element={<Steps/>} />
       </Routes>
    </div>
    
    </>
  )
}

export default App
