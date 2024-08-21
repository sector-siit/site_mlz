
import Link from "next/link";
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import SearchInput from './SearchInput';

export default function Header() {
  return (
    <div className='bg-azul-muni-700'>
      <Navbar fluid className="container">
        <NavbarBrand as={Link} href="/">
          <img src="/logo.webp" className='h-14 object-cover' alt="logo" />
        </NavbarBrand>
        <NavbarToggle />
        <NavbarCollapse>
          <NavbarLink className='text-white' href="/municipio">
            Municipio
          </NavbarLink>
          <NavbarLink as={Link} href="/gestion">
            Gestión
          </NavbarLink>
          <NavbarLink as={Link} href="/noticias">Noticias</NavbarLink>
          <NavbarLink href="#">Contacto</NavbarLink>
          <div className='md:hidden'>
            <SearchInput />
          </div>
        </NavbarCollapse>
        <div className='hidden md:flex'>
          <SearchInput />
        </div>
      </Navbar>
    </div>
  );
}
