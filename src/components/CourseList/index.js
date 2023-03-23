import './index.css'
import {Link} from 'react-router-dom';

const courseList = () => {
    return (
        <div className="course-list-container">
          <h1 className='course-list-heading'>In this course you can learn Basic Programming Concepts for below courses join today and learn.</h1>
          <ul className='couse-list'>
            <Link to='/courseList/python'>
            <li className='course-list-items python'>Python</li>
            </Link>
            <Link to='/courseList/java'>
            <li className='course-list-items java'>Java</li>
            </Link>
            <Link to='/courseList/javascript'>
            <li className='course-list-items javascript'>Java Script</li>
            </Link>
          </ul>
        </div>
    )
}

export default courseList;