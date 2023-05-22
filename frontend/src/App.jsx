import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Login from './pages/Login'
import ClientData from './pages/ClientData'
import ClientList from './pages/ClientList'
import ClientSignUp from './pages/ClientSignUp'

const App = () => {
  return (

    // Rotas

    <Router>
    
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/dados-cliente" element={<ClientData />}/>
        <Route path="/lista-clientes" element={<ClientList />}/>
        <Route path="/cadastro-cliente" element={<ClientSignUp />}/>
      </Routes>

    </Router>
  )
}

export default App