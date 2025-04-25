import React from "react";

function Stats() {
  return (
    <div className="container p-5">
      <div class="row p-5">
        <div class="col-6 p-5">
          <h1 className="fs-2">Trust with confidence</h1>
          <h2 className="fs-4">Customer-first always</h2>
          <p className="text-muted">
            That's why 1.3+ crocre customers trust Zerodha with ₹3.5+ lakh
            crores worth of equity investments.
          </p>
          <h2 className="fs-4">No Spam or gimmicks</h2>
          <p className="text-muted">
            No gimmicks,spam,"gamification",or annoying push notifications.High
            quality apps that you use at your pace, the way you like.
          </p>
          <h2 className="fs-4">The Zerodha Universe</h2>
          <p className="text-muted">
            Not just an app,but a whole ecosystem.Our investments in 30+
            finttech startups offer you tailored services specific to your
            needs.
          </p>
          <h2 className="fs-4">Do better with money</h2>
          <p className="text-muted">
            with initiatives like Nudge and Kill Switch, we dont just facilitate
            transactions,but actively help you do better with your money.
          </p>
        </div>
        <div class="col-6 p-5">
          <img
            src="media/images/ecosystem.png"
            alt="Ecosystem"
            style={{ width: "90%" }}
          />
          <div className="text-center">
            <a href=" " className="mx-5" style={{ textDecoration: "none" }}>
              Explore our products{" "}
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
            <a href=" " className="mx-2" style={{ textDecoration: "none" }}>
              Try Kite demo
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
