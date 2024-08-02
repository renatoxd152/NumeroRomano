import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { TelaConversor } from './componentes/Tela.js';

function App() {
  return (
   
      <Router>
        <Routes>
          <Route path='/' element={<TelaConversor/>}/>
        </Routes>
      </Router>
  
  );
}


export default App;