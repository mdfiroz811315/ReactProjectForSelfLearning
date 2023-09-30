import React, { Component } from 'react';
import Home from './Component/Home';
import Sidebar from './Component/sideBar/Sidebar';
import Footer from './Component/Footer/Footer';
import { RouterProvider } from "react-router-dom";
import router from './Component/Router/Router';

class App extends Component {
render() {
	return (
    <>
      <main>
        <RouterProvider router={router} />
      </main>
   
     
    </>
);
}
}

export default App;
