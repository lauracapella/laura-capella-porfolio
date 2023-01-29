import './index.scss';
import Sidebar from '../Sidebar'
import {Outlet} from 'react-router-dom'
import Home from '../Home'


const Layout = () => {
    return (
    <div className='App'>
        <Sidebar/>
        <div className='page'>
        <span className='tags top-tags'>&lt;body&gt;</span>
        <Outlet />
        <span className='tags bottom-tags'>&lt;body&gt;
        <br /></span>
        <span className='bottom-tag-html'>&lt;html&gt;</span>
        <Home></Home>
        </div>
    </div>
    ) 
}

export default Layout