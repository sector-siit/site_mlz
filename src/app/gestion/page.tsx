/* eslint-disable @next/next/no-img-element */
import { gestionData } from '@/mocks/gestionMocks';
import Breadcrumb from '../components/Breadcrumb';
import CardImg from '../components/Card/CardImg';

export default function Noticias() {
  const breadcrumbItems = [
    { href: '/', text: 'Inicio' },
    { href: '/gestion', text: 'Gestion', current: true },
  ];

  return (
    <main className='container'>
      <Breadcrumb items={breadcrumbItems} />
      <h1 className='text-3xl text-azul-muni-texto font-bold mt-6'>Gestión</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
        {
          gestionData.map((gestion: Gestion) => (
            <CardImg
              key={gestion.slug}
              imagePath={gestion.image}
              title={gestion.title}
              link={`/gestion/${gestion.slug}`}
              textButton="Ver más"
            />
          ))
        }
      </div>
    </main >
  );
}   