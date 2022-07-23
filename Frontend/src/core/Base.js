import React from "react";
import Menu from "./Menu";
import Contactus from "./Contactus";
import Footer from "./Footer";
import { Redirect } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


const BASE = ({
  title = "My Title", // this has become as the base for every route
  description = "My description",
  className = "p-4",
  children,
}) => {




  return (
    <div>

      <Menu />
      <div className="container-fluid" style={{ backgroundColor: "#f4f3ee" }}>
        <div
          className="jumbotron-fluid  mt-2 txt text-center "
          style={{ backgroundColor: "#f4f3ee" }}
        >
          <h2 className="display-4">{title}</h2>
          <p className="lead">{description}</p>
        </div>
      </div>

      <div style={{ backgroundColor: "white" }} className={className}>
        {children}
      </div>

     <Footer/>
    </div>
  );
};
export default BASE;
