import React from 'react';
import {useHistory, withRouter} from 'react-router-dom';
import './index.css';

const Home = () => {
  const history = useHistory();

    const onHandleChange = () => {
      history.push('/courseList')
    }
    console.log(history,"home")

  return (
    <div className='home-container'>
      <h1>Introduction to Computer Science</h1>
      <p>This course will teach you the basics of computer science and programming.</p>
      <button className="home-button" onClick={onHandleChange}>Start Learning</button>
    </div>
  );
}

export default withRouter(Home);
