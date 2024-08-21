import React from 'react'
import ChevronIcon from '../Icons/ChevronIcon';
interface Props {
  title: string;
  linkActive: boolean;
  linkText?: string;
  linkUrl?: string;
  children: React.ReactNode | React.ReactNode[];
}

export default function Section({ title, linkActive, linkText, linkUrl, children }: Props) {
  return (
    <section>
      <div className='flex justify-between text-azul-muni-texto py-[24px]'>
        <h2 className="text-[32px] leading-[40px] font-bold">
          {title}
        </h2>
        {
          linkActive && (
            <a
              href={linkUrl}
              className="flex items-center text-section-vermas text-lg leading-[40px] font-bold hover:underline"
            >
              {linkText} <span className='pl-[12px] pr-[6px]'><ChevronIcon /></span>
            </a>
          )
        }
      </div>
      <div className='flex flow-row flex-wrap gap-[24px]'>
        {children}
      </div>
    </section >
  )
}
