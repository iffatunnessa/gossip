
import './App.css';
import Chat from './component/Chat';
import {useSelector} from 'react-redux'
import Sidebar from './component/Sidebar';
import {selectUser} from './component/userSlice';


function App() {
  const user = useSelector(selectUser);
  return (
    <div className="App">
      {user ? (
        <>
        <Sidebar/>
        <Chat/>
        </>
      ):(
        <h2>you need to login</h2>
      )}
    </div>
  );
}

export default App;
