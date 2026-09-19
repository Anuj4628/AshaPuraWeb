import "./Footer.css";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGlobe,
} from "react-icons/fa";

import { Link } from "react-router-dom";

import logo from "../../../assets/images/logo.webp";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        {/* Main 4-Column Grid */}
        <div className="footer-grid">
          {/* Column 1: Company Info */}
          <div className="footer-company">
            <img src={logo} alt="Shree Ashapura Metal & Alloys" />

            <p>
              Shree Ashapura Metal &amp; Alloys Pvt. Ltd. is a Leading Manufacturer,
              Supplier And Exporter Of Premium Stainless Steel, Alloy Steel,
              Duplex Steel, Nickel Alloy and Industrial Piping Products Worldwide.
            </p>

            <div className="socials">
              <a href="#" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="#" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
              <a href="#" aria-label="Instagram">
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/products">Products</Link>
              </li>
              <li>
                <Link to="/materials">Materials</Link>
              </li>
              <li>
                <Link to="/gallery">Gallery</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Our Products */}
          <div className="footer-col">
            <h4>Our Products</h4>
            <ul>
              <li>
                <Link to="/products/coils">Coils</Link>
              </li>
              <li>
                <Link to="/products/pipes">Pipes</Link>
              </li>
              <li>
                <Link to="/products/tubes">Tubes</Link>
              </li>
              <li>
                <Link to="/products/plates">Plates</Link>
              </li>
              <li>
                <Link to="/products/sheets">Sheets</Link>
              </li>
              <li>
                <Link to="/products/round-bars">Round Bars</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Channels */}
          <div className="footer-contact-col">
            <h4>Contact Us</h4>

            {/* Call Us */}
            <div className="contact-block">
              <div className="contact-block-label">
                <FaPhoneAlt className="contact-icon" />
                <strong>Call Us</strong>
              </div>

              <div className="phone-lines">
                <div className="phone-line">
                  <span className="phone-tag">Landline:</span>
                  <div className="phone-anchors">
                    <a href="tel:+912267438386">+91 22 6743 8386</a>
                    <span className="phone-divider">/</span>
                    <a href="tel:+912266362062">+91 22 6636 2062</a>
                  </div>
                </div>

                <div className="phone-line">
                  <span className="phone-tag">Mr. B. H. Jain:</span>
                  <div className="phone-anchors">
                    <a href="tel:+917666989991">+91 76669 89991</a>
                  </div>
                </div>

                <div className="phone-line">
                  <span className="phone-tag">Mr. ShyamSingh Rajput:</span>
                  <div className="phone-anchors">
                    <a href="tel:+919326883622">+91 93268 83622</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Email Us */}
            <div className="contact-block">
              <div className="contact-block-label">
                <FaEnvelope className="contact-icon" />
                <strong>Email Us</strong>
              </div>
              <div className="contact-links-stack">
                <a href="mailto:sales@shreeashapurametal.com">
                  sales@shreeashapurametal.com
                </a>
                <a href="mailto:shreeashapura1@gmail.com">
                  shreeashapura1@gmail.com
                </a>
              </div>
            </div>

            {/* Website */}
            <div className="contact-block">
              <div className="contact-block-label">
                <FaGlobe className="contact-icon" />
                <strong>Website</strong>
              </div>
              <div className="contact-links-stack">
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

        {/* Office & Plant Locations (Balanced 3-Column Section) */}
        <div className="footer-locations">
          <div className="location-box">
            <div className="location-box-title">
              <FaMapMarkerAlt className="location-icon" />
              <h5>Registered &amp; Head Office</h5>
            </div>
            <p className="location-address">
              Building No. 58, 1st Floor, Shop No. 1, 1st Kumbharwada, Mumbai - 400004, Maharashtra, India.
            </p>
            <div className="location-contact-num">
              <strong>Landline:</strong>{" "}
              <a href="tel:+912267438386">+91 22 6743 8386</a>
              <span className="phone-divider"> / </span>
              <a href="tel:+912266362062">+91 22 6636 2062</a>
            </div>
          </div>

          <div className="location-box">
            <div className="location-box-title">
              <FaMapMarkerAlt className="location-icon" />
              <h5>Branch Office/Godown</h5>
            </div>
            <p className="location-address">
              Shree Ashapura Metal &amp; Alloys Pvt Ltd, Building No. 60/62, Shop No. 1, Khandke Building, 1st Kumbharwada Lane, Mumbai - 400004
            </p>
            <div className="location-contact-num">
              <strong>Phone:</strong>{" "}
              <a href="tel:+919223289991">+91 92232 89991</a>
            </div>
          </div>

          <div className="location-box">
            <div className="location-box-title">
              <FaMapMarkerAlt className="location-icon" />
              <h5>Factory Address</h5>
            </div>
            <p className="location-address">
              Shree Ashapura Metal &amp; Alloys Pvt Ltd, Gala No. B/13, Kasturi Industrial Estate, Fatak Road, Bhayandar East - 401105
            </p>
            <div className="location-contact-num">
              <strong>Phone:</strong>{" "}
              <a href="tel:+919869189991">+91 98691 89991</a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="container footer-bottom-content">
          <p>
            © 2026 Shree Ashapura Metal &amp; Alloys Pvt. Ltd. All Rights
            Reserved. | Design and SEO by Sunmarg India.
          </p>
          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <span>|</span>
            <a href="#">Terms &amp; Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
