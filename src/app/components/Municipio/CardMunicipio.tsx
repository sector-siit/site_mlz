import React from "react";

export default function CardMunicipio({
  children,
  className,
}: {
  children: React.ReactNode | React.ReactNode[];
  className?: string;
}) {
  return (
    <div className={`${className} bg-muni-primary-50 rounded-lg p-6`}>
      {children}
    </div>
  );
}
