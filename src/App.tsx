import React from "react";
import { Routes, Route} from "react-router-dom";
import Home from "./Components/Fragments/home";
import FormRegister from "./Components/Fragments/FormRegister";
import FormLogin from "./Components/Fragments/FormLogin";
import Detail from "./Components/Fragments/Detail";
import { ChakraProvider } from "@chakra-ui/react";
import PrivateRoute from "./Components/Fragments/PrivateRouts";



export default class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <ChakraProvider>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
        <Routes>
          <Route path="/FormRegister" element={<FormRegister />}></Route>
        </Routes>
        <Routes>
          <Route path="/FormLogin" element={<FormLogin />}></Route>
        </Routes>
        <Routes>
            <Route element={<PrivateRoute />}>
              <Route path="/detail/:id" element={<Detail />} />
            </Route>
          </Routes>
        </ChakraProvider>
      </React.Fragment>
    );
  }
}
