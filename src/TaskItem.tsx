import {
  CheckCircle as CheckCircleIcon,
  Circle as CircleIcon,
  Trash as TrashIcon,
} from 'phosphor-react';
import styles from './TaskItem.module.css';

type Task = {
  id: string;
  name: string;
  isCompleted: boolean;
};

type TaskItemProps = {
  task: Task;
  onRemoveTask: (id: string) => void;
  onToggleCompleteTaskItem: (task: Task) => void;
};

export function TaskItem({
  task,
  onRemoveTask,
  onToggleCompleteTaskItem,
}: TaskItemProps) {
  function handleRemoveTask() {
    onRemoveTask(task.id);
  }

  function handleToggleCompleteTaskItem() {
    onToggleCompleteTaskItem(task);
  }

  return (
    <li className={styles['TaskItem__container']}>
      {task.isCompleted ? (
        <CheckCircleIcon
          className={styles['TaskItem__icon']}
          size={24}
          color="#5E60CE"
          onClick={handleToggleCompleteTaskItem}
        />
      ) : (
        <CircleIcon
          className={styles['TaskItem__icon']}
          size={24}
          color="#4EA8DE"
          onClick={handleToggleCompleteTaskItem}
        />
      )}
      <p
        className={`${styles['TaskItem__description']} ${
          task.isCompleted && styles['TaskItem__description--completed']
        }`}
      >
        {task.name}
      </p>
      <TrashIcon
        className={styles['TaskItem__icon']}
        size={24}
        color="#808080"
        onClick={handleRemoveTask}
      />
    </li>
  );
}
