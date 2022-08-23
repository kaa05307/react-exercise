import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';
import './todoList.scss';

const initialList = [
	{id: 1, text: '你好啊'},
	{id: 2, text: '我很好'},
]

const TodoList = () => {
	const [list, setList] = useState(initialList);

	const atAddItem = (text) => {
		const item = {
			id: new Date().getTime().toString(),
			text
		}
		setList((prev) => prev.concat(item));
	}

  const atRemoveItem = (id) => {
		setList((prevList) => {
			return prevList.filter(list => {
				return list.id !== id;
			});
		})
  }

	return (
		<div className="c-todolist">
			<TodoForm onAddItem={atAddItem} />
      <table className="c-todolist__table">
        <tbody>
					{
						list.map((item) => (<TodoItem key={item.id} id={item.id} text={item.text} onRemoveClick={atRemoveItem} />))
					}
        </tbody>
      </table>
    </div>
	);
}
 
export default TodoList;