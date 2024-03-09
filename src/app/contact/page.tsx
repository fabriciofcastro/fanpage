import style from './contact.module.css'

const Contact = () => {
  return (
    <section className={ style.contact }>
      <h2>Contato</h2>

      <form method="POST" action="https://formsubmit.co/fabriciofeitosacastro@gmail.com" className={ style.form }>
        <input type="hidden" name="_next" value="https://www.fabriciofcastro.com.br/contact/sucesso" />
        <input type="hidden" name="_autoresponse" value="Recebi sua menssagem em breve retornarei" />
        <div className={ style.input_box }>
          <label htmlFor="nome">Nome completo</label>
          <input type="text" name="nome" placeholder='Nome completo' id="nome"  required/>
          <label htmlFor="email"> E-mail </label>
          <input type="email" name="email" placeholder='Endereço de e-mail' id="email" required/>
        </div>
        <div className={ style.input_box }>
        <label htmlFor="telefone"> Telefone </label>
          <input type="tel" name="telefone" placeholder='Numero de contato' id="telefone" required/>
          <label htmlFor="assunto"> Assunto da mensagem </label>
          <input type="text" name="assunto" placeholder='Assunto' id="assunto" required/>
        </div>

        <label htmlFor="mensagem"> Deixe sua mensagem </label>
        <textarea name="" id="mensagem" cols={ 20 } rows={ 10 } placeholder='Descreva sua mensagem' ></textarea>

        <input type="submit" value="Enviar mensagem" className={ style.btn } />
      </form>
    </section>
  )
}

export default Contact

