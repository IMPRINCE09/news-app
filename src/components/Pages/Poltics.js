import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

const apiUrl = "https://newsapi.org/v2/everything";
const apiKey = "eaa2c2af57cb4299bdc8661435a2bce4";
var apidata = "bbc";

export default function Poltics() {
  const [product, isproduct] = useState([]);

  useEffect(() => {
    getAlldata();
  }, []);

  const getAlldata = async () => {
    const fetchData = await fetch(`${apiUrl}?q=${apidata}&apiKey=${apiKey}`);

    const jsondata = await fetchData.json();
    isproduct(jsondata.articles);
    // console.log(jsondata);
  };
  return (
    <div>
      <Header />
      <div className="card-wrap">
        {product.map((item, index) => {
          return (
            <div>
              <div className="card card-items">
                <img src={item.urlToImage} class="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{item.source.name}</h5>
                  <h4 className="card-auth">{item.author}</h4>

                  <p className="card-text">{item.title}</p>
                  <p className="card-detail">
                    <h4>Description :</h4> {item.description}
                  </p>
                  <button className="button">
                    <Link className="btn" to={item.url}>
                      Read More
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
