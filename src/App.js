import React from 'react';
import './App.css';
import
{
BrowserRouter as Router,Route,} from "react-router-dom";
import Navbar from './Component/Navbar';
import Home from '../src/contents/Home';
import Education from './contents/Education';
import About from '../src/contents/About';
import Skills from './contents/Skills';
import Contact from './contents/Contact';
function App() {
return (
<Router>
<div className="App">
<Navbar />
<Route exact path="/">
<Home />
</Route>
<Route path="/about">
<About />
</Route>
<Route path="/education">
<Education />
</Route>
<Route path="/skills">
<Skills />
</Route>
<Route path="/contact">
<Contact />
</Route>
</div>
</Router>
)
}
export default App;