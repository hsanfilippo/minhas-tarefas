import { useDispatch, useSelector } from 'react-redux'
import FiltroCard from '../../components/FiltroCard'

import { RootReducer } from '../../store'
import { alterarTermo } from '../../store/reducers/filtro'

import { Aside, Filtros } from './styles'
import { Campo } from '../../styles/index'
import * as enums from '../../utils/enums/Tarefa'

const BarraLateral = () => {
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <Aside>
      <div>
        <Campo
          type="text"
          placeholder="Buscar"
          value={termo}
          onChange={(e) => dispatch(alterarTermo(e.target.value))}
        />
        <Filtros>
          <FiltroCard
            valor={enums.Status.PENDENTE}
            criterio="status"
            legenda="Pendentes"
          />
          <FiltroCard
            valor={enums.Status.CONCLUIDA}
            criterio="status"
            legenda="Concluidas"
          />
          <FiltroCard
            valor={enums.Prioridade.URGENTE}
            criterio="prioridade"
            legenda="Urgentes"
          />
          <FiltroCard
            valor={enums.Prioridade.IMPORTANTE}
            criterio="prioridade"
            legenda="Importantes"
          />
          <FiltroCard
            valor={enums.Prioridade.NORMAL}
            criterio="prioridade"
            legenda="Normal"
          />
          <FiltroCard criterio="todas" legenda="Todas" />
        </Filtros>
      </div>
    </Aside>
  )
}

export default BarraLateral
