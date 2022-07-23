import React, { useState, useEffect } from "react";
import "../styles.css";
import { API } from "../backend";
import BASE from "./Base";
import Testimonials from "./Testimonials";
import Card from "./card";
import { getProducts } from "./helper/coreapicalls";
import Header from "./Header";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);

  const loadAllProducts = () => {
    getProducts().then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setProducts(data);
      }
    });
  };

  useEffect(() => {
    loadAllProducts();
  }, []);

  return (
    
    <div className="homecss">
    <BASE title="Shop Club" description="Welcome to our Store">
      {/*whatever goes in here comes under the children in the base.js */}
      <Header/>
      <h1 className="txt ml-3 text-center"> T-Shirts and Shirts</h1><br></br>

      <div className="row text-center justify-content-around">
        {products.map((product, index) => {
          return (
            <div key={index} className="col-4 mb-4 card-deck">
              <Card product={product} />  
            </div>
          );
        })}
      </div>
      
      <Testimonials/>
    </BASE>
    </div>
    
  );
};
export default Home;
