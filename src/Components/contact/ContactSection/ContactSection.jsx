import "./ContactSection.css";

import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaGlobe,
} from "react-icons/fa";

import { useState } from "react";

function ContactSection() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);

    formData.append("access_key", "80580855-0188-494c-8f6c-a9c844dc56c5");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Thank you! Your message has been sent successfully.");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <section className="contact-section">
      <div className="container">
        {/* Main 2-Column Layout: Form & Direct Contact */}
        <div className="contact-layout">
          {/* Left Column: Form */}
          <div className="contact-form-card">
            <h2>We'd Love To Hear From You</h2>
            <p>
              Send us your requirement and our team will get back to you shortly.
            </p>

            <form onSubmit={onSubmit}>
              <div className="form-row">
                <input type="text" name="name" placeholder="Your Name" required />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                />
              </div>

              <div className="form-row">
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  required
                />
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                />
              </div>

              <textarea
                name="message"
                rows="6"
                placeholder="Your Message"
                required
              />

              <button type="submit">Send Message</button>
            </form>

            <span
              style={{
                display: "block",
                marginTop: "15px",
                fontWeight: "500",
                color: result.includes("Error") ? "red" : "green",
              }}
            >
              {result}
            </span>
          </div>

          {/* Right Column: Direct Contact Info (Call, Email, Web) */}
          <div className="contact-direct-card">
            <h3>Direct Contact</h3>
            <p className="direct-subtitle">
              Get in touch with our sales and technical support team directly.
            </p>

            {/* Call Us */}
            <div className="contact-info-block">
              <h4 className="contact-heading">
                <FaPhoneAlt className="contact-icon" />
                Call Us
              </h4>

              <div className="contact-phone-group">
                <div className="phone-row">
                  <span className="phone-label">Landline:</span>
                  <div className="phone-numbers">
                    <a href="tel:+912267438386">+91 22 6743 8386</a>
                    <span className="separator">/</span>
                    <a href="tel:+912266362062">+91 22 6636 2062</a>
                  </div>
                </div>

                <div className="phone-row">
                  <span className="phone-label">Mr. B. H. Jain:</span>
                  <div className="phone-numbers">
                    <a href="tel:+917666989991">+91 76669 89991</a>
                  </div>
                </div>

                <div className="phone-row">
                  <span className="phone-label">Mr. ShyamSingh Rajput:</span>
                  <div className="phone-numbers">
                    <a href="tel:+919326883622">+91 93268 83622</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Email Us */}
            <div className="contact-info-block">
              <h4 className="contact-heading">
                <FaEnvelope className="contact-icon" />
                Email Us
              </h4>
              <div className="contact-links-list">
                <a href="mailto:sales@shreeashapurametal.com">
                  sales@shreeashapurametal.com
                </a>
                <a href="mailto:shreeashapura1@gmail.com">
                  shreeashapura1@gmail.com
                </a>
              </div>
            </div>

            {/* Website */}
            <div className="contact-info-block">
              <h4 className="contact-heading">
                <FaGlobe className="contact-icon" />
                Website
              </h4>
              <div className="contact-links-list">
                <a
                  href="https://www.shreeashapurametal.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  www.shreeashapurametal.com
                </a>
                <a
                  href="https://www.metalsupplier.in"
                  target="_blank"
                  rel="noreferrer"
                >
                  www.metalsupplier.in
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Office & Plant Locations Section (Balanced 3-Column Cards) */}
        <div className="contact-locations-section">
          <div className="locations-section-header">
            <h3>Our Offices &amp; Facilities</h3>
            <p>Visit our corporate office, warehouse, and manufacturing facility in Mumbai</p>
          </div>

          <div className="contact-locations-grid">
            {/* Registered & Head Office */}
            <div className="location-info-card">
              <div className="loc-card-header">
                <FaMapMarkerAlt className="loc-icon" />
                <h4>Registered &amp; Head Office</h4>
              </div>
              <p className="loc-address">
                Building No. 58, 1st Floor, Shop No. 1, 1st Kumbharwada, Mumbai - 400004, Maharashtra, India.
              </p>
            </div>

            {/* Branch Office / Godown */}
            <div className="location-info-card">
              <div className="loc-card-header">
                <FaMapMarkerAlt className="loc-icon" />
                <h4>Branch Office/Godown</h4>
              </div>
              <p className="loc-address">
                Shree Ashapura Metal &amp; Alloys Pvt Ltd, Building No. 60/62, Shop No. 1, Khandke Building, 1st Kumbharwada Lane, Mumbai - 400004
              </p>
              <div className="loc-phone">
                <strong>Phone:</strong>{" "}
                <a href="tel:+919223289991">+91 92232 89991</a>
              </div>
            </div>

            {/* Factory Address */}
            <div className="location-info-card">
              <div className="loc-card-header">
                <FaMapMarkerAlt className="loc-icon" />
                <h4>Factory Address</h4>
              </div>
              <p className="loc-address">
                Shree Ashapura Metal &amp; Alloys Pvt Ltd, Gala No. B/13, Kasturi Industrial Estate, Fatak Road, Bhayandar East - 401105
              </p>
              <div className="loc-phone">
                <strong>Phone:</strong>{" "}
                <a href="tel:+919869189991">+91 98691 89991</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
