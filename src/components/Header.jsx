import styles from './header.module.css'

import Logo from '../assets/logo.svg'

export default function Header() {
  return (
    <header className={styles.header}>
      <img src={Logo} alt="Logotipo do Ignite Feed" />
    </header>
  )
}