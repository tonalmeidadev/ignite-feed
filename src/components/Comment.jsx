import { ThumbsUp, Trash } from 'phosphor-react'
import Avatar from './Avatar'
import styles from './comment.module.css'

export default function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/otonalmeidas.png" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Ton Almeida</strong>
              <time title='10 de Junho às 22 horas' dateTime='2022-06-10 22:00:00'>Cerca de 1h atrás</time>
            </div>
            <button title='Deletar comentário'>
              <Trash size={24} />
            </button>
          </header>
          <p>
            Muito bom Devon, parabéns!!! 🤲🤲
          </p>
        </div>
        <footer>
          <button>
            <ThumbsUp size={20} />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}