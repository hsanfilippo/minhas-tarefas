import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/Tarefa'
import * as enums from '../../utils/enums/Tarefa'

type TarefasState = {
  itens: Tarefa[]
}

const initialState: TarefasState = {
  itens: [
    {
      id: 1,
      titulo: 'Estudar JavaScript',
      descricao: '',
      prioridade: enums.Prioridade.URGENTE,
      status: enums.Status.PENDENTE
    },
    {
      id: 2,
      titulo: 'Estudar TypeScript',
      descricao: 'Rever aula 2 do modulo',
      prioridade: enums.Prioridade.URGENTE,
      status: enums.Status.PENDENTE
    },
    {
      id: 3,
      titulo: 'Estudar React',
      descricao: 'Praticar o useEffect',
      prioridade: enums.Prioridade.URGENTE,
      status: enums.Status.PENDENTE
    }
  ]
}

const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((tarefa) => tarefa.id !== action.payload)
    }
  }
})

export const { remover } = tarefasSlice.actions

export default tarefasSlice.reducer
