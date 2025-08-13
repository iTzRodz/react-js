import { useEffect, useState } from "react";
import { TasksProps } from "../../interface/tasks";
import styles from "./index.module.css";
import { ListTasks } from "./List";

interface Task {
  newTask: string;
}

export function TasksPainel({ newTask }: Task) {
  const [tasks, setTasks] = useState<TasksProps[]>([]);

  useEffect(() => {
    function checkIfTaskAlreadyCreated() {
      const task = tasks.filter((task) => task.name === newTask);
      return task.length > 0 ? true : false;
    }

    if (newTask) {
      const body = {
        isDone: false,
        name: newTask,
      };

      const isTaskCreated = checkIfTaskAlreadyCreated();

      if (isTaskCreated) {
        console.log("evento cadastrado");
        return;
      }
      setTasks((prevTasks) => [...prevTasks, body]);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newTask]);

  function calculationTasksDone() {
    let count = 0;
    tasks.map((allTasks) => {
      if (allTasks.isDone) {
        count += 1;
      }
    });

    return count;
  }

  function handleStatusChange(status: boolean, name: string) {
    setTasks((prevTasks) =>
      prevTasks
        .map((task) =>
          task.name === name ? { ...task, isDone: status } : task
        )
        .sort((a, b) => Number(a.isDone) - Number(b.isDone))
    );
  }

  function handleDeleteTask(name: string) {
    setTasks((prevTasks) => {
      return prevTasks.filter((task) => task.name.toLocaleLowerCase() !== name.toLocaleLowerCase());
    });
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
          {tasks.map((task) => (
            <ListTasks
              key={task.name}
              name={task.name}
              isDone={task.isDone}
              handleStatusChange={handleStatusChange}
              handleDeleteTask={handleDeleteTask}
            />
          ))}
        </>
      )}
    </section>
  );
}
