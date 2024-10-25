import { PencilLine } from 'phosphor-react'
import styles from './SideBar.module.css';
import { Avatar } from './Avatar';

export function SideBar() {
  return (
    <>
      <aside className={styles.sideBar}>
        <img
          className={styles.cover}
          src="https://images.unsplash.com/photo-1566837945700-30057527ade0?q=60&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />

        <div className={styles.profile}>
          <Avatar src="https://github.com/iTzRodz.png"/>

          <strong>Rodolfo Carvalho</strong>
          <span>Web Developer</span>
        </div>

        <footer>
          <a href="#">
          <PencilLine size={20}/>
            Editar seu perfil
            </a>
        </footer>
      </aside>
    </>
  );
}