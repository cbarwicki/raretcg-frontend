import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, Route, RouterProvider } from 'react-router-dom'
import App from './App.tsx'
import Login from './pages/auth/Login.tsx'
import Signup from './pages/auth/Signup.tsx'
import Cards from './pages/shop/Cards.tsx'
import CardPage from './pages/shop/CardPage.tsx'
import NotFound from './pages/NotFound.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/cards",
    element: < Cards />,
    loader: async ({ request }) => {
      const url = new URL(request.url)
      const pageParam = url.searchParams.get('p') || 0
      const page = pageParam ? parseInt(pageParam) : 0
      const res = await fetch(`http://localhost:8000/api/cards?p=${page}`)
      return res.json()
    }
  },
  {
    path: "/cards/:id",
    element: <CardPage />,
    loader: async ({ params }) => {
      return await fetch(`http://localhost:8000/api/cards/${params.id}`)
    },
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "*",
    element: <NotFound />,
  }
])

const root = document.getElementById("root")!;
ReactDOM.createRoot(root).render(
  <RouterProvider router={router}
  />,

);
