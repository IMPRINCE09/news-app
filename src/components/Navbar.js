import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <div className="conatainer">
        <div className="left-conatainer">
          <div className="logo">
            <lottie-player
              src="https://lottie.host/bdbeb58c-5abe-447e-8403-63632152c94c/ThohTDqQ8u.json"
              background="transparent"
              speed="1"
              loop
              autoplay
            ></lottie-player>
          </div>
        </div>
        <div className="right-conatainer">
          <ul className="list">
            <Link className="list-link" to="/">
              <li className="list-item">Home</li>
            </Link>
            <Link className="list-link" to="/Sports">
              <li className="list-item">Sports</li>
            </Link>
            <Link className="list-link" to="/Entertainment">
              <li className="list-item">Entertainment</li>
            </Link>
            <Link className="list-link" to="/Poltics">
              <li className="list-item">Poltics</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
