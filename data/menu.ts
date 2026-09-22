export type MenuItem = {
  name: string;
  description?: string;
  price: number;
  note?: string;
};

export type MenuCategory = {
  id: string;
  name: string;
  image: string;
  items: MenuItem[];
  note?: string;
};

export const menu: MenuCategory[] = [
  {
    id: "tacos", name: "Tacos", image: "/images/tacos.webp",
    items: [
      { name: "Camarón", description: "Capeado", price: 50 },
      { name: "Pescado", description: "Capeado", price: 50 },
      { name: "Campechano", description: "Pescado + camarón", price: 50 },
      { name: "Güerito Marlin", description: "Capeado", price: 50 },
      { name: "Güerito Cheese", description: "Chile caribe relleno de queso, capeado y picado", price: 53 },
      { name: "Güerito Cheese con Camarón", description: "Capeado", price: 53 },
      { name: "Güerito Cheese con Pescado", description: "Capeado", price: 53 },
      { name: "Full", description: "Camarón, pescado, güerito marlin y güerito cheese", price: 53 },
      { name: "Porción Queso Extra", price: 20 },
      { name: "Plato de Verduras", price: 36 },
    ],
  },
  {
    id: "tacos-sin-capear", name: "Tacos sin capear", image: "/images/tacos-sin-capear.webp",
    items: [
      { name: "Marlín", price: 55 }, { name: "Marlín con Queso", price: 73 }, { name: "Mantarraya", price: 50 },
    ],
  },
  {
    id: "tostadas", name: "Tostadas", image: "/images/tostadas.webp",
    items: [
      { name: "Ceviche de Pescado", price: 50 }, { name: "Ceviche de Camarón", price: 57 },
      { name: "Marlín", price: 55 }, { name: "Pulpo", price: 62 },
      { name: "Embarazada", description: "Tostada grande de camarón y pulpo", price: 122 },
    ],
  },
  {
    id: "caldos", name: "Caldos", image: "/images/caldos.webp",
    items: [
      { name: "Cahuamanta", description: "Mantarraya, camarón y verduras", price: 125 },
      { name: "Camarón", price: 134 }, { name: "Pescado", price: 116 },
      { name: "Caldo Taco Fish", description: "Camarón, pulpo y pescado", price: 140 }, { name: "Bichi", price: 38 },
    ],
  },
  {
    id: "cocteles", name: "Cocteles", image: "/images/cocteles.webp",
    items: [
      { name: "Camarón", price: 146 }, { name: "Pulpo", price: 166 }, { name: "Campechano", price: 156 },
      { name: "Ceviche de Pescado", price: 116 }, { name: "Ceviche de Camarón", price: 131 },
      { name: "Chabela de Camarón", price: 174 }, { name: "Chabela de Pulpo", price: 205 },
      { name: "Chabela Campechana", price: 189 }, { name: "Chabela de Ceviche de Pescado", price: 141 },
      { name: "Chabela de Ceviche de Camarón", price: 160 },
    ],
  },
  {
    id: "aguachiles", name: "Aguachiles", image: "/images/aguachiles.webp", note: "Tiempo de preparación: 20 min. aprox.",
    items: [
      { name: "Natural", price: 250 }, { name: "Verde", price: 250 },
      { name: "Rojo", description: "Muy picante", price: 250 }, { name: "En Salsa Negra", price: 250 },
    ],
  },
  {
    id: "bebidas", name: "Bebidas", image: "/images/bebidas.webp",
    items: [
      { name: "Agua Natural", price: 24 }, { name: "Aguas Frescas", price: 35 },
      { name: "Refrescos", price: 41 }, { name: "Artesanal", price: 41 },
    ],
  },
  {
    id: "cervezas", name: "Cervezas", image: "/images/cervezas.webp",
    items: [
      { name: "Corona", price: 47 }, { name: "Victoria", price: 47 }, { name: "Pacífico", price: 58 },
      { name: "Modelo Especial", price: 58 }, { name: "Negra Modelo", price: 58 },
      { name: "Michelob Ultra", price: 58 }, { name: "Stella Artois", price: 58 },
    ],
  },
  {
    id: "postres", name: "Postres", image: "/images/postres.webp",
    items: [
      { name: "Flan Napolitano", price: 42 }, { name: "Pay Helado de Queso con Limón", price: 45 }, { name: "Coyotas", price: 35 },
    ],
  },
];
