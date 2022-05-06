import logo from './logo.svg';
import './App.css';
import LeftPanel from './components/LeftPanel/LeftPanel';
import Dashboard from './components/Dashboard/Dashboard';
import RightPanel from './components/RightPanel/RightPanel';

function App() {
  return (
    <div className="App">
      <Dashboard />
      {/* <div className='leftPanel'>
        <LeftPanel />
      </div>
      <div className='dashboard'>
        
      </div>
      <div className='rightPanel'>
        <RightPanel /> 
      </div>      */}
           
    </div>
  );
}

export default App;
