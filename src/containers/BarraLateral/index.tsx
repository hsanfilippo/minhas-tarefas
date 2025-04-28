import { useDispatch, useSelector } from 'react-redux'
import FiltroCard from '../../components/FiltroCard'

import * as S from './styles'
import { RootReducer } from '../../store'
import { alterarTermo } from '../../store/reducers/filtro'

const BarraLateral = () => {
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <S.Aside>
      <div>
        <S.Campo
          type="text"
          placeholder="Buscar"
          value={termo}
          onChange={(e) => dispatch(alterarTermo(e.target.value))}
        />
        <S.Filtros>
          <FiltroCard contador={0} legenda="Pendentes" />
          <FiltroCard contador={1} legenda="Concluidas" />
          <FiltroCard contador={2} legenda="Urgentes" />
          <FiltroCard contador={3} legenda="Importantes" />
          <FiltroCard contador={4} legenda="Normal" />
          <FiltroCard ativo contador={5} legenda="Todas" />
        </S.Filtros>
      </div>
    </S.Aside>
  )
}

export default BarraLateral
