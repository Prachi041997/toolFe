import { Link } from 'react-router-dom';

const Home = () => {
   return (
    <div className='w-full flex-1 flex items-center justify-center'>
        <Link className='px-10 py-3 rounded-lg bg-blue-500 text-white font-semibold tracking-tight' to='/tools-setup'>Initiate Setup</Link>
    </div>
   )
}
export default Home