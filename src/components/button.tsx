import { ButtonHTMLAttributes } from 'react'
import styles from './button.module.css'
import TrashIcon from '../assets/imgs/icon/trash'
import CirclePlus from '../assets/imgs/icon/circle-plus'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  hasDeletedIcon?: boolean
}

export function Button({ hasDeletedIcon = false, children ,...props }: ButtonProps) {
  return (
    <>
      {hasDeletedIcon ? (
        <button type='button' className={styles.buttonCheck} {...props}>
          {children}
          {/* <TrashIcon /> */}
        </button>
      ) : (
        <>
          <button type="button" className={styles.buttonCreateTask} {...props}>
            Criar
            <CirclePlus />
          </button>
        </>
      )}
    </>
  )
}
