import React from "react";
import { BOOKING_BASE_URL, BOOKING_CONFIGURED } from "../config";
import { Link } from "react-router-dom";

const CTASection = () => (
  <section className="cta-section">
    <div className="container cta-container">
      <div>
        <div className="section-label">Ready when you are</div>
        <h2 className="section-title">Give your child a typing coach who keeps things calm and joyful.</h2>
        <p className="section-subtitle">
          Pick a class time, we will send the Google Meet link and Launchpad, and you can relax knowing practice is handled.
        </p>
        <div className="hero-actions">
          {BOOKING_CONFIGURED ? (
            <a className="btn btn-primary" href={`${BOOKING_BASE_URL}/programs`}>
              Choose a class time
            </a>
          ) : (
            <Link className="btn btn-primary" to="/programs" aria-disabled>
              Choose a class time
            </Link>
          )}
          <a className="btn btn-secondary" href="mailto:hello@serenitykeys.com">
            Ask a question
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default CTASection;
