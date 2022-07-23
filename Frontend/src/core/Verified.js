import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


const Verified = () => {

    return <>
        {
            <div>
               
                <div className="text-center bg-info p-5 text-black min-vh-100">
                    <div className="card d-inline-block p-5 shadow">
                        <div className='bg-primary shadow' style={{ borderRadius: '200px', height: '200px', width: '200px', margin: '0 auto' }}>
                            <div className="text-white" style={{ fontSize: "100px", "line-height": "200px", "margin-left": "-15px" }}>✓</div>
                        </div>
                        <br></br>
                        <div>
                            <h1><strong>Success</strong></h1>
                            <p>Order successfully Placed<br /> You can now <Link to="/">Go to HOME Page</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        }
    </>



}

export default Verified
























