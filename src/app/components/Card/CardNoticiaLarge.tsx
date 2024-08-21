/* eslint-disable @next/next/no-img-element */
import React from 'react';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Link from 'next/link';

interface Props {
  category: string;
  title: string;
  date: string;
  link: string;
  textButton: string;
  imagePath: string;
}

export default function CardNoticiaLarge({
  category,
  title,
  date,
  link,
  textButton,
  imagePath,
}: Props) {
  return (
    <Link href={link} className="rounded-lg overflow-hidden hover:scale-[1.03] transition-transform duration-300 flex flex-col md:flex-row bg-[#F3F7FC]">
 
      <div className="relative w-full md:w-1/2 h-[180px] md:h-auto">
        <img
          className="w-full h-full object-cover"
          src={imagePath}
          alt="alt"
        />
        <span className="absolute bottom-4 left-4 text-sm text-white bg-[#236999] px-2 w-fit h-[32px] flex items-center justify-center rounded-[2px]">
          {category}
        </span>
      </div>

      <div className="p-4 flex flex-col w-full md:w-1/2">
        <h2 className="text-[24px] font-bold leading-[30px] text-[#236999] overflow-hidden text-ellipsis line-clamp-3">
          {title}
        </h2>
        <div className="flex items-center gap-2 text-[#4F4F4F] pt-4">
          <CalendarMonthIcon className="w-5 h-5 text-gray-500" />
          <span className="text-lg">
            {new Date(date).toLocaleDateString('es-ES', {
              day: '2-digit',
              month: 'short',
              year: 'numeric',
            })}
          </span>
        </div>
        <a
          href={link}
          className="text-section-vermas hover:underline font-bold text-lg pt-4"
        >
          {textButton}
        </a>
      </div>
    </Link>
  );
}
