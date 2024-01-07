import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import reducers from '../src/components/reducers';
import thunk from 'redux-thunk'; 
import './index.css';
import Login from './components/Login/Login';
import Header from './components/Header/Header';
import { createBrowserRouter, RouterProvider,Outlet } from 'react-router-dom';
import Contact from './components/Contact/Contact';
import About from './components/About/About';

const store = createStore(reducers, compose(applyMiddleware(thunk)));
const MyApp=()=>{
  return <Provider store={store}>
    <Header/>
    <Outlet />
  </Provider>
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
      ]
    }
])
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter}/>)