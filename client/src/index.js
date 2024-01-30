import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import reducers from '../src/components/reducers';
import thunk from 'redux-thunk'; 
import './index.css';
import Login from './components/Login/Login';
import { createBrowserRouter, RouterProvider,Outlet } from 'react-router-dom';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import Navbar from './components/Navbar/Navbar';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Postpage from './components/postPage/postPage';

const store = createStore(reducers, compose(applyMiddleware(thunk)));
const MyApp=()=>{
  return <GoogleOAuthProvider clientId='939442672238-rt7m43nm8hqi33kvr3nok1vfkdp52p93.apps.googleusercontent.com'>
    <Provider store={store}>
      <Navbar/>
      <Outlet />
    </Provider>
  </GoogleOAuthProvider>
};

const appRouter = createBrowserRouter([
  {
      path:'/',
      element:<MyApp/>,
      children:[
          {
              path:"/",
              element:<App/>,
          },
          {
              path:"/contact",
              element:<Contact/>,
          },
          {
              path:"/about",
              element:<About/>,
          },
          {
              path:"/login",
              element:<Login/>,
          },
          {
              path:"/posts/:postId",
              element:<Postpage/>,
          },
      ]
    }
])
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter}/>)