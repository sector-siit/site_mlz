/* eslint-disable @next/next/no-img-element */

import Breadcrumb from "@/app/components/Breadcrumb";
import { Subtitulo2, Titulo, Titulo2 } from "@/app/components/Municipio/Textos";
import SocialMediaIcons from "@/app/components/SocialMediaIcons";

 
export default function Gestion() {
  const breadcrumbItems = [
    { href: '/', text: 'Inicio' },
    { href: '/municipio', text: 'Municipio', current: false },
    { href: '/intendente', text: 'Intendente', current: true },
  ];

  return (
    <div className='container'>
      <Breadcrumb items={breadcrumbItems} />
      <div className='mt-4'>
           <Titulo>Intendente</Titulo>
      </div>
      <div className="py-8 grid md:grid-cols-1 lg:grid-cols-2 gap-4">
        <section className="lg:w-[569px] lg:h-[500px] md:w-[400px] md:h-[200px] rounded">
            <img src="/municipio/intendente/federico-otermin.webp" alt="federico otermin" className="w-full h-full object-cover rounded"></img>
        </section>
        <aside className="leading-[26px]">
            <Titulo2 className="mb-4 hidden lg:block">Federico Otermín</Titulo2>
            <p className="text-lg">Federico Otermín nació en Lomas de Zamora el 1 de diciembre de 1984 y es Intendente de nuestra ciudad desde diciembre de 2023, tras ganar las elecciones con el 49,82% de los votos. Es hijo de Jorge Otermín, médico cardiólogo, y Alicia Ledwab, docente y directora de una escuela especial para chicos ciegos. Está casado con Daniela Vilar y es papá de Sofía.</p>
            <p className="text-lg">Durante su gestión como Secretario de Cultura y Comunicación de Lomas (2013-2017), creó Cultura Lomas, una comunidad de artistas y vecinos, y logró aumentar exponencialmente la oferta artística vigente en Lomas, con la ampliación y apertura de nuevos centros culturales municipales, así como también la inauguración del primer Teatro del Municipio. Fue Diputado Provincial de 2017 a 2023 y presidió la Honorable Cámara de Diputados de la provincia de Buenos Aires en el periodo 2019 a 2023.</p>
            <div className="mt-4">
                <Subtitulo2>¡Seguilo en sus redes!</Subtitulo2>
                <SocialMediaIcons className="mt-2" />
            </div>
        </aside>
      </div>
    </div>
  );
}   