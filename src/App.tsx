import { Header } from './components/Header'

import styles from './App.module.css'
import './global.css'
import Input from './components/input'
import { Button } from './components/button'
import { TasksPainel } from './components/Tasks'
import { useRef, useState } from 'react'

function App() {
  const task = useRef<HTMLInputElement>(null)
  const [newTask, setNewTask] = useState<string>('')

  function handleAddNewTask() {
    if (task.current?.value === newTask) {
      console.log('evento cadastrado')

      task.current.value = ''
      return
    }

    if (task.current?.value) {
      setNewTask(task.current?.value)
      task.current.value = ''
    }
  }
  return (
    <>
      <Header />
      <main className={styles.wrapper}>
        <section className={styles.container}>
          <Input required ref={task} />
          <Button onClick={handleAddNewTask} />
        </section>

        <TasksPainel newTask={newTask} />
      </main>
    </>
  )
}

export default App
