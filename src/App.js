import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Main/Main';
import Quizes from './components/Quizes/Quizes';
import Statistic from './components/Statistic/Statistic';
import Blogs from './components/Blogs/Blogs';

function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <Main></Main>, children: [
        {
          path: '/', 
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Quizes></Quizes>
        },
        {
          path: '/quizes', 
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Quizes></Quizes>
        },
        {
          path: '/statistic', element: <Statistic></Statistic>
        },
        {
          path: '/blogs', element: <Blogs></Blogs>
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
