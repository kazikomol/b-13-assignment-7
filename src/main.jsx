import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router/dom";
import { createBrowserRouter } from 'react-router';
import RootLayout from './layout/RootLayout';
import TimeLine from './pages/timeline/TimeLine';
import Stats from './pages/stats/Stats';
import NotFoundPage from './pages/notfoundpage/NotFoundPage';
import HomePage from './pages/homepage/HomePage';
import FriendsDetails from './pages/friendsDetails/FriendsDetails';
import CallFriend from './context/CallFriend';
import TextFriend from './context/TextFriend';
import VideoFriend from './context/VideoFriend';
import AllProviders from './components/allproviders/AllProviders';
const router = createBrowserRouter(
  [
    {
      path : '/',
      element : <RootLayout/>,
      children:[
        {
        path: '/',
        element: <HomePage/>
        },
        {
          path: "/:id",
          element:<FriendsDetails/>
        },
        
        {
          path: '/timeline',
          element: <TimeLine/>
        },

        {
          path: '/stats',
          element:<Stats/>
        }
      ],
      errorElement : <NotFoundPage/>
    },
    
  ]
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AllProviders>
      <RouterProvider router={router} />

    </AllProviders>
          
        
   
  </StrictMode>,
)
