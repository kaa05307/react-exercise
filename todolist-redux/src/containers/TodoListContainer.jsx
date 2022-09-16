import { useSelector, useDispatch } from 'react-redux';
import TodoList from '../components/Todo/TodoList';

const TodoListContainer = () => {
	const { todos } = useSelector((state) => state);
	
	const dispatch = useDispatch();
	const atRemoveItem = (id) => {
		dispatch({
			type: 'DELETE',
  		id,
		})
	}

	return <TodoList todos={todos} atRemoveItem={atRemoveItem} />;
};
export default TodoListContainer;
