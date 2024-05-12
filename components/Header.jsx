"use client";

import { useState } from "react";
import NavItem from "./NavItem";
import LogoItem from "./LogoItem";
import Toggle from "./Toggle";

import darkLogo from "../public/images/dark-logo.svg";
import lightLogo from "../public/images/light-logo.svg";
import "./header.scss";

export default function Header() {
  const [closeToggle, openToggle] = useState("");

  function handleClick() {
    openToggle(closeToggle === "show" ? "" : "show");
  }
  return (
    <header className="header container">
      <LogoItem
        className="header__logo"
        src={darkLogo}
        width={200}
        height={120}
      />
      <Toggle styleClass="header__toggle" handleClick={handleClick} />

      <nav className={`nav container ${closeToggle}`}>
        <div className="nav__content">
          <div className="nav__menu__container">
            <LogoItem
              className="nav__img"
              src={lightLogo}
              width={200}
              height={120}
            />

            <div className="nav__menu">
              <ul className="nav__list">
                <NavItem link="/" title="Home" />
                <NavItem link="/about" title="About" />
                <NavItem link="/projects" title="Projects" />
                <NavItem link="/contact" title="Contact" />
              </ul>
            </div>
          </div>
          <Toggle styleClass="header__close" handleClick={handleClick} />
        </div>
      </nav>
    </header>
  );
}
