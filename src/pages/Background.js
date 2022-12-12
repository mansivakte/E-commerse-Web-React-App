import React from "react";
import BgImg from "../Img/bg2img.webp";

export default function Background() {
  return (
    <div>
      <div class="card text-bg-dark border-0">
        <img
          src={BgImg}
          class="card-img"
          alt="Background img"
          height="550px"
        ></img>
        <div class="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
            <h5 class="card-title display-3 fw-bolder mb-0">
              NEW SEASON ARRIVALS
            </h5>
            <p class="card-text lead fs-2">CHECK OUT ALL THE TRENDS</p>
            {/* <p class="card-text">
              <small>Last updated 3 mins ago</small>
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
}
