import './index.css';
import Header from './components/Header';
import Board from './components/Board';
import { TasksProvider } from './context/TasksContext';

const App = () => {
  return (
    <TasksProvider>
      <div className='h-screen flex flex-col justify-center items-center bg-white overflow-hidden'>
        <Header />
        <Board />
      </div>
    </TasksProvider>
  );
}

export default App;
