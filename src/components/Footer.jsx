import './Footer.css';
import React from 'react';

export default function Footer() {
  return (
    <footer>
      {/* Main Footer */}
      <section className="main">
        <div className="main-item">
          <h2 className="title">Abstract</h2>
          <ul>
            <li>
              <a href="#">Start Trial</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Download</a>
            </li>
          </ul>
        </div>

        <div className="main-item">
          <h2 className="title">Resources</h2>
          <ul>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Help Center</a>
            </li>
            <li>
              <a href="#">Release Notes</a>
            </li>
            <li>
              <a href="#">Status</a>
            </li>
          </ul>
        </div>

        <div className="main-item">
          <h2 className="title">Community</h2>
          <ul>
            <li>
              <a href="#">Twitter</a>
            </li>
            <li>
              <a href="#">LinkedIn</a>
            </li>
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Dribbble</a>
            </li>
            <li>
              <a href="#">Podcast</a>
            </li>
          </ul>
        </div>

        <div className="main-item">
          <h2 className="title">Company</h2>
          <ul>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Legal</a>
            </li>
            <br />
            <li>Contact Us</li>
            <li>
              <a href="#">info@abstarct.com</a>
            </li>
          </ul>
        </div>
      </section>
    </footer>
  );
}
