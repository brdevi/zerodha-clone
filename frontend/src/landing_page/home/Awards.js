import React from "react";

function Awards() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div class="col-6 p-5 mt-5">
          <img src="media/images/largestBroker.svg" alt="Largest Broker" />
        </div>
        <div class="col-6 p-5">
          <h1>Largest stock broker in India</h1>
          <p className="mb-5">
            2+ million Zerodha clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in:
          </p>
          <div class="row">
            <div class="col-6">
              <ul>
                <li>
                  <p>Futures and Options</p>
                </li>
                <li>
                  <p>Commoditiy derivatives</p>
                </li>
                <li>
                  <p>Currency derivatives</p>
                </li>
              </ul>
            </div>
            <div class="col-6">
              <ul>
                <li>
                  <p>Stocks</p>
                </li>
                <li>
                  <p>Mutual funds</p>
                </li>
                <li>
                  <p>Fixed deposits</p>
                </li>
              </ul>
            </div>
          </div>
          <img
            src="media/images/pressLogos.png"
            alt="Press Logos"
            style={{ width: "90%" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Awards;
