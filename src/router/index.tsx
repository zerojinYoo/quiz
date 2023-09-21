import { Outlet, createBrowserRouter } from 'react-router-dom';
import { PATH } from 'constants/path';
import QuestionPage from 'pages/QuestionPage';
import ResultPage from 'pages/ResultPage';
import MainPage from 'pages/MainPage';
import LoadingPage from 'pages/LoadingPage';
import { DefaultLayout } from 'components/@layout';

const router = createBrowserRouter([
  {
    element: (
      <DefaultLayout>
        <Outlet />
      </DefaultLayout>
    ),
    children: [
      {
        path: PATH.MAIN,
        element: <MainPage />,
      },
      {
        path: PATH.QUESTION,
        element: <QuestionPage />,
      },
      {
        path: PATH.LOADING,
        element: <LoadingPage />,
      },
      {
        path: PATH.RESULT,
        element: <ResultPage />,
      },
    ],
  },
]);

export default router;
