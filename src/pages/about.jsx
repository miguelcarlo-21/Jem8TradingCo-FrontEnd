import React from "react";
import "../style/aboutglobals.css";
import "../style/about.css";
import data from "../assets/leaders.json"; // import your JSON

const About = () => {
  const currentYear = new Date().getFullYear();
  const { leaders, stats } = data;

  return (
    <div className="about">

      {/* ===== HEADER ===== */}
      <header className="header">
        <img
          className="logo-jem-circle-2"
          src="/img/Logo — Jem 8 Circle Trading Co (1).png"
          alt="JEM 8 Circle Logo"
        />
        <nav className="navigation">
          <a href="/">Home</a>
          <a href="/products">Products</a>
          <a href="/categories">Categories</a>
          <a href="/blog">Blog</a>
          <a href="/about" style={{ fontWeight: 700, color: "#000" }}>About</a>
          <a href="/contact">Contact</a>
        </nav>
        <div className="btn-login">
          <a href="/login" className="text-wrapper-15">Login / Signup</a>
        </div>
      </header>

      {/* ===== HERO ===== */}
      <section className="hero-section">
        <p className="txt-about">ABOUT JEM 8 CIRCLE TRADING CO.</p>
        <p className="txt-about-big">
          "Your trusted source for<br />equipment and supplies."
        </p>
        <p className="txt-about-small">
          We connect trading companies with the industrial equipment and
          supplies they need to operate at peak efficiency reliably, seamlessly, at scale.
        </p>
        <div className="hero-divider"></div>
      </section>

      {/* ===== MISSION ===== */}
      <section className="mission-section">
        <div className="mission-left">
          <div className="txt-mission-2">OUR MISSION</div>
          <p className="txt-mission-tag-2">
            Advancing with heart, integrity, and smart systems.
          </p>
          <div className="since-badge">
            <div className="since-dot"></div>
            <span className="txt-mission-date">Since {stats.since}</span>
          </div>
        </div>
        <div className="mission-right">
          <p className="txt-mission-desc-2">
            We advance JEM 8 Circle with heart, integrity, and smart systems. Through ethical distribution,
            structured processes, and strong teamwork, we develop confident, knowledgeable, and responsible
            leaders, expand our global reach, and create sustainable growth for both our people and the organization.
          </p>
        </div>
      </section>

      <div className="mission-divider"></div>

      {/* ===== VISION ===== */}
      <section className="vision-section">
        <div className="vision-left">
          <div className="vision-circle-outer">
            <div className="vision-circle-mid">
              <div className="vision-circle-inner">
                <span className="OUR-VISION">OUR<br />VISION</span>
              </div>
            </div>
          </div>
        </div>
        <div className="vision-right">
          <div className="txt-mission">OUR VISION</div>
          <p className="txt-mission-tag">Where wellness fuels opportunity and purpose drives action.</p>
          <p className="txt-mission-desc">
            To create a world where wellness fuels opportunity, leaders inspire growth, and a united team
            transforms lives through passion, integrity, and purpose-driven action.
          </p>
        </div>
      </section>

      <div className="mission-divider"></div>

      {/* ===== LEADERSHIP ===== */}
      <section className="leadership-section">
        <div className="leadership-header">
          <div className="txt-leadership">LEADERSHIP</div>
          <p className="txt-leadership-desc">The people behind JEM 8 Circle Trading Co</p>
        </div>
        <div className="leaders">
          {leaders.map((leader, index) => (
            <div key={index} className="leader-card">
              <img src={leader.image} alt={leader.name} />
              <h3>{leader.name}</h3>
              <p>{leader.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== ABOUT DETAIL ===== */}
      <section className="about-detail-section">
        <div className="group-4">
          <div className="txt-about-jem">About JEM 8 Circle</div>

          <div className="about-row">
            <div className="about-row-label">Who<br />We Are</div>
            <div className="about-row-content">
              <p className="about-row-title">Registered Business in Makati City</p>
              <p className="about-row-desc">
                JEM 8 Circle Trading Co. employs between {stats.employees} staff members.
              </p>
            </div>
          </div>

          <div className="about-row">
            <div className="about-row-label">Our<br />Reach</div>
            <div className="about-row-content">
              <p className="about-row-title">{stats.clients} Clients Across Metro Manila & Laguna</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="cta-section">
        <p className="txt-get-started-desc">From our hands to your office.</p>
        <a href="/contact" className="btn-get-started-link">Get Started</a>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="footer-section">
        <div className="footer-bottom">
          <div className="all-rights">Jem8 {currentYear}, All Rights Reserved.</div>
        </div>
      </footer>

    </div>
  );
};

export default About;