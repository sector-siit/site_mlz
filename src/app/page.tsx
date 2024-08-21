import { CarouselIndex } from './components/Home/CarouselIndex';
import InfraccionesIcon from './components/Icons/InfraccionesIcon';
import Section from './components/Home/Section';
import Card from './components/Card/Card';
import Breadcrumb from './components/Breadcrumb';
import AutogestionIcon from './components/Icons/AutogestionIcon';
import ELomasIcon from './components/Icons/ELomasIcon';
import TramitesIcon from './components/Icons/TramitesIcon';
import TurnosOnline from './components/Home/TurnosOnline';
import CardImg from './components/Card/CardImg';
import CardNoticia from './components/Card/CardNoticia';
import BannerPublicidad from './components/BannerPublicidad';
import { noticiasData } from '@/mocks/noticiasMock';
import { gestionData } from '@/mocks/gestionMocks';

export default function Home() {
  return (
    <main className="mb-8">
      <section className='container'>
        <div className='h-56 sm:h-64 xl:h-80 2xl:h-96'>
          <CarouselIndex />
        </div>
        <Section
          title="Trámites"
          linkActive
          linkText="Ver más"
          linkUrl="/tramites"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 grow">
            <Card
              color="azul"
              title="Infracciones"
              description="Consultá faltas, libre deuda e iniciá descargos"
              link="https://www.lomasdezamora.gov.ar/Iframe.aspx?i=3"
              icon={<InfraccionesIcon />}
              typeButton='link'
              textButton="Ingresar"
            />
            <Card
              color="azul"
              title="Portal de Autogestión"
              description="Consultá y pagá tus tasas"
              link="https://www.lomasdezamora.gov.ar/Tasas.aspx"
              icon={<AutogestionIcon />}
              typeButton='link'
              textButton="Ingresar"
            />
            <Card
              color="azul"
              title="E-Lomas"
              description="Realizá los trámites de tu comercio"
              link="https://elomas.gob.ar/"
              icon={<ELomasIcon />}
              typeButton='link'
              textButton="Ingresar"
            />
            <Card
              color="azul"
              title="Guía de trámites"
              description="Encontrá información sobre trámites y servicios"
              link="https://lomasdezamora.eregulations.org/"
              icon={<TramitesIcon />}
              typeButton='link'
              textButton="Ingresar"
            />
          </div>
        </Section>
      </section>

      <section className='my-[32px] bg-[#236999]'>
        <TurnosOnline />
      </section>

      <section className='container'>
        <BannerPublicidad
          backgroundColor='#1f4582'
          textColor='white'
          title="Aplicación Seguridad Lomas"
          description="Contactate de forma inmediata con policía, ambulancia y bomberos. Disponible para Android y iOs"
          link="#"
          textButton="Ver más"
          imagePath="/home/seguridad.webp"
          imagePathMobile="/home/seguridadMobile.webp"
        />
        <Section
          title="Gestión"
          linkActive={true}
          linkText="Ver más"
          linkUrl="/gestion"
        >
          <div className="md:grid hidden grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[24px] grow">
            {gestionData.slice(0, 4).map((gestion: Gestion) => (
              <CardImg
                key={gestion.slug}
                imagePath={gestion.image}
                title={gestion.title}
                link={`/gestion/${gestion.slug}`}
                textButton="Ver más"
              />
            ))}
          </div>
          <div className="md:hidden grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[24px] grow">
            {gestionData.slice(0, 4).map((gestion: Gestion) => (
              <Card
                color="#F3F7FC"
                textColor="#236999"
                borderColor='#E5F0F9'
                key={gestion.slug}
                title={gestion.title}
                link={`/gestion/${gestion.slug}`}
                textButton="Ver más"
                typeButton="link"
              />
            ))}
          </div>
          <BannerPublicidad
            backgroundColor='#29A3D2'
            textColor='white'
            title="Centros de Gestión del Municipio"
            description="Encontrá tu centro más cercano y conocé los servicios disponibles en cada uno"
            link="#"
            textButton="Ver más"
            imagePath="/home/gestion/gestion.webp"
            imagePathMobile="/home/gestion/gestion.webp"
          />
        </Section>
      </section>

      <section className='container'>
        <Section
          title="Noticias"
          linkActive={true}
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
                  link={`/noticias/${noticia.slug}`}
                  textButton='Leer más'
                />
              ))
            }
          </div>
        </Section>
      </section>

    </main>
  );
}
