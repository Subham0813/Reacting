import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import './index.css'
import PhotoContainer from './component/PhotoContainer.jsx';
import PhotoDisplay from './component/PhotoDisplay.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/album/:albumId",
    element: <PhotoContainer />
  },
  {
    path: "/album/:albumId/:Id",
    element: <PhotoDisplay />
  }

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
