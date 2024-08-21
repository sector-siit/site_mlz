import { Alert } from "flowbite-react";

export const NotFoundForm = () => {
    return (
        <Alert className='mb-[29px]' color="failure" rounded>
            <span className="font-bold">Formulario no encontrado.</span> Lo sentimos, el formulario que estas buscando no existe. Verifique que el enlace sea correcto.
        </Alert>
    );
};
