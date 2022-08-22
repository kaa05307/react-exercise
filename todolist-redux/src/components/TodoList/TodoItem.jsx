
import React from 'react';

const TodoItem = ({ id, text, onRemoveClick }) => {
	const atClick = () => {
    onRemoveClick(id);
  };

  return (
		<tr key={id}>
			<td>{text}</td>
			<td><button onClick={atClick}>刪除</button></td>
		</tr>
  );
};

export default TodoItem;