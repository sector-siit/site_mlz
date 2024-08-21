/* eslint-disable @next/next/no-img-element */
import React from "react";

interface Props {
  title: string;
  link: string;
  textButton: string;
  imagePath: string
}

export default function CardImg({
  title,
  link,
  textButton,
  imagePath,
}: Props) {
  return (
    <a className="rounded-lg flex flex-col hover:scale-[1.03] transition-transform duration-300 overflow-hidden" href={link}>
      <div className="relative text-azul-muni-texto h-[300px]">
        <img
          className="absolute top-0 left-0 w-full h-[112%] object-cover transform translate-y-[-10%]"
          src={imagePath}
          alt="alt"
        />
        <div className="absolute bottom-4 left-4 right-4 p-[24px] rounded-lg flex flex-col justify-between bg-[#F3F7FC]">
          <h2 className="text-2xl font-bold leading-[30px]">{title}</h2>
          <span className="font-bold hover:underline text-lg mt-[16px]">
            {textButton}
          </span>
        </div>
      </div>
    </a>
  );
}