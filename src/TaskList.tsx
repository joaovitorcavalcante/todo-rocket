import { ClipboardText as ClipboardTextIcon } from 'phosphor-react';
import { TaskItem } from './TaskItem';

import styles from './TaskList.module.css';

type Task = {
  id: string;
  name: string;
  isCompleted: boolean;
};

type TaskListProps = {
  tasks: Task[];
  removeTaskItem: (taskId: string) => void;
  toggleCompleteTaskItem: (task: Task) => void;
};

export function TaskList({
  tasks,
  removeTaskItem,
  toggleCompleteTaskItem,
}: TaskListProps) {
  function onRemoveTask(taskId: string) {
    removeTaskItem(taskId);
  }

  function onToggleCompleteTaskItem(task: Task) {
    toggleCompleteTaskItem(task);
  }

  return (
    <div className={styles['TaskList__container']}>
      <div className={styles['TaskList__summary']}>
        <p className={styles['TaskList__summary--blue']}>
          Tarefas criadas{' '}
          <span className={styles['TaskList__stats']}>{tasks.length}</span>
        </p>
        <p className={styles['TaskList__summary--purple']}>
          Concluídas{' '}
          <span className={styles['TaskList__stats']}>
            {tasks.length
              ? `${
                  tasks.filter((task) => task.isCompleted === true).length
                } de ${tasks.length}`
              : 0}
          </span>
        </p>
      </div>

      <hr className={styles['TaskList__bar']} />

      {!tasks.length && (
        <div className={styles['TaskList__empty']}>
          <ClipboardTextIcon size={56} className={styles['TaskList__icon']} />
          <p className={styles['TaskList__description']}>
            <strong>Você ainda não tem tarefas cadastradas</strong>
          </p>
          <p className={styles['TaskList__description']}>
            Crie tarefas e organize seus itens a fazer
          </p>
        </div>
      )}

      {tasks.length && (
        <ul className={styles['TaskList__content']}>
          {tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onRemoveTask={onRemoveTask}
              onToggleCompleteTaskItem={onToggleCompleteTaskItem}
            />
          ))}
        </ul>
      )}
    </div>
  );
}
