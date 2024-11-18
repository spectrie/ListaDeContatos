import { useSelector } from 'react-redux'
import Contato from '../../components/Contato'
import { Container } from './style'
import { RootReducer } from '../../store'
import BotaoAdicionar from '../../components/BotaoAdicionar'

const ListaDeContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  return (
    <Container>
      <ul>
        {itens.map((c) => (
          <li key={c.id}>
            <Contato
              id={c.id}
              nome={c.nome}
              numero={c.numero}
              email={c.email}
            />
          </li>
        ))}
        <BotaoAdicionar />
      </ul>
    </Container>
  )
}

export default ListaDeContatos
