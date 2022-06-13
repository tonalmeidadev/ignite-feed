import { PencilLine } from 'phosphor-react'
import Avatar from './Avatar'

import styles from './sidebar.module.css'

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
        className={styles.cover}
      />
      <div className={styles.profile}>
        <Avatar src="https://github.com/otonalmeidas.png" />
        <strong>Ton Almeida</strong>
        <span>Front-End Developer</span>
      </div>
      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}