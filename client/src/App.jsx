
import './App.css'
import Home from './Component/home';
import Notification from './Component/notification';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/notification" element={<Notification />} />
      </Routes>
    </Router>
  )
}

export default App
