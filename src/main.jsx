import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Statistics from './components/Statistics/Statistics';
import AppliedJobs from './components/AppliedJobs/AppliedJobs';
import Main from './components/Layout/Main';
import ShowDetails from './components/ShowDetails/ShowDetails';
import { appliedJobsData } from './loaders/getAppliedJobsData';
import Blog from './components/Blog';
import ErrorPage from './components/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    errorElement: <ErrorPage />,
    children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: 'ShowDetails/:id',
          element: <ShowDetails></ShowDetails>,
          loader: () => fetch('/jobListings.json')
        },
        {
          path: 'statistics',
          element: <Statistics></Statistics>
        },
         {
              path: '/blog',
              element: <Blog></Blog>
            },
        {
          path: 'appliedJob',
          element: <AppliedJobs></AppliedJobs>,
          loader: appliedJobsData,
          children: [
            {
              path: 'ShowDetails/:id',
              element: <ShowDetails></ShowDetails>
            }
           
          ]
        }
    ]
  }
]);









ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
