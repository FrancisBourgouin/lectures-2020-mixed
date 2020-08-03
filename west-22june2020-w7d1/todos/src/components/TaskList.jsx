import React from 'react'
import Task from './Task'
import PriorityLevel from './PriorityLevel'



const TaskList = props => {
  let parsedTasks = ""
  if (Array.isArray(props.tasks)) {
    parsedTasks = props.tasks.map(task => (
      <Task overdue={task.overdue}>
        <PriorityLevel level={task.priorityLevel} />
        {task.description}
      </Task>
    ))
  } else {
    parsedTasks = "DUDE THE ARRAY IS EMPTY YOU'RE FREE"
  }

  return (
    <ul>
      {parsedTasks}
    </ul>
  )
}

export default TaskList