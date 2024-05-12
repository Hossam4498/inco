"use client";
import Link from "next/link";
import LogoItem from "./LogoItem";
import LocalLink from "./LocalLink";

import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { FaMapMarkedAlt } from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";
import { MdPrivacyTip } from "react-icons/md";
import lightLogo from '../public/images/light-logo.svg';
import "./footer.scss";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="grid">
          <div className="img-box">
            <LogoItem
              className="logo-footer"
              src={lightLogo}
              width={200}
              height={120}
            />
            <div className="footer-about">
              <p>
              Elevating Spaces Since 2023. Expert architects specializing in functional, 
              aesthetic designs for diverse projects. Let's bring your vision to life today.
              </p>
            </div>
          </div>
          <div></div>

          <div className="useful-link">
            <h2>Useful Links</h2>
            <div className="use-links">
              <LocalLink to="/" title="Home" />
              <LocalLink to="/about" title="About" />
              <LocalLink to="/projects" title="Projects" />
              <LocalLink to="/contact" title="Contact" />
            </div>
          </div>

          <div className="social-links">
            <h2>Follow Us</h2>
            <div className="social-icons">
              <li>
                <Link href="/home">
                  <FaFacebook className="icon" /> Facebook
                </Link>
              </li>

              <li>
                <Link href="https://www.instagram.com/inco.architects/">
                  <FaInstagram className="icon" /> Instagram
                </Link>
              </li>

              <li>
                <Link href="/home">
                  <FaWhatsapp className="icon" /> Whatsapp 
                </Link>
              </li>

              <li>
                <Link href="https://www.linkedin.com/in/inco-architects-9a40a5303/">
                  <FaLinkedinIn className="icon" /> Linkedin
                </Link>
              </li>
            </div>
          </div>

          <div className="address">
            <h2>Address</h2>
            <div className="address-box">
              <li>
                <span>
                  <FaMapMarkedAlt className="icon" /> Cairo, Egypt.
                </span>
              </li>
              <li>
                <Link href="mailto:incoarchitects.eg@gmail.com">
                  <FaMailBulk className="icon" /> incoarchitects.eg
                </Link>
              </li>

              <li>
                <Link href="tel:+201100200818">
                  <FaPhoneAlt className="icon" /> Call
                </Link>
              </li>

              <li>
                <Link href="/home">
                  <MdPrivacyTip className="icon" /> Privacy Policy
                </Link>
              </li>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <i className="fa-solid fa-copyright" /> 2021 - {year} Inco, inc. All
        rights reserved.
        <p>
          Created By
          <Link href="https://hossam4498.github.io/Portfolio/"> Hossam El Den</Link>
        </p>
      </div>
    </footer>
  );
}
