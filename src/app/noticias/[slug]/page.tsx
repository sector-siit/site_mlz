/* eslint-disable @next/next/no-img-element */
import React from 'react';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Breadcrumb from '@/app/components/Breadcrumb';
import whatsapp_compartir from '../../../../public/noticias/whatsapp-compartir.svg'
import facebook_compartir from '../../../../public/noticias/facebook-compartir.svg'
import instagram_compartir from '../../../../public/noticias/instagram-compartir.svg'
import CardNoticia from '@/app/components/Card/CardNoticia';
import Section from '@/app/components/Home/Section';
import { noticiasData } from '@/mocks/noticiasMock';

export async function generateStaticParams() {
  // esto en el otro no deberia ir
  return [
    { slug: 'jornada-deportiva-y-ambiental-en-llavallol-bicicleteada-y-senderismo-en-el-municipio-de-lomas-de-zamora' },
    { slug: 'diversion-y-aprendizaje-en-las-vacaciones-de-invierno-en-lomas' },
    { slug: 'jornada-de-examenes-visuales-en-el-hospital-oftalmologico' },
  ];
}

const truncarTexto = (texto: string) => {
  return texto.length > 15 ? texto.slice(0, 15) + '...' : texto
}


export default function Page({ params }: { params: { slug: string } }) {

  const { slug } = params;

  const getNoticia = (slug: string | string[]) => {
    return noticiasData.find((noti) => noti.slug === slug)
  }

  const breadcrumbItems = [
    { href: '/', text: 'Inicio' },
    { href: '/noticias', text: 'Noticias', current: false },
    { href: '', text: truncarTexto(getNoticia(slug)?.title ?? ''), current: true },
  ];

  return (
    <div className="container">
      <Breadcrumb items={breadcrumbItems} />
      <div className="overflow-hidden flex md:flex-row  mt-[29px]">
        <div className="w-full xl:w-2/3 flex flex-col">
          <h1 className="font-bold leading-[30px] text-[#236999] mb-2 text-[32px]">
            {getNoticia(slug)?.title}
          </h1>
          <p className="text-[#4F4F4F] mb-4 text-xl">
            La Etapa Regional se llevó adelante en el Instituto San Bonifacio. Decenas de estudiantes y docentes de escuelas de Lomas presentaron sus proyectos.
          </p>
          <p className="text-lg text-[#4F4F4F] flex items-center gap-2 mb-4">
            <CalendarMonthIcon className="w-5 h-5 text-gray-500" />
            <span>29 jul 2024</span>
            <span className="text-sm text-white bg-[#236999] px-2 w-fit h-[32px] flex items-center justify-center rounded-[2px]">
              Educación
            </span>
          </p>
          <img
            className="w-full h-[476px] object-cover mb-4"
            src={getNoticia(slug)?.image}
            alt="Feria Distrital"
          />
          <p className=" text-[#4F4F4F] mb-4 text-xl">
            La Etapa Regional de la Feria de Educación, Arte, Ciencias y Tecnología se llevó adelante en el Instituto San Bonifacio con gran participación de escuelas de Lomas que presentaron sus proyectos.
          </p>
          <p className=" text-[#4F4F4F] mb-4 text-xl">
            El intendente Federico Otermín visitó la muestra y dialogó con los chicos y chicas sobre las propuestas que se encuentran realizando. “Desde el Municipio queremos escuchar e incorporar las ideas de los jóvenes para transformar la vida en comunidad”, sostuvo al respecto Otermín.
          </p>
          <p className=" text-[#4F4F4F] mb-4 text-xl">
            Las ferias de ciencias promueven el desarrollo y la profundización de los aprendizajes en todos los niveles y modalidades educativas. Cuentan con varias instancias (escolares, locales, regionales, jurisdiccionales o provinciales).
          </p>
          <div className="mt-4 text-[#4F4F4F] font-bold flex md:flex-row items-center">

            <img src={whatsapp_compartir.src} alt='whatsapp-icon' className='mr-1' />
            <img src={instagram_compartir.src} alt='instagram-icon' className='mr-1' />
            <img src={facebook_compartir.src} alt='facebook-icon' className='mr-1' />
            <span>Compartir</span>
          </div>
        </div>
      </div>
      <div className='mb-[32px]'>
        <Section
          title="Mirá también"
          linkActive={false}
          linkText="Ver más"
          linkUrl="/noticias"
        >
          <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-[16px] grow'>
            {
              noticiasData.map((noticia) => (
                <CardNoticia
                  key={noticia.id}
                  category={noticia.category}
                  imagePath={noticia.image}
                  title={noticia.title}
                  date={noticia.date}
                  link='#'
                  textButton='Leer más'
                />
              ))
            }
          </div>
        </Section>
      </div>
    </div>
  );
}
