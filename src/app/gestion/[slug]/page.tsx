import { gestionData } from '@/mocks/gestionMocks';
import FormsComponents from '../forms';
import Breadcrumb from '@/app/components/Breadcrumb';

const truncarTexto = (texto: string) => {
    return texto.length > 15 ? texto.slice(0, 15) + '...' : texto
}

const getGestion = (slug: string | string[]) => {
    return gestionData.find((item) => item.slug === slug)
}

export async function generateStaticParams() {
    // esto en el otro no deberia ir
    return [
        { slug: 'atencion-vecinal' },
        { slug: 'salud-lomas' },
        { slug: 'comunidad-lomas-limpia' },
    ];
}

export default function GestionForms({ params }: { params: { slug: string } }) {
    const { slug } = params;

    const FormComponent = FormsComponents[slug];
    const FormNotFound = FormsComponents.notFound;

    const title = !FormComponent ? '😓' : truncarTexto(getGestion(slug)?.title ?? '')
    const breadcrumbItems = [
        { href: '/', text: 'Inicio' },
        { href: '/gestion', text: 'Gestión' },
        { href: '', text: title, current: true },
    ];

    return (
        <main className='container'>
            <Breadcrumb items={breadcrumbItems} />
            <h1 className='text-3xl text-azul-muni-texto font-bold mt-6'>{getGestion(slug)?.title}</h1>
            <div className='my-6'>
                {
                    !FormComponent
                        ? <FormNotFound />
                        : <FormComponent />
                }
            </div>
        </main>
    )
};

