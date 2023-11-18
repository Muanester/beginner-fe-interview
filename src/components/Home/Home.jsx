import React from "react";
import "./Home.css";
import Pillow from "../../assets/pillow.jpg";

function Home() {
  return (
    <div className="home">
      <div className="left_section">
        <div className="left_div"></div>
        <div className="left_details">
          <h1>Best quality pillow</h1>
          <p>
            Seemlessly empower fully researched growth strategies and
            interoperable internal
          </p>
          <button>Shop Now</button>
        </div>
      </div>
      <div className="right_section">
        <img src={Pillow} alt="" />
      </div>
    </div>
  );
}

export default Home;
