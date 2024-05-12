"use client";
import Image from "next/image";

export default function ImageItem(props) {
  return (
    <div className="image">
      <Image
        src={props.src}
        width={props.width}
        height={props.height}
        alt="inco"
      />
    </div>
  );
}
