const Formulario = () => {
  return (
    <>
      <form>
        <input type="text" placeholder="Título" />
        <textarea placeholder="Descrição da tarefa" />
        <input name="prioridade" type="radio" id="urgente" />
        <label htmlFor="urgente">Urgente</label>
        <input name="prioridade" type="radio" id="importante" />
        <label htmlFor="urgente">Importante</label>
        <input name="prioridade" type="radio" id="normal" />
        <label htmlFor="urgente">Normal</label>
        <button type="submit">Cadastrar</button>
      </form>
    </>
  )
}

export default Formulario
