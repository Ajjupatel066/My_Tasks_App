import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

import TaskItem from '../TaskItem'
import TagItem from '../TagItem'

import {
  AppContainer,
  FormContainer,
  Heading,
  TagsAndTaskContainer,
  InputContainer,
  InputElement,
  LabelElement,
  AddTaskButton,
  TagsTitle,
  TasksItems,
  NoTaskText,
  TagsList,
} from './styledComponents'

const tagsList = [
  {
    optionId: 'HEALTH',
    displayText: 'Health',
  },
  {
    optionId: 'EDUCATION',
    displayText: 'Education',
  },
  {
    optionId: 'ENTERTAINMENT',
    displayText: 'Entertainment',
  },
  {
    optionId: 'SPORTS',
    displayText: 'Sports',
  },
  {
    optionId: 'TRAVEL',
    displayText: 'Travel',
  },
  {
    optionId: 'OTHERS',
    displayText: 'Others',
  },
]

class MyTasks extends Component {
  state = {
    task: '',
    tag: tagsList[0].optionId,
    tasksList: [],
    activeTag: 'INITIAL',
  }

  addItemToTaskList = event => {
    event.preventDefault()
    const {task, tag} = this.state
    const taskDetails = {
      id: uuidv4(),
      taskText: task,
      taskTag: tag,
    }
    if (task.length !== 0) {
      this.setState(prevState => ({
        tasksList: [...prevState.tasksList, taskDetails],
        task: '',
        tag: '',
      }))
    }
  }

  selectTag = id => {
    const {activeTag} = this.state

    if (id === activeTag) {
      this.setState({activeTag: 'INITIAL'})
    } else {
      this.setState({activeTag: id})
    }
  }

  onChangeTask = event => {
    this.setState({task: event.target.value})
  }

  onChangeTag = event => {
    this.setState({tag: event.target.value})
  }

  render() {
    const {task, tag, tasksList, activeTag} = this.state
    const newList = tasksList.filter(eachTask => eachTask.taskTag === activeTag)
    const filterTaskList = activeTag === 'INITIAL' ? tasksList : newList
    console.log(tasksList)
    return (
      <AppContainer>
        <FormContainer onSubmit={this.addItemToTaskList}>
          <Heading>Create a task!</Heading>
          <InputContainer>
            <LabelElement htmlFor="task">Task</LabelElement>
            <InputElement
              type="text"
              id="task"
              onChange={this.onChangeTask}
              value={task}
              placeholder="Enter the task here"
            />
          </InputContainer>
          <InputContainer>
            <LabelElement htmlFor="tag">Tags</LabelElement>
            <InputElement
              as="select"
              id="tag"
              onChange={this.onChangeTag}
              value={tag}
            >
              {tagsList.map(eachTag => (
                <option key={eachTag.optionId} value={eachTag.optionId}>
                  {eachTag.displayText}
                </option>
              ))}
            </InputElement>
          </InputContainer>
          <AddTaskButton type="submit">Add Task</AddTaskButton>
        </FormContainer>
        <TagsAndTaskContainer>
          <TagsTitle>Tags</TagsTitle>
          <TagsList>
            {tagsList.map(eachTag => (
              <TagItem
                key={eachTag.optionId}
                tagDetails={eachTag}
                activeTag={eachTag.optionId === activeTag}
                selectTag={this.selectTag}
              />
            ))}
          </TagsList>
          <TagsTitle>Tasks</TagsTitle>
          <TasksItems>
            {tasksList.length === 0 ? (
              <div>
                <NoTaskText>No Tasks Added Yet</NoTaskText>
              </div>
            ) : (
              filterTaskList.map(eachTask => (
                <TaskItem key={eachTask.id} taskDetails={eachTask} />
              ))
            )}
          </TasksItems>
        </TagsAndTaskContainer>
      </AppContainer>
    )
  }
}

export default MyTasks
