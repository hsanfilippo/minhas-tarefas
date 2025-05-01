import { MainContainer, Titulo, Campo, BotaoSalvar } from '../../styles/index'
import * as S from './styles'

const Formulario = () => {
  return (
    <MainContainer>
      <Titulo>Nova tarefa</Titulo>
      <S.Form>
        <Campo type="text" placeholder="Título" />
        <Campo as="textarea" placeholder="Descrição da tarefa" />
        <S.Opcoes>
          <p>Prioridade</p>
          <input name="prioridade" type="radio" id="urgente" />
          <label htmlFor="urgente">Urgente</label>
          <input name="prioridade" type="radio" id="importante" />
          <label htmlFor="urgente">Importante</label>
          <input name="prioridade" type="radio" id="normal" />
          <label htmlFor="urgente">Normal</label>
        </S.Opcoes>
        <BotaoSalvar type="submit">Cadastrar</BotaoSalvar>
      </S.Form>
    </MainContainer>
  )
}

export default Formulario
