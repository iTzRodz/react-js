import CheckIcon from '../../../assets/imgs/icon/check-icon'
import CheckedIcon from '../../../assets/imgs/icon/checked-icon'
import TrashIcon from '../../../assets/imgs/icon/trash'
import { TasksProps } from '../../../interface/tasks'
import { Button } from '../../button'
import styles from './index.module.css'

export function ListTasks({ isDone, name }: TasksProps) {
  function finishTask (status: boolean) {
    console.log(status)
  }

  function handleDeleteTask() {
    
  }
  return (
    <div className={styles.containerListTask}>
      <div className={styles.painelTask}>
        {/* <Button hasDeletedIcon/> */}
        <Button hasDeletedIcon onClick={() => finishTask(isDone)} type='button' name={isDone ? 'finished' : 'todo'}>
          {isDone ? <CheckedIcon /> : <CheckIcon />}
        </Button>
        <p className={styles.taskName}>{name}</p>
        <Button hasDeletedIcon onClick={handleDeleteTask}>
          <TrashIcon/>  
        </Button>
      </div>
    </div>
  )
}
