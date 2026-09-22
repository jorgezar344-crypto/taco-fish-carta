import fs from "node:fs/promises";

const source = await fs.readFile(new URL("../data/menu.ts", import.meta.url), "utf8");
const executable = source.slice(source.indexOf("export const menu"))
  .replace("export const menu: MenuCategory[] =", "const menu =");
const menu = Function(`${executable}\nreturn menu;`)();

const expected = {
  tacos: [["Camarón",50],["Pescado",50],["Campechano",50],["Güerito Marlin",50],["Güerito Cheese",53],["Güerito Cheese con Camarón",53],["Güerito Cheese con Pescado",53],["Full",53],["Porción Queso Extra",20],["Plato de Verduras",36]],
  "tacos-sin-capear": [["Marlín",55],["Marlín con Queso",73],["Mantarraya",50]],
  tostadas: [["Ceviche de Pescado",50],["Ceviche de Camarón",57],["Marlín",55],["Pulpo",62],["Embarazada",122]],
  caldos: [["Cahuamanta",125],["Camarón",134],["Pescado",116],["Caldo Taco Fish",140],["Bichi",38]],
  cocteles: [["Camarón",146],["Pulpo",166],["Campechano",156],["Ceviche de Pescado",116],["Ceviche de Camarón",131],["Chabela de Camarón",174],["Chabela de Pulpo",205],["Chabela Campechana",189],["Chabela de Ceviche de Pescado",141],["Chabela de Ceviche de Camarón",160]],
  aguachiles: [["Natural",250],["Verde",250],["Rojo",250],["En Salsa Negra",250]],
  bebidas: [["Agua Natural",24],["Aguas Frescas",35],["Refrescos",41],["Artesanal",41]],
  cervezas: [["Corona",47],["Victoria",47],["Pacífico",58],["Modelo Especial",58],["Negra Modelo",58],["Michelob Ultra",58],["Stella Artois",58]],
  postres: [["Flan Napolitano",42],["Pay Helado de Queso con Limón",45],["Coyotas",35]],
};

const errors = [];
for (const [id, pairs] of Object.entries(expected)) {
  const category = menu.find((entry) => entry.id === id);
  if (!category) {
    errors.push(`Falta la categoría ${id}`);
    continue;
  }
  const actual = category.items.map((item) => [item.name, item.price]);
  if (JSON.stringify(actual) !== JSON.stringify(pairs)) errors.push(`Productos o precios incorrectos en ${id}`);
}

if (menu.length !== 9) errors.push(`Se esperaban 9 categorías y hay ${menu.length}`);
if (menu.reduce((total, category) => total + category.items.length, 0) !== 51) errors.push("El total debe ser 51 productos");
if (errors.length) throw new Error(errors.join("\n"));
console.log("Menú verificado: 9 categorías, 51 productos y todos los precios coinciden.");
