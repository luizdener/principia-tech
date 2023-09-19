import Menu from './components/menu/Menu'
import Apresentacao from './components/apresentação/Apresentacao'
import Sobre from './components/Sobre/Sobre'
import Servicos from './components/servicos/Servicos'
import Contatos from './components/contatos/Contato'

import './styles/globals.scss'

function App() {
  return (
    <div id="potencia-tech">
      <Menu />
      <Apresentacao/>
      <Sobre/>
      <Servicos/>
      <Contatos/>
    </div>
  )
}

export default App
