import Task from './components/Task';
import TaskContainer from './components/TaskContainer';
import Header from './components/Header';
import './index.css';

const App = () => {
  return (
    <div className='h-screen flex flex-col justify-center items-center bg-white overflow-hidden'>
      <Header />
      <div className='flex flex-col sm:flex-row justify-around space-y-2 sm:space-y-0 border-2 border-black rounded-lg w-5/6 sm:w-2/3 h-fit sm:h-2/3 mb-4 sm:m-0 py-2 px-4 overflow-y-auto'>
        <TaskContainer title={'To do'} titleColor={'bg-red-200'}>
          <Task text={'hello world'}></Task>
          <Task text={'hello world'}></Task>
          <Task text={'hello world'}></Task>
        </TaskContainer>
        <TaskContainer title={'In progress'} titleColor={'bg-blue-200'}>
          <Task text={'hello world'}></Task>
          <Task text={'hello world'}></Task>
          <Task text={'hello world'}></Task>
        </TaskContainer>
        <TaskContainer title={'Done'} titleColor={'bg-green-200'}>
          <Task text={'hello world'}></Task>
          <Task text={'hello world'}></Task>
          <Task text={'hello world'}></Task>
        </TaskContainer>
      </div>
    </div>
  );
}

export default App;
