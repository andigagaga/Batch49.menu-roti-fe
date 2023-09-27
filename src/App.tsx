import React from "react";
import Home from "./pages/home";



export default class App extends React.Component{
  render() {
    return(
      <React.Fragment>
        <div>
          <Home />
        </div>
      </React.Fragment>
    )
  }
}
