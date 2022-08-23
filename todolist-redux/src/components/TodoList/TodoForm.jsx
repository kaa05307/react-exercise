import React, { useState } from 'react';

const TodoForm = ({ onAddItem }) => {
	const [input, setInput] = useState('');

	const atChange = (e) => {
    setInput(e.target.value);
  };

	const atAddClick = (e) => {
		e.preventDefault();
		if(input === ''){
			return;
		}
		setInput('');
    onAddItem(input);
  }

	return (
		<form className='c-todoList__form'>
			<input className="c-todoList__input" type="text" placeholder='我是一個可愛的輸入框' value={input} onChange={atChange} />
			<button className="c-todoList__button" onClick={atAddClick}>新增</button>
		</form>
	);
}
 
export default TodoForm;