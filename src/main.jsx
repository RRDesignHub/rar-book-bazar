import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Root from './components/Root/Root';
import ErrorPage from './components/ErrorPage/ErrorPage';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import BookDetails from './components/BookDetails/BookDetails';
import ListedBooks from './components/ListedBooks/ListedBooks';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'book/:bookId',
        element: <BookDetails></BookDetails>,
        loader: ()=> fetch('booksData.json')
      },
      {
        path: '/listed-books',
        element: <ListedBooks></ListedBooks>
      }
    ]
  },
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
