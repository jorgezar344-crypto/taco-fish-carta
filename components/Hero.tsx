import Image from "next/image";

export function Hero() {
  return (
    <section className="hero" id="top" aria-label="Los Cabos Taco Fish">
      <Image className="hero__backdrop" src="/images/hero.webp" alt="" fill priority sizes="100vw" aria-hidden="true" />
      <div className="hero__frame">
        <Image className="hero__image" src="/images/hero.webp" alt="Los Cabos Taco Fish: sabor sonorense, mariscos, tacos y especialidades" fill priority sizes="(max-width: 700px) 100vw, 56vw" />
        <a className="hero__menu-hit" href="#menu" aria-label="Ver menú" />
      </div>
      <div className="hero__wash" aria-hidden="true" />
    </section>
  );
}
