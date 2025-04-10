   
import "./App.css";
import { Routes, Route } from 'react-router-dom';
import Emails from './Emails'
import NotFound from './NotFound'
import Home from './Home'

function App() {

  return (
        
    
    <div style={{flex: 'auto', height:'100%' , minHeight: '0'}} >
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/emails" element={<Emails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>


  );
}

export default App;
