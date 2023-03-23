import Home from './components/Home'
import CourseList from './components/CourseList';
import { BrowserRouter,Switch,Route} from 'react-router-dom';
import Header from './components/Header';
import Python from './components/Python';
import Java from './components/Java';
import PythonSecondStep from './components/Python/SecondStep';
import ThirdStep from './components/Python/ThirdStep';
import JavaScript from './components/JavaScript';
// import NotFound from './components/NotFound';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
      <Switch>
      <Route exact path="/"><Home /></Route>
      <Route exact path="/courseList"><CourseList /></Route>
      <Route exact path="/courseList/python"><Python /></Route>
      <Route exact path="/courseList/java"><Java /></Route>
      <Route exact path="/courseList/javascript"><JavaScript /></Route>
      <Route exact path="/courseList/secondstep"><PythonSecondStep /></Route>
      <Route exact path="/courseList/thirdstep"><ThirdStep /></Route>
      {/* <Route><NotFound/></Route> */}
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
