/* eslint-disable @next/next/no-img-element */
import React from "react";
import CardLinkIcon from "../Icons/CardLinkIcon";
import ChevronIcon from "../Icons/ChevronIcon";

const AZUL = "bg-cards-muni-azul text-white";
const GRIS = "bg-cards-muni-gris text-azul-muni-texto border";
const BLANCO = "bg-cards-muni-blanco text-azul-muni-texto";
const COLORES: any = {
  azul: AZUL,
  gris: GRIS,
  blanco: BLANCO,
};

const getColor = (color: "azul" | "gris" | "blanco" | string) =>
  COLORES[color] || `bg-[${color}]`;

const getTextColor = (color?: string) => color ? `text-[${color}]` : "text-white";

const getBorderColor = (color?: string) => color ? `border border-${color}` : "";

interface Props {
  icon?: React.ReactNode;
  title: string;
  description?: string;
  link: string;
  textButton: string;
  color: "azul" | "gris" | "blanco" | string;
  textColor?: string;
  borderColor?: string;
  typeButton?: "link" | "button";
  showSideIcon?: boolean;
}
export default function Card({
  icon,
  title,
  description,
  link,
  textButton,
  color,
  textColor = "white",
  typeButton = "button",
  showSideIcon = false,
  borderColor
}: Props) {
  return (
    <section
      className={`rounded-lg flex flex-col justify-start hover:scale-[1.03] transition-transform duration-300 items-start p-6 ${getColor(color)} ${getTextColor(textColor)} ${getBorderColor(borderColor)}`}
    >
      <div className='hidden md:block'>
        {icon ? (
          <div>
            <div className="bg-[#358DC2]  h-16 w-16 flex justify-center items-center rounded">
              {icon}
            </div>
            <h3 className="text-2xl font-bold mt-4">{title}</h3>
          </div>
        ) : (
          <h3 className="text-2xl font-bold">{title}</h3>
        )}
      </div>

      <div className='md:hidden'>
        {icon ? (
          <div className="flex items-center">
            <div className="bg-[#358DC2] h-16 w-16 flex justify-center items-center rounded">
              {icon}
            </div>
            <h3 className="text-2xl font-bold ml-6">{title}</h3>
          </div>
        ) : (
          <h3 className="text-2xl font-bold">{title}</h3>
        )}
      </div>
      {
        description && (
          <p
            className={`font-normal flex-1 text-lg mt-4 ${color === "gris" && "text-gray-900"}`}
          >
            {description}
          </p>
        )
      }
      {typeButton === "button" && (
        <a
          href={link}
          className="w-full align-middle font-semibold flex justify-between hover:bg-azul-muni-500 p-2 rounded mt-4"
        >
          {textButton}
          <CardLinkIcon />
        </a>
      )}
      {typeButton === "link" && (
        <a
          href={link}
          className="font-bold hover:underline mt-4"
        >
          {textButton}
        </a>
      )}
    </section>
  );
}
