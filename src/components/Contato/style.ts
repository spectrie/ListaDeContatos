import styled from 'styled-components'

export const Card = styled.div`
  background-color: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  width: 700px;
  border-radius: 16px;
  margin: 16px;
`
export const Titulo = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 16px;
`

export const Telefone = styled.textarea`
  color: #000000;
  font-size: 14px;
  line-height: 12px;
  font-family: 'Roboto Mono', monospace;
  font-weight: bold;
  align-content: center;
  background-color: transparent;
  border: none;
  resize: none;
  margin-left: 8px;
`
export const Email = styled.textarea`
  color: #000000;
  font-size: 14px;
  line-height: 12px;
  font-family: 'Roboto Mono', monospace;
  font-weight: bold;
  margin-left: 16px;
  width: 300px;
  align-content: center;
  background-color: transparent;
  border: none;
  resize: none;
`

export const Nome = styled.textarea`
  color: #000000;
  font-size: 14px;
  line-height: 24px;
  font-family: 'Roboto Mono', monospace;
  font-weight: bold;
  width: 100%;
  resize: none;
  height: 30px;
  align-content: center;
  background-color: transparent;
  border: none;
  margin-left: 8px;
`

export const BarraAcoes = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;
  display: flex;
  justify-content: flex-end;
`

export const Botao = styled.button`
  font-weight: bold;
  font-size: 12px;
  color: #ffffff;
  padding: 12px 16px;
  border: none;
  cursor: pointer;
  background-color: #9395d3;
  border-radius: 8px;
  margin-right: 8px;
`

export const BotaoSalvar = styled(Botao)`
  background-color: #44bd32;
`
export const BotaoCancelar = styled(Botao)`
  background-color: #c23616;
`
export const BotaoApagar = styled(Botao)`
  background-color: #808080;
`

export const Campo = styled.div`
  display: flex;
  align-items: center;
`
