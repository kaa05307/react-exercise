import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="todo">
      <input type="text" placeholder='我是一個可愛的輸入框' />
      <button>新增</button>
      <table>
        <tr>
          <td>你好啊</td>
          <td><button>刪除</button></td>
        </tr>
        <tr>
          <td>我很好</td>
          <td><button>刪除</button></td>
        </tr>
      </table>
    </div>
  );
}

export default App;
