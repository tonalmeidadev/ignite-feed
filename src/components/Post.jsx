import Avatar from './Avatar'
import Comment from './Comment'
import styles from './post.module.css'

export default function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://github.com/otonalmeidas.png" />
          <div className={styles.avatarInfo}>
            <strong>Ton Almeida</strong>
            <span>Front-End Developer</span>
          </div>
        </div>
        <time title='10 de Junho às 22 horas' dateTime='2022-06-10 22:00:00'>Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>Fala galera! 🤲</p>
        <p>Acabei de subir mais um projeto no meu portfólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
        <p>
          <a href='#'>👉 jane.design/doctorcare</a>
        </p>
        <p>
          <a href='#'>#novoprojeto</a>{' '}
          <a href='#'>#nlw</a>{' '}
          <a href='#'>#rocketseat</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          placeholder='Deixe seu comentário'
        />
        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  )
}