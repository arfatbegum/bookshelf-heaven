import App from '@/App';
import AddNewBook from '@/pages/AddNewBook';
import AllBooks from '@/pages/AllBooks';
import BookDetails from '@/pages/BookDetails';
import EditBook from '@/pages/EditBook';
import Home from '@/pages/Home';
import Login from '@/pages/Login';
import MyBooklist from '@/pages/ReadingBookList';
import NotFound from '@/pages/NotFound';
import SignUp from '@/pages/SignUp';
import Wishlist from '@/pages/Wishlist';
import { createBrowserRouter } from 'react-router-dom';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      }
    ],
  },
  {
    path: '/all-books',
    element: <AllBooks />,
  },
  {
    path: '/book-details/:id',
    element: <BookDetails />,
  },
  {
    path: '/add-book',
    element: <AddNewBook />,
  },
  {
    path: '/edit-book/:id',
    element: <EditBook />,
  },
  {
    path: '/wishlist',
    element: <Wishlist />,
  },
  {
    path: '/mybooklist',
    element: <MyBooklist />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <SignUp />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

export default routes;