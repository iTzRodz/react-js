import CheckIcon from '../../../assets/imgs/icon/check-icon'
import CheckedIcon from '../../../assets/imgs/icon/checked-icon'
import TrashIcon from '../../../assets/imgs/icon/trash'
import { TasksProps } from '../../../interface/tasks'
import { Button } from '../../button'
import styles from './index.module.css'

export function ListTasks({ isDone, name, handleStatusChange, handleDeleteTask }: TasksProps) {

  function finishTask () {
    if (!handleStatusChange) return
    handleStatusChange(!isDone, name)
  }

  function deleteTask() {
    if (!handleDeleteTask) return
    handleDeleteTask(name)
  }

  return (
    <div className={styles.containerListTask}>
      <div className={styles.painelTask}>
        <Button hasDeletedIcon onClick={() => finishTask()} type='button' name={isDone ? 'finished' : 'todo'}>
          {isDone ? <CheckedIcon /> : <CheckIcon />}
        </Button>
        <p className={`${styles.taskName} ${isDone ? styles.taskNameFinished : ''}`}>{name}</p>
        <Button hasDeletedIcon onClick={deleteTask}>
          <TrashIcon/>  
        </Button>
      </div>
    </div>
  )
}
