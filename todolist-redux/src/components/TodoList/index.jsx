import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';
import './todoList.scss';

// const initialList = [
// 	{id: 1, text: '你好啊'},
// 	{id: 2, text: '我很好'},
// ]

const TodoList = () => {
	// const [list, setList] = useState(initialList);
	// const atAddItem = (text) => {
	// 	const item = {
	// 		id: new Date().getTime().toString(),
	// 		text
	// 	}
	// 	setList((prev) => prev.concat(item));
	// }
  // const atRemoveItem = (id) => {
	// 	setList((prevList) => {
	// 		return prevList.filter(item => {
	// 			return item.id !== id;
	// 		});
	// 	})
  // }

	const { todos } = useSelector((state) => state);
	
	const dispatch = useDispatch();
	const atAddItem = (text) => {
		dispatch({
			type: 'ADD_TODO',
  		text,
		})
	}
	const atRemoveItem = (id) => {
		dispatch({
			type: 'DELETE_TODO',
  		id,
		})
	}

	return (
		<div className="c-todoList">
			<TodoForm onAddItem={atAddItem} />
      <table className="c-todoList__table">
        <tbody>
					{
						todos.map((item) => (<TodoItem key={item.id} id={item.id} text={item.text} onRemoveClick={atRemoveItem} />))
					}
        </tbody>
      </table>
    </div>
	);
}
 
export default TodoList;
