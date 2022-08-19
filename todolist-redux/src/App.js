import { useState } from 'react';
import './App.css';

function App() {
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

  return (
    <div className="todo">
      <input type="text" placeholder='我是一個可愛的輸入框' value={name} onChange={atChange} />
      <button onClick={atAddClick}>新增</button>
      <table>
        <tbody>
          <tr>
            <td>你好啊</td>
            <td><button onClick={atRemoveClick}>刪除</button></td>
          </tr>
          <tr>
            <td>我很好</td>
            <td><button onClick={atRemoveClick}>刪除</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
