import Link from 'next/link'
import style from './notFound.module.css'

const NotFound = () => {
  return (
    <div className={ style.container }>
      <div className={ style.error }>
        <div className={ style.wrap }>
          <div className={ style.notFound404 }>
            <pre>
              <code className={ style.code }>
                <div>
                  <span className="green">&lt;!</span><span>DOCTYPE html</span><span className={ style.white }>&gt;</span>
                </div>
                <span className={ style.orange }>&lt;head&gt;</span>
                <span className={ style.orange }>&lt;style&gt;</span>
                <div>
                  <span className={ style.green }>
                    everything
                  </span>
                  :
                  <span className={ style.blue }>
                    awesome
                  </span>;
                </div>

                <span className={ style.orange }>&lt;/style&gt;</span>
                <span className={ style.orange }>&lt;/head&gt;</span>
                <span className={ style.orange }>&lt;body&gt;</span>
                ERROR 404!
                Página não encontrada!
                <span className={ style.comment }>&lt;!--The file you are looking for,
                  is not where you think it is.--&gt;
                </span>
                <span className={ style.orange }></span>
                <span className={ style.orange }>&lt;/body&gt;</span>
                <div>
                  <span className="green">&lt;</span><span>/html</span><span className={ style.white }>&gt;</span>
                </div>
              </code>
              <br />
              <code className={ `${style.info} ${style.code}` }>
                <br />
              </code>
            </pre>

          </div>
          <Link href="/" className={ style.button }>Voltar para home</Link>
        </div>

      </div>
    </div>
  )
}


export default NotFound