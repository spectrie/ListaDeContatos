import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import * as S from './style'
import { Campo } from './style'
import { remover, editar } from '../../store/reducers/contatos'
import ContatoClass from '../../models/Contato'

type Props = ContatoClass

const Contato = ({
  nome: nomeOriginal,
  numero: numeroOriginal,
  email: emailOriginal,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [nome, setNome] = useState('')
  const [numero, setNumero] = useState('')
  const [email, setEmail] = useState('')

  useEffect(() => {
    if (nomeOriginal.length > 0) {
      setNome(nomeOriginal)
    }
  }, [nomeOriginal])

  useEffect(() => {
    if (numeroOriginal.length > 0) {
      setNumero(numeroOriginal)
    }
  }, [numeroOriginal])

  useEffect(() => {
    if (emailOriginal.length > 0) {
      setEmail(emailOriginal)
    }
  }, [emailOriginal])

  function original() {
    setEstaEditando(false)
    setNome(nomeOriginal)
    setNumero(numeroOriginal)
    setEmail(emailOriginal)
  }

  return (
    <S.Card>
      <S.Titulo>Contato {id}</S.Titulo>
      <Campo>
        <i className="bi bi-person"></i>
        <S.Nome
          disabled={!estaEditando}
          onChange={(evento) => setNome(evento.target.value)}
          value={nome}
        ></S.Nome>
      </Campo>
      <Campo>
        <i className="bi bi-telephone-fill"></i>
        <S.Telefone
          disabled={!estaEditando}
          onChange={(evento) => setNumero(evento.target.value)}
          value={numero}
        ></S.Telefone>
      </Campo>
      <Campo>
        <i className="bi bi-envelope-fill"></i>
        <S.Email
          disabled={!estaEditando}
          onChange={(evento) => setEmail(evento.target.value)}
          value={email}
        >
          {email}
        </S.Email>
      </Campo>
      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <S.BotaoSalvar
              onClick={() => {
                dispatch(
                  editar({
                    nome,
                    numero,
                    email,
                    id
                  })
                )
                setEstaEditando(false)
              }}
            >
              {' '}
              <i className="bi bi-check-lg"></i>
            </S.BotaoSalvar>
            <S.BotaoCancelar
              onClick={() => {
                original()
              }}
            >
              <i className="bi bi-x-square"></i>
            </S.BotaoCancelar>
          </>
        ) : (
          <>
            <S.Botao onClick={() => setEstaEditando(true)}>
              <i className="bi bi-pencil"></i>
            </S.Botao>
            <S.BotaoApagar onClick={() => dispatch(remover(id))}>
              <i className="bi bi-trash"></i>
            </S.BotaoApagar>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}
export default Contato
