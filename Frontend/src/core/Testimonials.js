import shail from '../Images/Shail.jpeg';
import mihir from '../Images/Mihir.jpeg';
import './Testimonials.css';

import React from "react";

const Testimonials = () => {

  return (
    <>
      <section className="text-center text-lg-start bg-light text-muted">
        <div className="row d-flex justify-content-center">
          <div className="col-md-10 col-xl-8 text-center">
            <h3 className="Background">Testimonials</h3>
          </div>
        </div>

        <div className="row text-center text-dark">
          <div className="col-md-3 col-xl-5 mb-5 mb-md-0">
            <div className="d-flex justify-content-center mb-4">
              <img src={shail}
                className="rounded-circle shadow-1-strong" alt="no" width="280" height="280" />

            </div>
            <h5 className="mb-3">Shail Parekh</h5>
            <h6 className="text-primary mb-3">Web Developer</h6>
            <p className="px-xl-3">
              <i className="fas fa-quote-left pe-2"></i>The aim of this project is to provide individual small business a
              seperate platform so that it gives advantage to reach more customers
              and helps to build thier own brand or internet.
            </p>

          </div>
          <div className="col-md-5 col-xl-7  mb-md-0">
            <div className="d-flex justify-content-center mb-4">
              <img src={mihir}
                className="rounded-circle shadow-1-strong" alt="no" width="280" height="280" />
            </div>
            <h5 className="mb-3">Mihir Popat</h5>
            <h6 className="text-primary mb-3">Web Designer</h6>
            <p className="px-xl-3">
              <i className="fas fa-quote-left pe-2"></i>It gives many advantages than a local store and make it a global one.
              It gives opprutunity for those who wants his/her products to sell globally.
            </p>

          </div>

        </div>
      </section>
    </>
  );
}

export default Testimonials