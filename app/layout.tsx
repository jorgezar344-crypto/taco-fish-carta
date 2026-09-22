import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Taco Fish | Carta Digital",
  description: "Carta digital de Taco Fish. Tacos, mariscos, cocteles, aguachiles, bebidas y más.",
  openGraph: {
    title: "Taco Fish | Carta Digital",
    description: "Carta digital de Taco Fish. Tacos, mariscos, cocteles, aguachiles, bebidas y más.",
    type: "website",
    locale: "es_MX",
    url: "https://taco-fish-carta.jorge88-799.chatgpt.site",
  },
  icons: { icon: "/images/logo.webp", shortcut: "/images/logo.webp" },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#03213b" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es-MX"><body>{children}</body></html>;
}
