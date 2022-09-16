import { useSelector, useDispatch } from 'react-redux';
import TodoList from '../components/Todo/TodoList';

const TodoListContainer = () => {
	const { todoReducer } = useSelector((state) => state);
	
	const dispatch = useDispatch();
	const atRemoveItem = (id) => {
		dispatch({
			type: 'DELETE',
  		id,
		})
	}

	return <TodoList todos={todoReducer} atRemoveItem={atRemoveItem} />;
};
export default TodoListContainer;
