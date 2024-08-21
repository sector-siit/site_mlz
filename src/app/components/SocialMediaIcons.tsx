/* eslint-disable @next/next/no-img-element */
import React from 'react';

// Importa tus imágenes aquí. Asegúrate de ajustar las rutas según tu estructura de proyecto.
import whatsapp_compartir from '../../../public/noticias/whatsapp-compartir.svg'
import facebook_compartir from '../../../public/noticias/facebook-compartir.svg'
import instagram_compartir from '../../../public/noticias/instagram-compartir.svg'

interface SocialMediaIconsProps {
    className?: string;
}

  
const SocialMediaIcons: React.FC<SocialMediaIconsProps> = ({ className = '' }) => {
  return (
    <div className={`text-[#4F4F4F] font-bold flex md:flex-row items-center ${className}`} >
      <img src={whatsapp_compartir.src} alt='whatsapp-icon' className='mr-1' />
      <img src={instagram_compartir.src} alt='instagram-icon' className='mr-1' />
      <img src={facebook_compartir.src} alt='facebook-icon' className='mr-1' />
    </div>
  );
};

export default SocialMediaIcons;
