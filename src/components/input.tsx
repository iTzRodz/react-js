import styles from './input.module.css';

export function Input () {
  return (
    <div className={styles.input} style={{  width: '100%' }}>
      <input type="text" placeholder="Adicione uma nova tarefa" />
    </div>
  )
}