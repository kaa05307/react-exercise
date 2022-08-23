import React from 'react';

const TodoItem = ({ id, text, onRemoveClick }) => {
	const atRemoveClick = () => {
    onRemoveClick(id);
  };

  return (
		<tr key={id}>
			<td>{text}</td>
			<td><button onClick={atRemoveClick}>刪除</button></td>
		</tr>
  );
};

export default TodoItem;