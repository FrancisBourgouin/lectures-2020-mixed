import React from 'react'

const PriorityLevel = props => {
  let text = ""
  switch (props.level) {
    case 0:
      text = "🤨"
      break;
    case 1:
      text = "😃"
      break;
    case 2:
      text = "😮"
      break;
    default:
      text = "🧨"
  }
  return <span>{text}</span>
}

export default PriorityLevel