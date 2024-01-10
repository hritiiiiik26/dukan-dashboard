
import './App.css';
import LeftBar from './LeftBar/LeftBar';
import RightBar from './RightBar/RightBar';
function App() {
  return (
    <div className="App">
    <div className="left_bar">
    <LeftBar/>
    </div>
    <div className="right_bar">
<RightBar/>
    </div>
    </div>
  );
}

export default App;
