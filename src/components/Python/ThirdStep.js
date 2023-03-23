import { useHistory } from 'react-router-dom';
import IfImage from '../../assets/Ifimage.PNG';
import IfExample from '../../assets/ExampleIf.PNG';
import ElseExample from '../../assets/ElseImage.PNG';
import WhileLoop from '../../assets/WhileLoop.PNG';
import Function from '../../assets/Function.PNG';
import './index.css';

const ThirdStep = () => {
    const history = useHistory()

    const onHandleDonePage = () => {
        history.push('/courseList')
    }

    return(
        <div className='third-container'>
            <h1>Python If ... Else</h1>
            <h2>Python Conditions and If statements</h2>
            <p>Python supports the usual logical conditions from mathematics:</p>
           <img src={IfImage} alt="image1" />
           <p>These conditions can be used in several ways, most commonly in "if statements" and loops.</p>
           <p>An "if statement" is written by using the if keyword.</p>
           <img src={IfExample} alt="image2" />
           <h1>Else....</h1>
           <p>The else keyword catches anything which isn't caught by the preceding conditions.</p>
           <img src={ElseExample} alt="image3" />
           <h1>Python Loops</h1>
           <p>Python has two primitive loop commands:</p>
           <ul>
            <li><span className='span-element'>while</span> loops</li>
            <li><span className='span-element'>for</span> loops</li>
           </ul>
           <h1>The while Loop</h1>
           <p>With the while loop we can execute a set of statements as long as a condition is true.</p>
           <img src={WhileLoop} alt="image4" />
           <h1>Python Functions</h1>
           <p>A function is a block of code which only runs when it is called.</p>
           <p>You can pass data, known as parameters, into a function</p>
           <p>A function can return data as a result.</p>
           <h1>Creating a Function</h1>
           <p>In Python a function is defined using the <span className='span-element'>def</span> keyword:</p>
           <img src={Function} alt="image5" />
           <div className='button-container'>
            <button className='next-button' onClick={onHandleDonePage}>Done</button>
            </div>
        </div>
    )
}

export default ThirdStep;