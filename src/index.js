import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Login from "./pages/Login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import Home from './pages/Home/Home';
import NewProduct from "./pages/NewProduct/NewProduct";
import NewUser from "./pages/NewUser/NewUser";
import Product from "./pages/Product/Product";
import ProductList from "./pages/ProductList/ProductList";
import User from "./pages/User/User";
import UserList from './pages/UserList/UserList.jsx';

ReactDOM.render(
<Provider store={store}>
  <PersistGate loading='null' persistor={persistor}>
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<App />}>
            <Route index element={<Home />} />
            <Route path='users' element={<UserList />} />
            <Route path='user/:userId' element={<User />} />
            <Route path='newUser' element={<NewUser />} />
            <Route path='products' element={<ProductList />} />
            <Route path='product/:productId' element={<Product />} />
            <Route path='newproduct' element={<NewProduct />} />
          </Route>
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  </PersistGate>
</Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
