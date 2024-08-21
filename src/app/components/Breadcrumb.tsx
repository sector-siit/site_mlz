import React from 'react';
import Link from 'next/link';

interface BreadcrumbItem {
  href: string;
  text: string;
  current?: boolean;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
        {items.map((item, index) => (
          <li key={index} className="inline-flex items-center">
            {!item.current ? (
              <>
                <Link href={item.href} className='inline-flex items-center font-medium text-azul-muni-950 text-lg mr-2'>
                    {item.text}
                </Link>
                {index < items.length - 1 && (
                  <svg
                    className="rtl:rotate-180 w-3 h-3 text-gray-400 ml-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 9 4-4-4-4"
                    />
                  </svg>
                )}
              </>
            ) : (
              <div className="flex items-left">
                <span className="ms-1 font-bold text-azul-muni-texto text-lg ml-0 pl-0">
                  {item.text}
                </span>
              </div>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
