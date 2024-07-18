import './index.css';
import Header from './components/Header';
import Board from './components/Board';
import { TasksProvider } from './context/TasksContext';
import ThemeProvider from './context/ThemeContext';

const App = () => {
  return (
    <ThemeProvider>
      <TasksProvider>
        <div className='bg-white dark:bg-black text-black dark:text-white h-screen flex flex-col justify-center items-center overflow-hidden'>
          <Header />
          <Board />
        </div>
      </TasksProvider>
    </ThemeProvider>
  );
}

export default App;
