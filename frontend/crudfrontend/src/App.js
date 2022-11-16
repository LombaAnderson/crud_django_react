import Home from './components/Home';
import Usuario from './components/Usuario';
import Edicao from './components/Edicao';
import Remocao from './components/Remocao';
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
     <Nav.Link as={Link} to="/edicao">Edição de Usuário</Nav.Link>
     <Nav.Link as={Link} to="/remocao">Deletar Usuário</Nav.Link>
     </Nav>

     <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/usuarios" element={<Usuario/>}></Route>
      <Route path="/edicao" element={<Edicao/>}></Route>
      <Route path="/remocao" element={<Remocao/>}></Route>
      </Routes>

     </BrowserRouter>
    </div>
  );
}

export default App;
