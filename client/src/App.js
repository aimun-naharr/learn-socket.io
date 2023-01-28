import io from 'socket.io-client'
import './App.css';
const socket=io.connect('http://localhost:8000')
function App() {
  const sendMsg=()=>{
socket.emit('send_msg', {msg: 'hello'})
  }
  return (
    <div className="App">
      <input type="text" />
      <button onClick={sendMsg}>Send message</button>
    </div>
  );
}

export default App;
