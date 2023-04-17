import logo from './logo.svg';
import './App.css';
import Navbar from "./components/topnav"
import Computers from "./components/computers"
import TopDeals from './components/deals';
import Phones from './components/phones'
import Audio from './components/audio'
import Security from './components/security'
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';

function App() {
  return (
    <Router>
    <Navbar />
    <Routes>
        <Route path='/Computers' element={<Computers/>} />
        <Route path='/Phones' element={<Phones/>} />
        <Route path='/TopDeals' element={<TopDeals/>} />
        <Route path='/Audio' element={<Audio/>} />
        <Route path='/Security' element={<Security/>} />
    </Routes>
    </Router>
);
  }

export default App;
