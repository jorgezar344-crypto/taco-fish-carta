"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={`site-header${scrolled || open ? " site-header--solid" : ""}`}>
      <a className="brand" href="#top" aria-label="Taco Fish, inicio">
        <Image src="/images/logo.webp" alt="Taco Fish" width={110} height={86} priority />
      </a>
      <nav className="desktop-nav" aria-label="Navegación principal"><a href="#menu">Menú</a></nav>
      <button className="menu-toggle" type="button" aria-label={open ? "Cerrar menú" : "Abrir menú"} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen((value) => !value)}>
        <span /><span /><span />
      </button>
      <nav id="mobile-menu" className={`mobile-nav${open ? " mobile-nav--open" : ""}`} aria-label="Navegación móvil">
        <a href="#menu" onClick={() => setOpen(false)}>Menú</a>
      </nav>
    </header>
  );
}
