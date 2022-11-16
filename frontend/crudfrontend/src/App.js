import Home from './components/Home';
import Usuario from './components/Usuario';
import Edicao from './components/Edicao';
import Remocao from './components/Remocao';
import {BrowserRouter, Routes, Link, Route} from 'react-router-dom'
import {Nav}  

function App() {
  return (
    <div className="App">
     <h1>Lista de Usuários</h1>
     <BrowserRouter>
     <ul>
      <li> <Link to="/">Página Inicial</Link></li>
      <li> <Link to="/usuarios">Cadastro de Usuários </Link></li>
      <li> <Link to="/edicao"> Edição de Usuário </Link></li>
      <li> <Link to="/remocao">Deletar Usuário </Link></li>
     </ul>

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
