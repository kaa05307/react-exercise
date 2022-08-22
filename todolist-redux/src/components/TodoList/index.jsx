import React, { useState } from 'react';
import TodoItem from './TodoItem';

const initialList = [
	{
		id: 1,
		text: '你好啊'
	},
	{
		id: 2,
		text: '我很好'
	},
	{
		id: 3,
		text: '那你呢'
	},
]

const TodoList = () => {
	const [input, setInput] = useState('');
	const [list, setList] = useState(initialList);

  const onChange = (e) => {
    setInput(e.target.value);
  };

  const onAddClick = () => {
    console.log('add');
		if(input === ''){
			return;
		}
		setInput('');
    onAddItem(input);
  }

	const onAddItem = (text) => {
		const item = {
			id: new Date().getTime().toString(),
			text
		}
		setList((prev) => prev.concat(item));
	}

  const onRemoveClick = (id) => {
		setList((prevList) => {
			return prevList.filter(list => {
				return list.id !== id;
			});
		})
  }

	return (
		<div className="c-todolist">
      <input type="text" placeholder='我是一個可愛的輸入框' value={input} onChange={onChange} />
      <button onClick={onAddClick}>新增</button>
      <table>
        <tbody>
					{
						list.map((item) => (<TodoItem key={item.id} id={item.id} text={item.text} onRemoveClick={onRemoveClick} />))
					}
        </tbody>
      </table>
    </div>
	);
}
 
export default TodoList;