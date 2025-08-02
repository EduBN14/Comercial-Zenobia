type Producto = {
  nombre: string;
  precio: string;
};

type Categoria = {
  tamaño: string;
  productos: Producto[];
};

type Producto_descripcion = {
  nombre: string
}

export const Producto_descripcion: Producto_descripcion[] = [
  {
    
    
  }
] 



export const catalogo_pag1: Categoria[] = [
  {
    tamaño: "1.5 PLZ",
    productos: [
      { nombre: "Box", precio: "s/ 290" },
      { nombre: "Cabecera entera (Ce)", precio: "s/ 200" },
      { nombre: "Cabecera flotante (Cf)", precio: "s/ 180" },
      { nombre: "Box + Ce + 🧍 + 🪑 + 01 🛏️", precio: "s/ 500" },
      { nombre: "Box + Cf + 🧍 + 🪑 + 01 🛏️", precio: "s/ 480" },
      { nombre: "Box espacio", precio: "s/ 450" },
      { nombre: "Box espacio + colchón APU + 01 🛏️", precio: "s/ 950" }
    ]
  },
  {
    tamaño: "2 PLZ",
    productos: [
      { nombre: "Box", precio: "s/ 320" },
      { nombre: "Box 2 piezas", precio: "s/ 380" },
      { nombre: "Cabecera entera (Ce)", precio: "s/ 240" },
      { nombre: "Cabecera flotante (Cf)", precio: "s/ 180" },
      { nombre: "Box + Ce + 🧍 + 🪑 + 02 🛏️", precio: "s/ 560" },
      { nombre: "Box + Cf + 🧍 + 🪑 + 02 🛏️", precio: "s/ 540" },
      { nombre: "Box 2 piezas + Ce + 🧍 + 🪑 + 02 🛏️", precio: "s/ 580" },
      { nombre: "Box 2 piezas + Cf + 🧍 + 🪑 + 02 🛏️", precio: "s/ 560" },
      { nombre: "Box espacio", precio: "s/ 520" },
      { nombre: "Box espacio + colchón APU + 02 🛏️", precio: "s/ 1080" }
    ]
  },
  {
    tamaño: "Q",
    productos: [
      { nombre: "Box", precio: "s/ 450" },
      { nombre: "Cabecera entera (Ce)", precio: "s/ 349" },
      { nombre: "Cabecera flotante (Cf)", precio: "s/ 300" },
      { nombre: "Box + Ce + 🧍 + 🪑 + 02 🛏️", precio: "s/ 780" },
      { nombre: "Box + Cf + 🧍 + 🪑 + 02 🛏️", precio: "s/ 700" }
    ]
  },
  {
    tamaño: "K",
    productos: [
      { nombre: "Box", precio: "s/ 500" },
      { nombre: "Cabecera entera (Ce)", precio: "s/ 400" },
      { nombre: "Cabecera flotante (Cf)", precio: "s/ 300" },
      { nombre: "Box + Ce + 🧍 + 🪑 + 02 🛏️", precio: "s/ 880" },
      { nombre: "Box + Cf + 🧍 + 🪑 + 02 🛏️", precio: "s/ 800" }
    ]
  }
];
