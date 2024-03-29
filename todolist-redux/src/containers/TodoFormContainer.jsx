import { useDispatch } from 'react-redux';
import TodoForm from '../components/Todo/TodoForm';

const TodoFormContainer = () => {
	const dispatch = useDispatch();
	const atAddItem = (text) => {
		dispatch({
			type: 'ADD',
  		text,
		})
	}

	return <TodoForm onAddItem={atAddItem} />;
};
export default TodoFormContainer;
