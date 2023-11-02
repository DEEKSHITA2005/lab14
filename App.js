import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';
import {Routes,Route} from 'react-router-dom'
function App() {
  return (
    <div>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/login' element={<Login />} />
        </Routes>
    </div>
  );
}

export default App;