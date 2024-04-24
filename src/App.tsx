import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import './App.css'
import Share from './Pages/share';

const App = () => {

  return (
    <Router>
      <Routes>

      <Route path="/Share" element={<Share/>}/>

      </Routes>

    </Router>
  
  );
};

export default App
