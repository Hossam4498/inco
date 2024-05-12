"use client";

import Link from "next/link";

export default function NavItem(props) {
  return (
    <li className="nav__item">
      <Link href={props.link} className="nav__link">
        {props.title}
      </Link>
    </li>
  );
}
