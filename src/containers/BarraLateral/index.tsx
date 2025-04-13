import FiltroCard from '../../components/FiltroCard'

import * as S from './styles'

const BarraLateral = () => (
  <S.Aside>
    <div>
      <S.Campo type="text" placeholder="Buscar" />
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

export default BarraLateral
