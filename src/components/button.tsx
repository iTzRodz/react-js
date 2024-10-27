import { ButtonHTMLAttributes } from 'react';
import styles from './button.module.css';
import TrashIcon from '../assets/imgs/icon/trash';
import CirclePlus from '../assets/imgs/icon/circle-plus';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  hasDeletedIcon?: boolean
}

export function Button({ hasDeletedIcon = false }: ButtonProps) {
  return (
    <>
      {hasDeletedIcon ? <TrashIcon /> : (
        <>
          <button type="button" className={styles.button} >
            Criar
            <CirclePlus />
          </button>
        </>
      )}
    </>
  )
}