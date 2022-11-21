import './App.css';
import {
  Home, Rooms, Contact, Footer,
} from './containers'
import { Navbar } from './components';




import {Route, Routes} from 'react-router-dom';


function App() {
  return (
    <div className="App">

   
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/rooms" element={<Rooms />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
