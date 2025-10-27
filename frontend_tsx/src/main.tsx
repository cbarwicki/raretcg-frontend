import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, Route, RouterProvider } from 'react-router-dom'
import App from './App.tsx'
import Login from './pages/auth/Login.tsx'
import Signup from './pages/auth/Signup.tsx'
import Browse from './pages/shop/Browse.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
  },
  {
    path: "/browse",
    Component: Browse,
  },
  {
    path: "/signup",
    Component: Signup,
  }
])

const root = document.getElementById("root")!;
ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />,
);
