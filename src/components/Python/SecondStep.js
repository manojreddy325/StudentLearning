import { useHistory } from 'react-router-dom';
import syntax from '../../assets/syntaximage.PNG';
import Example from '../../assets/Example.PNG';
import Datatypes from '../../assets/builtindatatypes.PNG';
import ExampleDatatype from '../../assets/Exampledatatype.PNG';
import './index.css';

const PythonSecondStep = () => {
    const history = useHistory();

    const onHandleNextPage = () => {
        history.push('/courseList/thirdstep')
    }

    return(
        <div className='second-container'>
            <h1>Python syntax</h1>
            <img src={syntax} alt='image' className="syntax-image" />
            <h1>Python Indentation</h1>
            <p>Indentation refers to the spaces at the beginning of a code line.</p>
            <p>Where in other programming languages the indentation in code is for readability only, the indentation in Python is very important.</p>
            <p>Python uses indentation to indicate a block of code.</p>
            <img src={Example} alt="image1" />
            <h1>Python Data Types</h1>
            <h2>Built-in Data Types</h2>
            <p>In programming, data type is an important concept.</p>
            <p>Variables can store data of different types, and different types can do different things.</p>
            <p>Python has the following data types built-in by default, in these categories:</p>
            <img src={Datatypes} alt="image2" />
            <h1>Setting the Data Type</h1>
            <p>In Python, the data type is set when you assign a value to a variable:</p>
            <img src={ExampleDatatype} alt="image3" />
            <div className='button-container'>
            <button className='next-button' onClick={onHandleNextPage}>Next</button>
            </div>
        </div>
    )
}
export default PythonSecondStep;