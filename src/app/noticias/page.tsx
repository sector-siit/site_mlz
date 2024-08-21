/* eslint-disable @next/next/no-img-element */
'use client';
import Breadcrumb from '../components/Breadcrumb';
import InputWithLabel from '../components/Input/InputWithLabel';
import SelectWithLabel from '../components/Input/SelectWithLabelProps';

import Psychiatry from '../../../public/noticias/psychiatry.svg'
import Diversity_1 from '../../../public/noticias/diversity_1.svg'
import Comedy_mask from '../../../public/noticias/comedy_mask.svg'
import Directions_run from '../../../public/noticias/directions_run.svg'
import School from '../../../public/noticias/school.svg'
import Nature_people from '../../../public/noticias/nature_people.svg'
import Account_balance from '../../../public/noticias/account_balance.svg'
import Things_to_do from '../../../public/noticias/things_to_do.svg'
import Factory from '../../../public/noticias/factory.svg'
import Ecg_heart from '../../../public/noticias/ecg_heart.svg'
import Shield_person from '../../../public/noticias/shield_person.svg'
import { ArrowLeftIcon } from '../components/Icons/ArrowLeftIcon'
import { ArrowRightIcon } from '../components/Icons/ArrowRightIcon'
import CardNoticiaLarge from '../components/Card/CardNoticiaLarge';
import { noticiasData } from '@/mocks/noticiasMock';
import Pagination from '../components/pagination/Pagination';
import { useEffect, useState } from 'react';

export default function Noticias() {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  useEffect(() => {
    setTotalPages(Math.ceil(noticiasData.length / 3));
  }, []);
  const breadcrumbItems = [
    { href: '/', text: 'Inicio' },
    { href: '/Noticias', text: 'Noticias', current: true },
  ];

  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];

  const categories = [
    { value: 'ambiente', label: 'Ambiente', icon: Psychiatry },
    { value: 'comunidad', label: 'Comunidad', icon: Diversity_1 },
    { value: 'cultura', label: 'Cultura', icon: Comedy_mask },
    { value: 'deportes', label: 'Deportes', icon: Directions_run },
    { value: 'educacion', label: 'Educación', icon: School },
    { value: 'espacio-publico', label: 'Espacio Público', icon: Nature_people },
    { value: 'gobierno', label: 'Gobierno', icon: Account_balance },
    { value: 'obras', label: 'Obras', icon: Things_to_do },
    { value: 'produccion-comercio', label: 'Producción y Comercio', icon: Factory },
    { value: 'salud', label: 'Salud', icon: Ecg_heart },
    { value: 'seguridad', label: 'Seguridad', icon: Shield_person },
  ];


  
  return (
    <div className='container'>
      <Breadcrumb items={breadcrumbItems} />
      <div id="main" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6 mt-[29px]">
        <section id="list" className="col-span-1 md:col-span-2 lg:col-span-1 order-2 md:order-1 lg:order-1">
          <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-[16px] grow'>
            {
              noticiasData.map((noticia) => (
                <CardNoticiaLarge
                  key={noticia.id}
                  category={noticia.category}
                  imagePath={noticia.image}
                  title={noticia.title}
                  date={noticia.date}
                  link={`/noticias/${noticia.slug}`}
                  textButton='Leer más'
                />
              ))
            }
          </div>
        </section>

        <aside id="filters" className='col-span-1 order-1 md:order-2 lg:order-2'>
          <section id="filter-section" className='w-[320px] p-6 gap-4 rounded-[12px] border-t border-opacity-0 bg-cards-muni-blanco'>
            <h3 className='text-azul-muni-texto text-2xl font-bold pb-4'>Filtrar</h3>
            <InputWithLabel
              label="Buscar"
              placeholder="Escribe un título"
              className="mb-4"
            />
            <SelectWithLabel
              label="CGM"
              options={options}
              className="mb-4"
            />

            <SelectWithLabel
              label="Categorías"
              options={options}
              className="mb-4 block md:hidden"
            />
          </section>
          <section className="w-[320px] p-6 gap-4 rounded-[12px] border-t border-opacity-0 bg-cards-muni-blanco my-8 hidden sm:block">
            <h2 className="text-xl font-bold mb-4 text-azul-muni-texto">Categorías</h2>
            <ul className="space-y-4">
              {categories.map((category, index) => (
                <li key={category.value}
                  className={`flex items-center space-x-4 pb-4 border-cards-muni-soft-sky-blue text-azul-muni-texto font-bold text-lg cursor-pointer ${index === categories.length - 1 ? 'border-b-0 pb-0' : 'border-b pb-4'
                    }`}
                >
                  <img src={category.icon.src} alt={category.label} className="w-8 h-8" />
                  <span className='!ml-0 !px-1'>{category.label}</span>
                </li>
              ))}
            </ul>
          </section>
        </aside>
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
      </div>
    </div>
  );
}   