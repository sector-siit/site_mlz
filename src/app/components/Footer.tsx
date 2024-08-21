import FooterLogo from './Icons/FooterLogo';
import FormIcon from './Icons/FormIcon';
import FacebookIcon from './Icons/Redes/FacebookIcon';
import InstagramIcon from './Icons/Redes/InstagramIcon';
import TiktokIcon from './Icons/Redes/TiktokIcon';
import WhatsAppIcon from './Icons/Redes/WhatsAppIcon';
import XIcon from './Icons/Redes/XIcon';
import YoutubeIcon from './Icons/Redes/YoutubeIcon';

export default function Footer() {
    return (
        <div className='bg-[#236999]'>
            <footer className="container text-white px-4 py-[32px]">
                <FooterLogo />
                <div className="font-bold text-2xl pt-[24px]">Centro de Atención Vecinal</div>
                <div className='flex flex-wrap gap-[16px] pt-[16px]'>
                    <FooterButton to='https://wa.me/1521937726' rounded="rounded" color="#2ABB5B" icon={<WhatsAppIcon />} text={<span>Escribinos por <strong>WhatsApp</strong></span>} />
                    <FooterButton to='https://www.lomasdezamora.gov.ar/Iframe.aspx?i=6' rounded="rounded" color="#358DC2" icon={<FormIcon />} text={<strong>Formulario de Consultas</strong>} />
                </div>
                <div className='flex flex-wrap pt-[16px]'>
                    <a href='tel:08006666666' className="text-[32px] leading-[40px] font-bold hover:underline">0800-666-6666</a>
                    <span className="text-2xl leading-[40px] font-normal px-[12px] hidden sm:inline">|</span>
                    <a href='tel:08001225662' className="text-[32px] leading-[40px] font-bold hover:underline">0800-122-5662</a>
                </div>
                <div className='grid grid-flow-col auto-cols-max pt-[24px] gap-[16px]'>
                    <a href='https://www.lomasdezamora.gov.ar/Newsletter.aspx' className='text-base leading-[20px] font-medium hover:underline'>Newsletter</a>
                    <span className="text-base leading-[20px] font-thin">|</span>
                    <a href='https://www.lomasdezamora.gov.ar/BoletinOficial.aspx' className='text-base leading-[20px] font-medium hover:underline'>Boletín Oficial</a>
                    <span className="text-base leading-[20px] font-thin">|</span>
                    <a href='https://www.concejoldez.gob.ar/' className='text-base leading-[20px] font-medium hover:underline'>HCD</a>
                </div>
                <div className='pt-[24px]'>
                    <span className='text-2xl leading-[30px] font-bold mb-[16px]'>¡Seguinos en nuestras redes!</span>
                    <span className='flex mt-[16px]'>
                        <FooterButton rounded="rounded-l" color="#FFFFFF" icon={<InstagramIcon />} to='https://www.instagram.com/municipioldz' />
                        <FooterButton color="#FFFFFF" icon={<FacebookIcon />} to='https://www.facebook.com/munilomasdezamora/' />
                        <FooterButton color="#FFFFFF" icon={<TiktokIcon />} to='https://www.tiktok.com/@municipioldz' />
                        <FooterButton color="#FFFFFF" icon={<XIcon />} to='https://x.com/municipioldez' />
                        <FooterButton rounded='rounded-r' color="#FFFFFF" icon={<YoutubeIcon />} to='https://www.youtube.com/@municipiolomasdezamora' />
                    </span>
                </div>
                <div className='pt-[24px] flex flex-wrap justify-between text-lg'>
                    <a href='tel:42432222' className='hover:underline px-1 w-1/2 md:w-auto'><strong>100</strong> Bomberos</a>
                    <a href='tel:42399500' className='hover:underline px-1 w-1/2 md:w-auto'><strong>103</strong> Defensa Civil</a>
                    <a href='tel:42923896' className='hover:underline px-1 w-1/2 md:w-auto'><strong>107</strong> Emergencias</a>
                    <a href='tel:911' className='hover:underline px-1 w-1/2 md:w-auto'><strong>911</strong> Policía</a>
                    <a href='tel:42440748' className='hover:underline px-1 w-1/2 md:w-auto'><strong>147</strong> Seguridad Lomas</a>
                    <a href='tel:144' className='hover:underline px-1 w-1/2 md:w-auto'><strong>144</strong> Violencia de Género</a>
                </div>
                <div className='mt-[24px] border-t-[2px]'></div>
                <div className='pt-[24px] flex text-[14px]'>
                    © Municipio Lomas de Zamora | Todos los derechos reservados 2024.
                </div>
            </footer >
        </div >
    );
}


interface Props {
    color?: string;
    icon?: React.ReactNode;
    text?: string | React.ReactNode;
    rounded?: string;
    to: string
}

const FooterButton = ({ icon, text, color, to, rounded }: Props) => {
    return (
        <a href={to} style={{ backgroundColor: color }} className={` ${rounded} h-[48px]`}>
            <div className='flex text-center justify-center'>
                {
                    icon &&
                    <span className='px-[12px] py-[12px]'>
                        {icon}
                    </span>
                }
                {
                    text &&
                    <span className='text-lg py-[11px] pr-[12px]'>
                        {text}
                    </span>
                }
            </div>
        </a>
    )
}