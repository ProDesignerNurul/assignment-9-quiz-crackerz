import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Main/Main';
import Quizes from './components/Quizes/Quizes';
import Statistic from './components/Statistic/Statistic';

function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <Main></Main>, children: [
        {
          path: '/', element: <Quizes></Quizes>
        },
        {
          path: '/quizes', element: <Quizes></Quizes>
        },
        {
          path: '/statistic', element: <Statistic></Statistic>
        }
      ]
    }
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
