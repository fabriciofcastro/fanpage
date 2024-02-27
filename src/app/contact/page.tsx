import style from './contact.module.scss'

export const Contact = () => {
  return (
    <section className={ style.contact }>
      <h2>Contato</h2>

      <form action="/formulario-contato" method="post" className={ style.form }>
        <div className={ style.input_box }>
          <label htmlFor="nome">Nome completo</label>
          <input type="text" placeholder='Nome completo' id="nome" />
          <label htmlFor="email"> E-mail </label>
          <input type="email" placeholder='Endereço de e-mail' id="email" />
        </div>
        <div className={ style.input_box }>
        <label htmlFor="telefone"> Telefone </label>
          <input type="tel" placeholder='Numero de contato' id="telefone" />
          <label htmlFor="assunto"> Assunto da mensagem </label>
          <input type="text" placeholder='Assunto' id="assunto" />
        </div>

        <label htmlFor="mensagem"> Deixe sua mensagem </label>
        <textarea name="" id="mensagem" cols={ 20 } rows={ 10 } placeholder='Digite sua mensagem' ></textarea>

        <input type="submit" value="Enviar mensagem" className={ style.btn } />
      </form>
    </section>
  )
}

export default Contact

