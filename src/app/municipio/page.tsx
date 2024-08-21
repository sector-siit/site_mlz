import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import FoundationIcon from "@mui/icons-material/Foundation";
import DirectionsBusFilledOutlinedIcon from "@mui/icons-material/DirectionsBusFilledOutlined";
import DirectionsTransitFilledOutlinedIcon from "@mui/icons-material/DirectionsTransitFilledOutlined";
import CardMunicipio from "../components/Municipio/CardMunicipio";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import {
  Titulo2,
  Titulo,
  Subtitulo,
  Subtitulo2,
} from "../components/Municipio/Textos";
import ChevronIcon from "../components/Icons/ChevronIcon";
import IndiceLink from "../components/Municipio/IndiceLink";

export default function page() {
  return (
    <main className="container mb-8">
      <Breadcrumb
        items={[
          { href: "/", text: "Inicio" },
          { href: "/municipio", text: "Municipio", current: true },
        ]}
      />
      <div className="grid grid-cols-1 md:grid-cols-municipio gap-4">
        <aside className="order-first md:order-last">
          <div className="md:sticky md:top-10 md:z-10 gap-6 flex flex-col">
            <CardMunicipio className="h-44">
              <Titulo2>Intendente</Titulo2>
              <p className="text-lg mt-2 text-[rgba(79,79,79,1)]">
                Bio de Federico Otermín
              </p>
              <a
                href={`municipio/intendente`}
                className="block mt-4 flex  gap-2 hover:underline items-center font-semibold text-muni-primary-600 text-lg"
              >
                <span>Ver más</span>
                <ChevronIcon />
              </a>
            </CardMunicipio>
            <CardMunicipio>
              <Titulo2>Índice</Titulo2>
              <IndiceLink href={`#historia`}>
                <Subtitulo2>Historia del Municipio</Subtitulo2>
              </IndiceLink>
              <IndiceLink href={`#camino-al-bicentenario`}>
                <Subtitulo2>Camino al Bicentenario</Subtitulo2>
              </IndiceLink>
              <IndiceLink href={`#palacio-municipal`}>
                <Subtitulo2>Palacio Municipal</Subtitulo2>
              </IndiceLink>
              <IndiceLink href={`#sobre-su-arquitectura`}>
                <Subtitulo2>Sobre su arquitectura</Subtitulo2>
              </IndiceLink>
              <IndiceLink href={`#como-llegar`}>
                <Subtitulo2>Cómo llegar</Subtitulo2>
              </IndiceLink>
            </CardMunicipio>
          </div>
        </aside>
        <section>
          <Titulo className="mt-6">Municipio</Titulo>
          <article id="historia" className="scroll-m-14">
            <Titulo2 className="mt-6">Historia del Municipio</Titulo2>
            <p className="text-lg text-[rgba(79,79,79,1)] mt-4">
              Lomas de Zamora fue fundado el{" "}
              <strong>10 de septiembre de 1861</strong> con el nombre de{" "}
              <strong>Pueblo de la Paz</strong>. Su escudo oficial está
              conformado por tres elementos: la rueda del trabajo, la pluma de
              la cultura y la paloma de la paz.
            </p>
            <p className="text-lg text-[rgba(79,79,79,1)] mt-4">
              Tenemos una población que ronda los 700 mil habitantes y nuestro
              distrito presenta una extensión de 89 km2 en la que están
              distribuidas 14 localidades con sus respectivos barrios.
            </p>
            <img
              src="estacion.webp"
              alt="estacion"
              className="rounded-lg mt-4 w-full  object-cover aspect-[9/4]"
            />
            <p className="text-lg text-[rgba(79,79,79,1)] mt-4">
              Además, en nuestro territorio hay seis arroyos y está emplazada la
              Reserva Natural Provincial de Santa Catalina, el mayor pulmón
              verde de nuestra ciudad y uno de los más relevantes de la
              Provincia, con presencia de bosques nativos, humedales y
              pastizales.
            </p>
            <p className="text-lg text-[rgba(79,79,79,1)] mt-4">
              Tenemos establecimientos educativos de todos los niveles y la
              primera Universidad Nacional del Conurbano bonaerense, fundada en
              1972. Contamos con el Teatro del Municipio, centros culturales, y
              una red de salas e instituciones independientes de gran
              trayectoria en el ámbito cultural, y un sistema de salud pública
              con diversas especializaciones y complejidad.
            </p>
          </article>
          <article className="scroll-m-14" id="camino-al-bicentenario">
            <Subtitulo className="mt-4">Camino al Bicentenario</Subtitulo>
            <p className="text-lg text-[rgba(79,79,79,1)] mt-4">
              Hoy empezamos a transitar el “Camino al Bicentenario de Lomas”, un
              programa participativo que busca construir con nuestra historia,
              el futuro de toda la comunidad. Y en ese sentido, la historia
              ocupa un lugar central, es una identidad que nosotros queremos
              recuperar: los pioneros que formaron el municipio de Lomas de
              Zamora que hoy habitamos con orgullo y ese municipio en el cual
              queremos construir un futuro mejor.
            </p>
            <p className="text-lg text-[rgba(79,79,79,1)] mt-4">
              Junto al Instituto Histórico Municipal, a todos los historiadores,
              historiadoras de Lomas de Zamora llevamos adelante una serie de
              actividades que vamos a impulsar en toda la comunidad de Lomas de
              Zamora para poder construir un futuro en donde Lomas de Zamora
              definitivamente sea ese Pueblo de la Paz que soñaron los primeros
              habitantes.
            </p>
          </article>
          <article className="scroll-m-14" id="palacio-municipal">
            <Titulo2 className="mt-4">Palacio Municipal</Titulo2>
            <img
              src="palacio.webp"
              alt="palacio"
              className="rounded-lg mt-4 w-full  object-cover aspect-[9/4]"
            />
            <p className="text-lg text-[rgba(79,79,79,1)] mt-4">
              En febrero de 1862, se constituyó la primera Municipalidad bajo la
              forma organizativa de “Corporación Municipal”, cuyo presidente era
              a la vez Juez de Paz. Al no contar con un edificio propio, las
              autoridades desarrollaban sus tareas en un despacho ubicado en el
              edificio Las Tres Esquinas, Avda. H. Yrigoyen y Pereyra Lucena.
            </p>
            <p className="text-lg text-[rgba(79,79,79,1)] mt-4">
              El Palacio Municipal, fue construido en la parcela ubicada sobre
              Sáenz, Manuel Castro y Azara, donada por Don Victorio Grigera en
              1875.
            </p>
            <p className="text-lg text-[rgba(79,79,79,1)] mt-4">
              Tras la donación de los terrenos, la Provincia de Buenos Aires
              destinó al Gobierno local $60.000 para ayudar a la construcción de
              la Casa Municipal. A mediados de 1876 se formó una comisión
              integrada por Rafael Portela, Victorio Grigera, Adolfo Olivares,
              Pedro Rosende y Antonio Arregui, para darle curso al proyecto. En
              octubre de ese año, se compraron los materiales y comenzó la obra,
              finalmente dirigida por el arquitecto Alberto J. Bogani, vecino de
              Banfield y destacado profesional lomense, mientras que la empresa
              encargada de concretarlo fue Pío Ricagno e hijos.
            </p>
            <p className="text-lg text-[rgba(79,79,79,1)] mt-4">
              Luego de años de construcción,
              <strong>
                el 22 de diciembre de 1938 fue inaugurado el Palacio Municipal.
              </strong>
            </p>
          </article>
          <article className="scroll-m-14" id="sobre-su-arquitectura">
            <CardMunicipio className="w-full bg-muni-primary-50 rounded-lg mt-4 p-6">
              <Subtitulo>
                <FoundationIcon fontSize="large" className="mr-2" />
                Sobre su arquitectura
              </Subtitulo>
              <p className="text-lg text-[rgba(79,79,79,1)] mt-4 text-pretty">
                De inspiración francesa, por sus dimensiones, escala y
                simbolismo, el Palacio Municipal de Lomas de Zamora es uno de
                los edificios más emblemáticos del área urbana local. Su diseño
                de líneas Art-Decó y racionalistas reflejan el momento en que
                fue construido. Por su parte, su altura y monumentalidad, junto
                a la torre del reloj, le asignan un rol protagónico dentro del
                paisaje del centro cívico lomense. Los materiales nobles que
                utilizó Bogani en el diseño original, sus paredes revestidas en
                mármol travertino, la escalera señorial con sus barandas de
                bronce y los pisos en roble de Eslavonia (este de Croacia) y
                boiserie de nogal, lo convirtieron en una edificación de gran
                valor y belleza para la época.
              </p>
            </CardMunicipio>
          </article>
          <p className="text-lg text-[rgba(79,79,79,1)] mt-4">
            En 2004, mediante el Decreto Presidencial 1020, fue declarado
            “Monumento Histórico Nacional”, declaratoria que además protegió la
            Catedral, la Escuela Nº1, la Plaza Grigera y el Monumento Ecuestre a
            San Martín, y que fue ampliada en 2007 mediante el Decreto 216 para
            crear un “Área de Amortiguación Visual” con la intención de
            resguardar su entorno.
          </p>
          <article className="scroll-m-14" id="como-llegar">
            <CardMunicipio className="mt-4">
              <Titulo2 className="">Cómo llegar</Titulo2>
              <Subtitulo className="mt-4 font-bold">
                <DirectionsBusFilledOutlinedIcon className="mr-2 w-6 h-6" />
                Líneas de Colectivos
              </Subtitulo>
              <Subtitulo2 className="mt-4">Líneas Comunales:</Subtitulo2>
              <span className="text-lg text-[rgba(79,79,79,1)] mt-4 text-pretty">
                532-540-541-542-543-544-548-549-550-551-552-553-561-562-564
              </span>
              <Subtitulo2 className="mt-4">Líneas Comunales:</Subtitulo2>
              <span className="text-lg text-[rgba(79,79,79,1)] mt-4 text-pretty">
                239-247-266-271-277-278-298-299-306-318-323-338-403-421-426-403-435
              </span>
              <Subtitulo2 className="mt-4">Líneas Nacionales:</Subtitulo2>
              <span className="text-lg text-[rgba(79,79,79,1)] mt-4 text-pretty">
                20-51-74-79-160-164-188
              </span>
              <Subtitulo2 className="mt-4">
                <DirectionsTransitFilledOutlinedIcon className="mr-2 w-6 h-6" />
                Ferrocarriles
              </Subtitulo2>
              <p className="text-lg text-[rgba(79,79,79,1)] mt-4 text-pretty">
                La línea Gral. Roca, en sus Ramales Plaza Constitución - Ezeiza,
                A. Korn y Bosques vía Temperley, une al Partido de Lomas de
                Zamora con la Ciudad Autónoma de Buenos Aires. Pasa por las
                estaciones: Banfield, Lomas de Zamora, Turdera, Temperley y
                Llavallol.
              </p>
              <p className="text-lg text-[rgba(79,79,79,1)] mt-4 text-pretty">
                El Ramal Temperley - Haedo une al Partido de Lomas de Zamora con
                el Partido de Morón, con paradas en: Hospital Español, Santa
                Catalina y KM 34.
              </p>
            </CardMunicipio>
          </article>
        </section>
      </div>
    </main>
  );
}
