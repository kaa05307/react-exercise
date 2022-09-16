import React from 'react';
import TodoFormContainer from '../../containers/TodoFormContainer';
import TodoListContainer from '../../containers/TodoListContainer';
import './todo.scss';

const Todo = () => {
	return (
		<div className="c-todo">
			<TodoFormContainer />
			<TodoListContainer />
    </div>
	);
}
 
export default Todo;
