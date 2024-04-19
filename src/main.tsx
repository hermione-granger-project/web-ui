import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.scss'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/home.page';
import SignInPage from './pages/signin.page';
import SignUpPage from './pages/signup.page';
import { AuthProvider } from './contexts/auth.context';
import ChatPage from './pages/chat.page';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },{
    path: "/signin",
    element: <SignInPage />,
  },{
    path: "/signup",
    element: <SignUpPage />,
  },{
    path: "/chat",
    element: <ChatPage />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
    
  </React.StrictMode>,
)
