import React, { useState } from 'react';

const TodoList = () => {
	const [name, setName] = useState('');
  const atChange = (e) => {
    setName(e.target.value);
  };
  const atAddClick = () => {
    console.log('add');
  }
  const atRemoveClick = () => {
    console.log('remove');
  }

	const todoData = [
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

	return (
		<div className="todolist">
      <input type="text" placeholder='我是一個可愛的輸入框' value={name} onChange={atChange} />
      <button onClick={atAddClick}>新增</button>
      <table>
        <tbody>
					{
						todoData.map((objTodo) => {
							const { Id, Name } = objTodo;
							return (
								<tr key={Id}>
									<td>{Name}</td>
									<td><button onClick={atRemoveClick}>刪除</button></td>
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