import { useEffect, useState } from 'react'
import { TasksProps } from '../../interface/tasks'
import styles from './index.module.css'
import { ListTasks } from './List'

interface Task {
  newTask: string
}

export function TasksPainel({ newTask }: Task) {
  const [tasks, setTasks] = useState<TasksProps[]>([])
  const [taskFinished, setTaskFinished] = useState(0);

  useEffect(() => {
    function checkIfTaskAlreadyCreated() {
      const task = tasks.filter(task => task.name === newTask)
      return task.length > 0 ? true : false
    }

    if (newTask) {
      const body = {
        isDone: false,
        name: newTask
      }

      const isTaskCreated = checkIfTaskAlreadyCreated()

      if (isTaskCreated) {
        console.log('evento cadastrado')
        return
      }
      setTasks(prevTasks => [...prevTasks, body])
    }
  }, [newTask])

  useEffect(() => {
    
  },[taskFinished])
  function calculationTasksDone() {
    let count = 0
    tasks.map(allTasks => {
      if (allTasks.isDone) {
        count += 1
      }
    })

    return count
  }

  return (
    <section>
      <div className={styles.containerTask}>
        <p className={styles.createTask}>
          Tarefas criadas <span>{tasks.length}</span>
        </p>
        <p className={styles.countTasks}>
          Concluídas <span>{calculationTasksDone()}</span>
        </p>
      </div>

      {tasks.length === 0 ? (
        <div className={styles.containerEmptyTasks}>
          <img src="/image.png" alt="" width={56} height={56} />

          <div>
            <p className={styles.containerEmptyTasksFirstText}>
              Você ainda não tem tarefas cadastradas
            </p>
            <p className={styles.containerEmptyTasksFSecondText}>
              Crie tarefas e organize seus itens a fazer
            </p>
          </div>
        </div>
      ) : (
        <>
          {tasks.map((task, index) => (
            <ListTasks key={index} name={task.name} isDone={task.isDone} />
          ))}
        </>
      )}
    </section>
  )
}
