import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, atRemoveItem }) => {
  return (
		<table className="c-todo__table">
			<tbody>
				{
					todos.map((item) => (<TodoItem key={item.id} id={item.id} text={item.text} onRemoveClick={atRemoveItem} />))
				}
			</tbody>
		</table>
  );
};

export default TodoList;