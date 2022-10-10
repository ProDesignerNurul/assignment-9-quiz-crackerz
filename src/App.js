import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Main/Main';
import Quizes from './components/Quizes/Quizes';
import Statistic from './components/Statistic/Statistic';
import Blogs from './components/Blogs/Blogs';
import QuizDetails from './components/QuizDetails/QuizDetails';

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
        },
        {
          path: '/quizes/:quizesId', 
          loader: ({params}) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizesId}`)
          },
          element: <QuizDetails></QuizDetails>
        }
      ]
    },
    {
      path: '*', element: <h1>This Elements Not Found</h1>
    }
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
