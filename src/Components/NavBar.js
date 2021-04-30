import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Link
} from "react-router-dom";
import {useState} from 'react'


function NavBar({setsearch}) {
    const [search, setSearch] = useState("initialState")
    // const filtredState=useSelector(state=>state.filter(el=>el.name.includes(search)))
    // const filtredState=state.filter(el=>el.name.includes(search))

    return (
        <div>
          <Navbar bg="primary" variant="dark">
    <Navbar.Brand href="/home">Website</Navbar.Brand>
    
    <Nav className="mr-auto">
    
      <Nav.Link as={Link} to="/home">Home</Nav.Link>
      <Nav.Link as={Link} to="/tours">Our Tours</Nav.Link>
      <Nav.Link as={Link} to="/new_tour">Add new tour</Nav.Link>
    
    </Nav>
    
    <Form inline>
      <FormControl onChange={e=>setSearch(e.target.value)} type="text" placeholder="Search" className="mr-sm-2" />
      <Button onClick={()=>{
          setsearch(search)
      }} variant="outline-light">Search</Button>
    </Form>
  </Navbar>  
        </div>
    )
}




export default NavBar