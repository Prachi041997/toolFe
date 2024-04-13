import {
  Link,
  useLocation,
} from 'react-router-dom';

const NavBar = () => {
  const location = useLocation();
  const shouldShowExitSetUp = location.pathname.includes('tools-setup')
  return (
    <>
        <div className="w-full flex items-center justify-between ">
            <h1 className="font-semibold text-2xl md:text-3xl">axiamatic</h1>
            {shouldShowExitSetUp ? <Link to='/' className="font-medium underline text-gray-400 text-xs md:text-sm">Exit Setup</Link>: <></>}
        </div>
    </>
  )
}

export default NavBar