import {Link} from 'react-router-dom';
import './index.css';

const Header = () => {
    return(
        <div>
        <div className="header-container">
            <h1 className='heading'>Computer Training Course</h1>
            <ul className='header-list'>
                <Link to='/'>
                <li className='nav-items home'>Home</li>
                </Link>
                <Link to='/courseList'>
                <li className='nav-items course-list'>Course List</li>
                </Link>
            </ul>
        </div>
        </div>
    )
}

export default Header;