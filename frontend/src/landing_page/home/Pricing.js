import React from "react";

function Pricing() {
  return (
    <div className="container mb-5">
      <div class="row">
        <div class="col-4">
          <h1 className="mb-3 fs-2">Unbeatable pricing</h1>
          <p>
            We Pioneered the concept of discount broking and price transparency
            in India.Flat fees and no hidden charges.
          </p>
          <a href=" " className="mx-2" style={{ textDecoration: "none" }}>
            See pricing
            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
        <div class="col-2"></div>
        <div class="col-6 mb-5">
          <div class="row text-center">
            <div class="col p-3 border">
              <h1 className="mb-3">₹0</h1>
              <p>
                Free equity delivery and
                <br /> direct mutual funds
              </p>
            </div>
            <div class="col p-3 border">
              <h1 className="mb-3">₹20</h1>
              <p>Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
