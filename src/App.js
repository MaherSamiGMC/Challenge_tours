import './App.css';
import Slides from './Components/Carousel';
import ListofCards from './Components/ListofCards';
import NavBar from './Components/NavBar'
import {
  BrowserRouter as Router,
  Route,
  useParams,
} from "react-router-dom";
import AddTour from './Components/AddTour';
import {useSelector} from 'react-redux'
import {useState} from 'react'
import CardWideView from './Components/CardWideView'



function App() {
  const [search, setsearch] = useState("")

    const state = useSelector(state => state.filter(el=>el.name.includes(search)))
    // const filterState=(x)=>{useSelector(state=>state.filter(el=>el.name.includes(x)))}
  return (
    <div className="App">
      <Router>
      <NavBar  setsearch={setsearch} />
      <Route path="/home">
        <Slides/>
      </Route>
      <Route path="/tours">
        <ListofCards  state={state} />
      </Route>
      <Route path="/new_tour">
        <AddTour />
      </Route>
      <Route path="/:title">
        <CardWideView state={state}/>
      </Route>
      </Router>
    </div>
  );
}

export default App;
