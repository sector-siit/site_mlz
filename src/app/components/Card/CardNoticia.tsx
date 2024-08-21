/* eslint-disable @next/next/no-img-element */
import React from "react";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Link from 'next/link';

interface Props {
  date: string;
  category: string;
  title: string;
  link: string;
  textButton: string;
  imagePath: string
}

export default function CardNoticia({
  category,
  title,
  date,
  link,
  textButton,
  imagePath,
}: Props) {
  return (
    <div className="rounded-lg overflow-hidden hover:scale-[1.03] transition-transform duration-300 flex flex-col bg-[#F3F7FC]">
      <div className='relative h-[180px]'>
        <img
          className="w-full h-full object-cover"
          src={imagePath}
          alt="alt"
        />
        <span className="absolute bottom-4 left-4 content-center text-sm text-white bg-[#236999] px-2  w-fit h-[32px]">
          {category}
        </span>
      </div>
      <div className="p-4 flex flex-col">
        <h2 className="text-[24px] font-bold leading-[30px] text-[#236999] overflow-hidden text-ellipsis line-clamp-3">
          {title}
        </h2>
        <div className="flex items-center gap-2 text-[#4F4F4F] pt-4">
          <CalendarMonthIcon />
          <span className="text-lg">
            {new Date(date).toLocaleDateString('es-ES', {
              day: '2-digit',
              month: 'short',
              year: 'numeric',
            })}
          </span>
        </div>
        <Link
          href={link}
          className="text-section-vermas hover:underline font-bold text-lg pt-4"
        >
          {textButton}
        </Link>
      </div>
    </div>
  );
}





// export default function CardNoticia({
//   category,
//   title,
//   link,
//   textButton,
//   imagePath,
// }: Props) {
//   return (
//     <div className="rounded-lg flex flex-col hover:scale-[1.03] transition-transform duration-300 overflow-hidden ">
//       <div className="relative text-azul-muni-texto h-[300px]">
//         <img
//           className="w-full h-full object-cover"
//           src={imagePath}
//           alt="alt"
//         />
//         <div className="h-[150px] absolute bottom-4 left-4 right-4 p-[24px] rounded flex flex-col justify-between bg-[#F3F7FC]">
//           <h2 className="text-2xl font-bold leading-[30px] overflow-hidden text-ellipsis line-clamp-3">{title}</h2>
//           <a
//             href={link}
//             className="font-bold hover:underline text-lg"
//           >
//             {textButton}
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }