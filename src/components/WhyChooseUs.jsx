import React from "react";
import { BOOKING_BASE_URL } from "../config";
import { Link } from "react-router-dom";

const WhyChooseUs = () => {
  const bookingUrl = (BOOKING_BASE_URL && /^https?:/i.test(BOOKING_BASE_URL))
    ? `${BOOKING_BASE_URL}/programs`
    : null;

  return (
    <section aria-labelledby="why-choose-us-heading">
      <div className="container">
        <h2 id="why-choose-us-heading" className="section-title">Why Choose Serenity’s Keys?</h2>
        <div className="card-grid cards-3">
          <article className="card" aria-label="Safe and Simple">
            <h3 style={{ marginTop: 0 }}>Safe &amp; Simple</h3>
            <p>
              Small, calm groups with age-appropriate lessons. Background-checked instructors. Simple setup with Google
              Meet and our Launchpad so kids can focus on learning — not clicking around.
            </p>
          </article>

          <article className="card" aria-label="Proven Results">
            <h3 style={{ marginTop: 0 }}>Proven Results</h3>
            <p>
              Typing confidence for ages 3–14. Parents receive a short progress note after each class, so you see the small
              wins stacking up week after week.
            </p>
          </article>

          <article className="card" aria-label="Led with Heart and Expertise">
            <h3 style={{ marginTop: 0 }}>Led with Heart &amp; Expertise</h3>
            <p>
              Founded by a computer scientist by day and typing teacher by night. Inspired by Serenity, my 3-year-old — we
              teach with technical skill and personal care.
            </p>
          </article>
        </div>

        <div className="hero-actions" style={{ marginTop: 24 }}>
          {bookingUrl ? (
            <a className="btn btn-primary" href={bookingUrl}>
              Book a Class Today
            </a>
          ) : (
            <Link className="btn btn-secondary" to="/programs" aria-disabled>
              Book a Class Today
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

