"use client";
import { FaAnglesRight } from "react-icons/fa6";
import Link from "next/link";

export default function LocalLink(props) {
  return (
    <li>
      <Link href={props.to}>
        <FaAnglesRight className="icon" /> {props.title}
      </Link>
    </li>
  );
}
