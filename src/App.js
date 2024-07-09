import './index.css';
import Header from './components/Header';
import Board from './components/Board';

const App = () => {
  return (
    <div className='h-screen flex flex-col justify-center items-center bg-white overflow-hidden'>
      <Header />
      <Board />
    </div>
  );
}

export default App;
