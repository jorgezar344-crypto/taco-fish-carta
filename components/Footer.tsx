import Image from "next/image";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__wave" aria-hidden="true" />
      <Image src="/images/logo.webp" alt="Taco Fish" width={180} height={140} />
      <p>Los Cabos · Sabor Sonorense</p>
      <small>Nuestros precios no incluyen IVA</small>
    </footer>
  );
}
