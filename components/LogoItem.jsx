"use client";
import Image from "next/image";
import Link from "next/link";

export default function LogoItem(props) {
  return (
    <Link href="/" className={props.className}>
      <Image
        src={props.src}
        width={props.width}
        height={props.height}
        alt="INCO logo"
      />
    </Link>
  );
}
