import React from "react";
import { Routes, Route} from "react-router-dom";
import Home from "./pages/home";
import FormRegister from "./Components/Fragments/FormRegister";
import FormLogin from "./Components/Fragments/FormLogin";



export default class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
        <Routes>
          <Route path="/FormRegister" element={<FormRegister />}></Route>
        </Routes>
        <Routes>
          <Route path="/FormLogin" element={<FormLogin />}></Route>
        </Routes>        
      </React.Fragment>
    );
  }
}
