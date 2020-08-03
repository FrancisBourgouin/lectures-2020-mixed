import React from 'react';
import { storiesOf } from '@storybook/react'
import Task from '../components/Task'
import TaskList from '../components/TaskList'
import PriorityLevel from '../components/PriorityLevel'


const tasks = [
  { overdue: false, priorityLevel: 0, description: "Graham water the tomato plants" },
  { overdue: true, priorityLevel: 1, description: "Rob look after the grass eating dog" },
  { overdue: false, priorityLevel: 2, description: "Jeremy keep your webcam off because of latency" },
  { overdue: true, priorityLevel: 3, description: "Francis likes fried chicken, needs to order tonight" },
  { overdue: false, priorityLevel: 4, description: "Hanna seems to be standing, should sit later." },
]

storiesOf("The super Task item component")
  .add('Overdue', () => <Task overdue={true} >I am overdue <PriorityLevel level={0} /></Task>)
  .add('On Schedule', () => <Task >I am on Schedule <PriorityLevel level={1} /></Task>)
  .add('Without Text', () => <Task></Task>)
  .add('With Text', () => <Task>Some text</Task>)
  .add('With a Lot of Text', () => <Task>Picky people pick peanut butter</Task>)

storiesOf("The majestic container of tasks")
  .add('Empty', () => <TaskList />)
  .add('Full', () => <TaskList tasks={tasks} />)

