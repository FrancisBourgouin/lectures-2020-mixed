import React from 'react'

const Task = props => {
  const style = {
    background: props.overdue ? 'red' : 'green'
  }
  console.log(props.children)
  return (<li style={style}>{props.children}</li>)
}

export default Task


{/* <Task overdue={true} chicken={1} a={"bob"} /> // Task(true)

// Task, what's your props ?
const props = {
  overdue:true,
  chicken:1,
  a:"bob"
} */}

// const someRandomFunction = (a, b) => {
//   return b + a
// }

// someRandomFunction(2,4)