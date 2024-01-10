import React from "react";
import { Footer, Navbar } from "../components";
import { Link } from "react-router-dom";

const Purchase = () => {
    return (
        <div>
            <Navbar/>
            <div className="container">
        <div className="row">
          <div className="col-md-12 py-5 bg-light text-center">
            <h4 className="p-3 display-5">No purchases made yet</h4>
            <Link to="/Home" className="btn  btn-outline-dark mx-4">
              <i className="fa fa-arrow-left"></i> Continue Shopping
            </Link>
          </div>
        </div>
      </div>
      <Footer/>
        </div>
    );
};

export default Purchase;
