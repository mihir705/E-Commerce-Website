import React from 'react'
import headerImage from '../Images/header-background.png';
import { Link } from 'react-router-dom';
import "./Header.css";

const Header = () => {
    return (
        <div className="container col-xxl-8 px-4 py-5">
            <div className="row flex-lg-row-reverse align-items-center g-10 py-5">
                <div className="col-10 col-sm-8 col-lg-6">
                    <img src={headerImage}  alt="Bootstrap Themes" width="150%" height="120%"  />
                </div>
                <div className="col-lg-6">
                    <h1 className="display-5 fw-bold lh-1 mb-3">Your one stop for away from buying products you love.</h1>
                    <p className="lead">Shopclub allows you to quickly and hassle free search and buy products you like, be it vintage collectibles or a jersey signed by your favourite cricket player.</p>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                        <Link to="/signup"><button type="button" className="btn btn-outline-secondary btn-lg px-4">  Register Now </button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header