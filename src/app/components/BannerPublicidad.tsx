interface Props {
    backgroundColor: string;
    textColor: string;
    title: string;
    description: string;
    link: string;
    textButton: string;
    imagePath: string
    imagePathMobile: string
}

const BannerPublicidad = ({
    backgroundColor,
    textColor,
    title,
    description,
    link,
    textButton,
    imagePath,
    imagePathMobile,
}: Props) => (
    <div className="flex flex-row justify-betwee rounded-lg" style={{ backgroundColor: backgroundColor, color: textColor }}>
        <div className='hidden md:flex lg:flex flex-col px-[24px] py-[24px] justify-between'>
            <p className='font-bold text-2xl'>{title}</p>
            <p className='text-lg leading-[22px] font-normal'>{description}</p>
            <a href={link} className='flex items-center text-lg font-bold hover:underline'>
                {textButton}
            </a>
        </div>
        <img src={imagePath} alt="seguridad" className='hidden md:block lg:block rounded-lg max-h-[202px]' />
        <img src={imagePathMobile} alt="seguridad" className='md:hidden lg:hidden rounded-lg object-cover' />
    </div>
);

export default BannerPublicidad;
