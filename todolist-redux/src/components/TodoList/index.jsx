import React, { useState } from 'react';

const initialList = [
	{
		Id: 1,
		Name: '你好啊'
	},
	{
		Id: 2,
		Name: '我很好'
	},
	{
		Id: 3,
		Name: '那你呢'
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

  const onRemoveClick = () => {
    console.log('remove');
  }

	const onAddItem = (text) => {
		console.log('text: ', text);
		const item = {
			Id: new Date().getTime().toString(),
			Name: text
		}
		setList((prev) => prev.concat(item));
	}

	return (
		<div className="c-todolist">
      <input type="text" placeholder='我是一個可愛的輸入框' value={input} onChange={onChange} />
      <button onClick={onAddClick}>新增</button>
      <table>
        <tbody>
					{
						list.map((objTodo) => {
							const { Id, Name } = objTodo;
							return (
								<tr key={Id}>
									<td>{Name}</td>
									<td><button onClick={onRemoveClick}>刪除</button></td>
								</tr>
							)
						})
					}
        </tbody>
      </table>
    </div>
	);
}
 
export default TodoList;