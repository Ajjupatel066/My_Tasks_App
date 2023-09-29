import {TaskListItem, Task, TaskTag} from './styledComponents'

const TaskItem = props => {
  const {taskDetails} = props
  const {taskText, taskTag} = taskDetails

  return (
    <TaskListItem>
      <Task>{taskText}</Task>
      <TaskTag>{taskTag}</TaskTag>
    </TaskListItem>
  )
}

export default TaskItem
