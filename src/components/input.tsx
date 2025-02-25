import { InputHTMLAttributes, forwardRef } from 'react'
import styles from './input.module.css'

type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return (
    <input
      className={styles.input}
      type="text"
      placeholder="Adicione uma nova tarefa"
      ref={ref} // repassando a ref para o input
      {...props} // espalhando as demais propriedades
    />
  );
});

export default Input