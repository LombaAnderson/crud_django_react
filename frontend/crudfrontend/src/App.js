import Home from './components/Home';
import Usuario from './components/Usuario';
import Financeiro from './components/Financeiro';
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom'
import {Nav}  from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
     <h1>Lista de Usuários</h1>
     <BrowserRouter>

     <Nav variant="tabs">
     <Nav.Link as={Link} to="/">Página Inicial</Nav.Link>
     <Nav.Link as={Link} to="/usuarios">Cadastro de Usuários</Nav.Link>
     <Nav.Link as={Link} to="/financeiro">Informações Financeiras</Nav.Link>

     </Nav>

     <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/usuarios" element={<Usuario/>}></Route>
      <Route path="/financeiro" element={<Financeiro/>}></Route>

      </Routes>

     </BrowserRouter>
    </div>
  );
}

export default App;
