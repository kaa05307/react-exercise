import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import TodoForm from './TodoForm';
import TodoFormContainer from '../../containers/TodoFormContainer';
import TodoItem from './TodoItem';

import './todo.scss';

// const initialList = [
// 	{id: 1, text: '你好啊'},
// 	{id: 2, text: '我很好'},
// ]

const Todo = () => {
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
	const atRemoveItem = (id) => {
		dispatch({
			type: 'DELETE',
  		id,
		})
	}

	return (
		<div className="c-todo">
			<TodoFormContainer />
      <table className="c-todo__table">
        <tbody>
					{
						todos.map((item) => (<TodoItem key={item.id} id={item.id} text={item.text} onRemoveClick={atRemoveItem} />))
					}
        </tbody>
      </table>
    </div>
	);
}
 
export default Todo;
