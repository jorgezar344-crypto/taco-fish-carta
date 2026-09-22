import Image from "next/image";

export function Hero() {
  return (
    <section className="hero" id="top" aria-label="Los Cabos Taco Fish">
      <div className="hero__frame">
        <Image className="hero__image" src="/images/hero.webp" alt="Los Cabos Taco Fish: sabor sonorense, mariscos, tacos y especialidades" width={941} height={1672} priority sizes="(max-width: 941px) 100vw, 941px" />
        <a className="hero__menu-hit" href="#menu" aria-label="Ver menú" />
      </div>
      <div className="hero__wash" aria-hidden="true" />
    </section>
  );
}
