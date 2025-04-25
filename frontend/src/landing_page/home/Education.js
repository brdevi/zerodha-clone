import React from "react";

function Education() {
  return (
    <div className="container mt-5">
      <div class="row">
        <div class="col-6">
          <img
            src="media/images/education.svg"
            alt="Education"
            style={{ width: "70%" }}
          />
        </div>
        <div class="col-6">
          <h1 className="mb-3 fs-2">Free and open market education</h1>
          <p>
            Varsity,the largest online stock market education book in the world
            covering everything from the basics to advance trading.
          </p>
          <a href=" " className="mx-2" style={{ textDecoration: "none" }}>
            Varsity
            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
          <p className="mt-5">
            Trading Q&A,the most active trading and investment community in
            India for all your market realted queries
          </p>
          <a href=" " className="mx-2" style={{ textDecoration: "none" }}>
            TradingQ&A
            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
