interface Props {
  children: React.ReactNode | React.ReactNode[];
  className?: string;
}

export const Titulo = ({ children, className }: Props) => {
  return (
    <h1 className={`text-3xl text-azul-muni-texto font-bold ${className}`}>
      {children}
    </h1>
  );
};

export const Titulo2 = ({ children, className }: Props) => {
  return (
    <h2 className={`text-2xl text-azul-muni-texto font-bold font-geometria  ${className}`}>{children}</h2>
  );
};

export const Subtitulo = ({ children, className }: Props) => {
  return (
    <h3 className={ `text-xl text-azul-muni-texto font-bold font-geometria ${className}`}>{children}</h3>
  );
};
export const Subtitulo2 = ({ children, className }: Props) => {
  return (
    <h3 className={ `text-lg text-azul-muni-texto font-bold font-geometria ${className}`}>{children}</h3>
  );
};
