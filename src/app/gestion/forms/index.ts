import { NotFoundForm } from './notFound';
import AtencionVecinal from './atencion-vecinal';
import ComunidadLomasLimpia from './comunidad-lomas-limpia';
import SaludLomas from './salud-lomas';

const FormsComponents: FormsComponentsType = {
    'atencion-vecinal': AtencionVecinal,
    'salud-lomas': SaludLomas,
    'comunidad-lomas-limpia': ComunidadLomasLimpia,
    notFound: NotFoundForm
};


export default FormsComponents