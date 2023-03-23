import React, {useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import './index.css';

const Python = () => {
    const history = useHistory();
    const [courseList, setCourseList] = useState({
        data_types: [],
        variables: [],
        loops: [],
        conditional_statements: []
    });

    useEffect(() => {
        axios.get('../pythonbasicconcept.json')
        .then(response => {
            console.log("response",response.data)
            setCourseList(response.data)
        })
        .catch(error => {
            console.log(error)
        })
    }, []);

    const onHandleNext = () => {
        history.push('/courseList/secondstep')
    }

    console.log("list",courseList)
    console.log("history",history)

    return(
        <div className='python-list-container'>
            {courseList.data_types.length > 0 && (
                <div>
                    <h1 className='python-heading'>Data Types:</h1>
                    <ul className='data-list'>
                        {courseList.data_types.map((item) => (
                            <li key={item.id} className="python-list">
                                <h2 className='list-heading'>{item.name}</h2>
                                <p>{item.description}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            {courseList.variables.length > 0 && (
                <div>
                    <h1 className='python-heading'>Variables:</h1>
                    <ul className='data-list'>
                        {courseList.variables.map((item) => (
                            <li key={item.id} className="python-list">
                                <h2 className='list-heading'>{item.name}</h2>
                                <p>{item.description}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {courseList.loops.length > 0 && (
                <div>
                    <h1 className='python-heading'>Loops:</h1>
                    <ul className='data-list'>
                        {courseList.loops.map((item) => (
                            <li key={item.id} className="python-list">
                                <h2 className='list-heading'>{item.name}</h2>
                                <p>{item.description}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {courseList.conditional_statements.length > 0 && (
                <div>
                    <h1 className='python-heading'>conditional_statements:</h1>
                    <ul className='data-list'>
                        {courseList.conditional_statements.map((item) => (
                            <li key={item.id} className="python-list">
                                <h2 className='list-heading'>{item.name}</h2>
                                <p>{item.description}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            <div className='button-container'>
            <button className='next-button' onClick={onHandleNext}>Next</button>
            </div>
        </div>
    );
};

export default Python;
