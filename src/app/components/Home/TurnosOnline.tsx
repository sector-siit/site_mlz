import React from "react";
import Card from '../Card/Card';

const TurnosOnline = () => {
    return (
        <section className='container'>
            <div className='flex justify-between text-white pt-[56px]'>
                <h2 className=" text-[32px] leading-[40px] font-bold">
                    Turnos Online
                </h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 grow pt-[24px] pb-[56px]'>
                <Card
                    color="#F3F7FC"
                    textColor="#236999"
                    title="Documentación"
                    description="DNI, pasaporte y licencias de conducir"
                    link="#"
                    icon={false}
                    typeButton="link"
                    textButton="Ingresar"
                />
                <Card
                    color="#F3F7FC"
                    textColor="#236999"
                    title="Tribunal de faltas"
                    description="Audiencias con el Juez de Faltas"
                    link="#"
                    icon={false}
                    typeButton="link"
                    textButton="Ingresar"
                />
                <Card
                    color="#F3F7FC"
                    textColor="#236999"
                    title="Portal de salud"
                    description="Clínica médica, especialidades y vacunación"
                    link="#"
                    icon={false}
                    typeButton="link"
                    textButton="Ingresar"
                />
            </div>
        </section>
    );
};

export default TurnosOnline;
