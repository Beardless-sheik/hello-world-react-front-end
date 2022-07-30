import { Routes, Route } from 'react-router-dom';
import Greeting from './greeting';

function App() {
  return (
    <div>
      <div>
        Hello World
      </div>
      {/* <Greeting /> */}
      <Routes>
        <Route path="/" element={<Greeting />} />
      </Routes>
    </div>
  );
}

export default App;
