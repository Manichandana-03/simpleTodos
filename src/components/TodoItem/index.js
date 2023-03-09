// Write your code here

import './index.css'

const TodoItem = props => {
  const {todoListDetails, deleteTodo} = props
  const {id, title} = todoListDetails

  const onDelete = () => {
    deleteTodo(id)
  }

  return (
    <li className="todo-item">
      <p className="title">{title}</p>
      <button type="button" className="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
