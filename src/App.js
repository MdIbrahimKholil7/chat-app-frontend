import './App.css';
import { Routes, Route } from 'react-router-dom';
import SignUp from './components/share/SignUp';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<SignUp />} />
        <Route path='/signUp' element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
