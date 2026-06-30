// ================================================================
// 4. SHOPPING CART (INTEGRADO CON SISTEMA DE SELECCIÓN PREVIA)
// ================================================================

const PRODUCTS = Object.fromEntries([
  [
    1,
    {
      category: "frescos",
      filter: "pescado_camarones",
      brand: "x",
      tag: "PESCADO FRESCO",
      name: "Filete de Tilapia",
      emoji: "🐟",
      presentation: "fresco",
      description:
        "Filete de tilapia fresco, sin espinas, de carne blanca y suave. Cocción rápida y ligera.",
      formats: [
        { id: "bolsa", label: "Bolsa", price: 79, unit: "bolsa 500 g" },
        { id: "caja", label: "Caja", price: 720, unit: "caja 5 kg" },
        { id: "granel", label: "Granel", price: 148, unit: "kg" },
      ],
      slides: [
        {
          icon: "🌿",
          title: "Empapelado",
          text: "Envuelve el filete con jitomate, cebolla y epazote; hornea 15 min a 190 °C. Ligero y jugoso.",
        },
        {
          icon: "🍅",
          title: "A la veracruzana",
          text: "Guisa con jitomate, aceitunas, alcaparras y chile güero. Sirve con arroz blanco.",
        },
        {
          icon: "🍲",
          title: "Caldo de pescado",
          text: "Cuece con verduras, chile y epazote. Caldo reconfortante listo en 20 min.",
        },
      ],
    },
  ],
  [
    2,
    {
      category: "frescos",
      filter: "pescado_camarones",
      brand: "y",
      tag: "CAMARÓN FRESCO",
      name: "Camarones",
      emoji: "🐟",
      presentation: "fresco",
      description:
        "Filete de tilapia fresco, sin espinas, de carne blanca y suave. Cocción rápida y ligera.",
      formats: [
        { id: "bolsa", label: "Bolsa", price: 79, unit: "bolsa 500 g" },
        { id: "caja", label: "Caja", price: 720, unit: "caja 5 kg" },
        { id: "granel", label: "Granel", price: 148, unit: "kg" },
      ],
      slides: [
        {
          icon: "🌿",
          title: "Empapelado",
          text: "Envuelve el filete con jitomate, cebolla y epazote; hornea 15 min a 190 °C. Ligero y jugoso.",
        },
        {
          icon: "🍅",
          title: "A la veracruzana",
          text: "Guisa con jitomate, aceitunas, alcaparras y chile güero. Sirve con arroz blanco.",
        },
        {
          icon: "🍲",
          title: "Caldo de pescado",
          text: "Cuece con verduras, chile y epazote. Caldo reconfortante listo en 20 min.",
        },
      ],
    },
  ],
  [
    3,
    {
      category: "frescos",
      filter: "pescado_camarones",
      brand: "x",
      tag: "PESCADO FRESCO",
      name: "Pescado Empanizado",
      emoji: "🐟",
      presentation: "fresco",
      description:
        "Filete de tilapia fresco, sin espinas, de carne blanca y suave. Cocción rápida y ligera.",
      formats: [
        { id: "bolsa", label: "Bolsa", price: 79, unit: "bolsa 500 g" },
        { id: "caja", label: "Caja", price: 720, unit: "caja 5 kg" },
        { id: "granel", label: "Granel", price: 148, unit: "kg" },
      ],
      slides: [
        {
          icon: "🌿",
          title: "Empapelado",
          text: "Envuelve el filete con jitomate, cebolla y epazote; hornea 15 min a 190 °C. Ligero y jugoso.",
        },
        {
          icon: "🍅",
          title: "A la veracruzana",
          text: "Guisa con jitomate, aceitunas, alcaparras y chile güero. Sirve con arroz blanco.",
        },
        {
          icon: "🍲",
          title: "Caldo de pescado",
          text: "Cuece con verduras, chile y epazote. Caldo reconfortante listo en 20 min.",
        },
      ],
    },
  ],
  [
    4,
    {
      category: "frescos",
      filter: "pescado_camarones",
      brand: "x",
      tag: "PESCADO FRESCO",
      name: "Dedos de Pescado",
      emoji: "🐟",
      presentation: "fresco",
      description:
        "Filete de tilapia fresco, sin espinas, de carne blanca y suave. Cocción rápida y ligera.",
      formats: [
        { id: "bolsa", label: "Bolsa", price: 79, unit: "bolsa 500 g" },
        { id: "caja", label: "Caja", price: 720, unit: "caja 5 kg" },
        { id: "granel", label: "Granel", price: 148, unit: "kg" },
      ],
      slides: [
        {
          icon: "🌿",
          title: "Empapelado",
          text: "Envuelve el filete con jitomate, cebolla y epazote; hornea 15 min a 190 °C. Ligero y jugoso.",
        },
        {
          icon: "🍅",
          title: "A la veracruzana",
          text: "Guisa con jitomate, aceitunas, alcaparras y chile güero. Sirve con arroz blanco.",
        },
        {
          icon: "🍲",
          title: "Caldo de pescado",
          text: "Cuece con verduras, chile y epazote. Caldo reconfortante listo en 20 min.",
        },
      ],
    },
  ],
  [
    5,
    {
      category: "frescos",
      filter: "pescado_camarones",
      brand: "y",
      tag: "QUESO FRESCO",
      name: "Dedos de Queso",
      emoji: "🐟",
      presentation: "fresco",
      description:
        "Filete de tilapia fresco, sin espinas, de carne blanca y suave. Cocción rápida y ligera.",
      formats: [
        { id: "bolsa", label: "Bolsa", price: 79, unit: "bolsa 500 g" },
        { id: "caja", label: "Caja", price: 720, unit: "caja 5 kg" },
        { id: "granel", label: "Granel", price: 148, unit: "kg" },
      ],
      slides: [
        {
          icon: "🌿",
          title: "Empapelado",
          text: "Envuelve el filete con jitomate, cebolla y epazote; hornea 15 min a 190 °C. Ligero y jugoso.",
        },
        {
          icon: "🍅",
          title: "A la veracruzana",
          text: "Guisa con jitomate, aceitunas, alcaparras y chile güero. Sirve con arroz blanco.",
        },
        {
          icon: "🍲",
          title: "Caldo de pescado",
          text: "Cuece con verduras, chile y epazote. Caldo reconfortante listo en 20 min.",
        },
      ],
    },
  ],

  [
    51,
    {
      category: "frescos",
      filter: "cerdo_res",
      brand: "x",
      tag: "CERDO FRESCO",
      name: "Pierna de Cerdo",
      emoji: "🐷",
      presentation: "fresco",
      description:
        "Chuleta de cerdo ahumada, precocida y lista para dorar. Sabor intenso en pocos minutos.",
      formats: [
        { id: "bolsa", label: "Bolsa", price: 98, unit: "bolsa 700 g" },
        { id: "caja", label: "Caja", price: 810, unit: "caja 6 kg" },
        { id: "granel", label: "Granel", price: 128, unit: "kg" },
      ],
      slides: [
        {
          icon: "🍳",
          title: "Sartén",
          text: "Fuego medio-alto, 2–3 min por lado solo para dorar y calentar. Ya viene ahumada y cocida.",
        },
        {
          icon: "🍖",
          title: "Parrilla",
          text: "Marca sobre brasas 2 min por lado. Barniza con un toque de miel o BBQ al final.",
        },
        {
          icon: "🔥",
          title: "Horno",
          text: "180 °C por 10–12 min. Acompaña con piña asada para realzar el ahumado.",
        },
      ],
    },
  ],
  [
    52,
    {
      category: "frescos",
      filter: "cerdo_res",
      brand: "y",
      tag: "SIRLOIN FRESCO",
      name: "Hamburguesa de Sirloin",
      emoji: "🐷",
      presentation: "fresco",
      description:
        "Chuleta de cerdo ahumada, precocida y lista para dorar. Sabor intenso en pocos minutos.",
      formats: [
        { id: "bolsa", label: "Bolsa", price: 98, unit: "bolsa 700 g" },
        { id: "caja", label: "Caja", price: 810, unit: "caja 6 kg" },
        { id: "granel", label: "Granel", price: 128, unit: "kg" },
      ],
      slides: [
        {
          icon: "🍳",
          title: "Sartén",
          text: "Fuego medio-alto, 2–3 min por lado solo para dorar y calentar. Ya viene ahumada y cocida.",
        },
        {
          icon: "🍖",
          title: "Parrilla",
          text: "Marca sobre brasas 2 min por lado. Barniza con un toque de miel o BBQ al final.",
        },
        {
          icon: "🔥",
          title: "Horno",
          text: "180 °C por 10–12 min. Acompaña con piña asada para realzar el ahumado.",
        },
      ],
    },
  ],
  [
    53,
    {
      category: "frescos",
      filter: "cerdo_res",
      brand: "y",
      tag: "ARRACHERA FRESCA",
      name: "Arrachera",
      emoji: "🐷",
      presentation: "fresco",
      description:
        "Chuleta de cerdo ahumada, precocida y lista para dorar. Sabor intenso en pocos minutos.",
      formats: [
        { id: "bolsa", label: "Bolsa", price: 98, unit: "bolsa 700 g" },
        { id: "caja", label: "Caja", price: 810, unit: "caja 6 kg" },
        { id: "granel", label: "Granel", price: 128, unit: "kg" },
      ],
      slides: [
        {
          icon: "🍳",
          title: "Sartén",
          text: "Fuego medio-alto, 2–3 min por lado solo para dorar y calentar. Ya viene ahumada y cocida.",
        },
        {
          icon: "🍖",
          title: "Parrilla",
          text: "Marca sobre brasas 2 min por lado. Barniza con un toque de miel o BBQ al final.",
        },
        {
          icon: "🔥",
          title: "Horno",
          text: "180 °C por 10–12 min. Acompaña con piña asada para realzar el ahumado.",
        },
      ],
    },
  ],

  [
    101,
    {
      category: "frescos",
      filter: "pollo_nuggets",
      brand: "x",
      tag: "NUGGET",
      name: "Nuggets de Pollo",
      emoji: "🍗",
      presentation: "empaquetado",
      description:
        "Pechuga fileteada delgada, lista para empanizar, plancha o relleno. Cocción rápida y uniforme.",
      formats: [
        { id: "bolsa", label: "Bolsa", price: 142, unit: "bolsa 1 kg" },
        { id: "caja", label: "Caja", price: 1290, unit: "caja 10 kg" },
        { id: "granel", label: "Granel", price: 135, unit: "kg" },
      ],
      slides: [
        {
          icon: "🍳",
          title: "Sartén",
          text: "Calienta 1 cda de aceite a fuego medio-alto. Sella 3–4 min por lado hasta dorar. Temperatura interna 74 °C.",
        },
        {
          icon: "🔥",
          title: "Horno",
          text: "Precalienta a 200 °C. Hornea 18–22 min. Barniza con aceite y reposa 5 min antes de cortar.",
        },
        {
          icon: "🍖",
          title: "Parrilla",
          text: "Brasas a fuego medio. Asa 5–6 min por lado y marca en diagonal. Pincela con aceite para que no se pegue.",
        },
        {
          icon: "💨",
          title: "Freidora de aire",
          text: "180 °C por 12–14 min, voltea a la mitad. Rocía aceite ligero: dorado por fuera, jugoso por dentro.",
        },
      ],
    },
  ],
  [
    102,
    {
      category: "frescos",
      filter: "pollo_nuggets",
      brand: "y",
      tag: "POLLO",
      name: "Tenders de Pollo",
      emoji: "🍗",
      presentation: "empaquetado",
      description:
        "Pechuga fileteada delgada, lista para empanizar, plancha o relleno. Cocción rápida y uniforme.",
      formats: [
        { id: "bolsa", label: "Bolsa", price: 142, unit: "bolsa 1 kg" },
        { id: "caja", label: "Caja", price: 1290, unit: "caja 10 kg" },
        { id: "granel", label: "Granel", price: 135, unit: "kg" },
      ],
      slides: [
        {
          icon: "🍳",
          title: "Sartén",
          text: "Calienta 1 cda de aceite a fuego medio-alto. Sella 3–4 min por lado hasta dorar. Temperatura interna 74 °C.",
        },
        {
          icon: "🔥",
          title: "Horno",
          text: "Precalienta a 200 °C. Hornea 18–22 min. Barniza con aceite y reposa 5 min antes de cortar.",
        },
        {
          icon: "🍖",
          title: "Parrilla",
          text: "Brasas a fuego medio. Asa 5–6 min por lado y marca en diagonal. Pincela con aceite para que no se pegue.",
        },
        {
          icon: "💨",
          title: "Freidora de aire",
          text: "180 °C por 12–14 min, voltea a la mitad. Rocía aceite ligero: dorado por fuera, jugoso por dentro.",
        },
      ],
    },
  ],
  [
    103,
    {
      category: "frescos",
      filter: "pollo_nuggets",
      brand: "x",
      tag: "POLLO",
      name: "Cordon Blue / Pechuga Rellena",
      emoji: "🍗",
      presentation: "empaquetado",
      description:
        "Pechuga fileteada delgada, lista para empanizar, plancha o relleno. Cocción rápida y uniforme.",
      formats: [
        { id: "bolsa", label: "Bolsa", price: 142, unit: "bolsa 1 kg" },
        { id: "caja", label: "Caja", price: 1290, unit: "caja 10 kg" },
        { id: "granel", label: "Granel", price: 135, unit: "kg" },
      ],
      slides: [
        {
          icon: "🍳",
          title: "Sartén",
          text: "Calienta 1 cda de aceite a fuego medio-alto. Sella 3–4 min por lado hasta dorar. Temperatura interna 74 °C.",
        },
        {
          icon: "🔥",
          title: "Horno",
          text: "Precalienta a 200 °C. Hornea 18–22 min. Barniza con aceite y reposa 5 min antes de cortar.",
        },
        {
          icon: "🍖",
          title: "Parrilla",
          text: "Brasas a fuego medio. Asa 5–6 min por lado y marca en diagonal. Pincela con aceite para que no se pegue.",
        },
        {
          icon: "💨",
          title: "Freidora de aire",
          text: "180 °C por 12–14 min, voltea a la mitad. Rocía aceite ligero: dorado por fuera, jugoso por dentro.",
        },
      ],
    },
  ],
  [
    104,
    {
      category: "frescos",
      filter: "pollo_nuggets",
      brand: "y",
      tag: "POLLO",
      name: "Milanesa de Pollo",
      emoji: "🍗",
      presentation: "empaquetado",
      description:
        "Pechuga fileteada delgada, lista para empanizar, plancha o relleno. Cocción rápida y uniforme.",
      formats: [
        { id: "bolsa", label: "Bolsa", price: 142, unit: "bolsa 1 kg" },
        { id: "caja", label: "Caja", price: 1290, unit: "caja 10 kg" },
        { id: "granel", label: "Granel", price: 135, unit: "kg" },
      ],
      slides: [
        {
          icon: "🍳",
          title: "Sartén",
          text: "Calienta 1 cda de aceite a fuego medio-alto. Sella 3–4 min por lado hasta dorar. Temperatura interna 74 °C.",
        },
        {
          icon: "🔥",
          title: "Horno",
          text: "Precalienta a 200 °C. Hornea 18–22 min. Barniza con aceite y reposa 5 min antes de cortar.",
        },
        {
          icon: "🍖",
          title: "Parrilla",
          text: "Brasas a fuego medio. Asa 5–6 min por lado y marca en diagonal. Pincela con aceite para que no se pegue.",
        },
        {
          icon: "💨",
          title: "Freidora de aire",
          text: "180 °C por 12–14 min, voltea a la mitad. Rocía aceite ligero: dorado por fuera, jugoso por dentro.",
        },
      ],
    },
  ],
  [
    105,
    {
      category: "frescos",
      filter: "pollo_nuggets",
      brand: "x",
      tag: "POLLO",
      name: "Hamburguesa de Pollo",
      emoji: "🍗",
      presentation: "empaquetado",
      description:
        "Pechuga fileteada delgada, lista para empanizar, plancha o relleno. Cocción rápida y uniforme.",
      formats: [
        { id: "bolsa", label: "Bolsa", price: 142, unit: "bolsa 1 kg" },
        { id: "caja", label: "Caja", price: 1290, unit: "caja 10 kg" },
        { id: "granel", label: "Granel", price: 135, unit: "kg" },
      ],
      slides: [
        {
          icon: "🍳",
          title: "Sartén",
          text: "Calienta 1 cda de aceite a fuego medio-alto. Sella 3–4 min por lado hasta dorar. Temperatura interna 74 °C.",
        },
        {
          icon: "🔥",
          title: "Horno",
          text: "Precalienta a 200 °C. Hornea 18–22 min. Barniza con aceite y reposa 5 min antes de cortar.",
        },
        {
          icon: "🍖",
          title: "Parrilla",
          text: "Brasas a fuego medio. Asa 5–6 min por lado y marca en diagonal. Pincela con aceite para que no se pegue.",
        },
        {
          icon: "💨",
          title: "Freidora de aire",
          text: "180 °C por 12–14 min, voltea a la mitad. Rocía aceite ligero: dorado por fuera, jugoso por dentro.",
        },
      ],
    },
  ],
  [
    106,
    {
      category: "frescos",
      filter: "pollo_nuggets",
      brand: "y",
      tag: "POLLO",
      name: "Medallon de Pollo",
      emoji: "🍗",
      presentation: "empaquetado",
      description:
        "Pechuga fileteada delgada, lista para empanizar, plancha o relleno. Cocción rápida y uniforme.",
      formats: [
        { id: "bolsa", label: "Bolsa", price: 142, unit: "bolsa 1 kg" },
        { id: "caja", label: "Caja", price: 1290, unit: "caja 10 kg" },
        { id: "granel", label: "Granel", price: 135, unit: "kg" },
      ],
      slides: [
        {
          icon: "🍳",
          title: "Sartén",
          text: "Calienta 1 cda de aceite a fuego medio-alto. Sella 3–4 min por lado hasta dorar. Temperatura interna 74 °C.",
        },
        {
          icon: "🔥",
          title: "Horno",
          text: "Precalienta a 200 °C. Hornea 18–22 min. Barniza con aceite y reposa 5 min antes de cortar.",
        },
        {
          icon: "🍖",
          title: "Parrilla",
          text: "Brasas a fuego medio. Asa 5–6 min por lado y marca en diagonal. Pincela con aceite para que no se pegue.",
        },
        {
          icon: "💨",
          title: "Freidora de aire",
          text: "180 °C por 12–14 min, voltea a la mitad. Rocía aceite ligero: dorado por fuera, jugoso por dentro.",
        },
      ],
    },
  ],
  [
    107,
    {
      category: "frescos",
      filter: "pollo_nuggets",
      brand: "y",
      tag: "NUGGET",
      name: "Nuggetsaurio",
      emoji: "🍗",
      presentation: "empaquetado",
      description:
        "Pechuga fileteada delgada, lista para empanizar, plancha o relleno. Cocción rápida y uniforme.",
      formats: [
        { id: "bolsa", label: "Bolsa", price: 142, unit: "bolsa 1 kg" },
        { id: "caja", label: "Caja", price: 1290, unit: "caja 10 kg" },
        { id: "granel", label: "Granel", price: 135, unit: "kg" },
      ],
      slides: [
        {
          icon: "🍳",
          title: "Sartén",
          text: "Calienta 1 cda de aceite a fuego medio-alto. Sella 3–4 min por lado hasta dorar. Temperatura interna 74 °C.",
        },
        {
          icon: "🔥",
          title: "Horno",
          text: "Precalienta a 200 °C. Hornea 18–22 min. Barniza con aceite y reposa 5 min antes de cortar.",
        },
        {
          icon: "🍖",
          title: "Parrilla",
          text: "Brasas a fuego medio. Asa 5–6 min por lado y marca en diagonal. Pincela con aceite para que no se pegue.",
        },
        {
          icon: "💨",
          title: "Freidora de aire",
          text: "180 °C por 12–14 min, voltea a la mitad. Rocía aceite ligero: dorado por fuera, jugoso por dentro.",
        },
      ],
    },
  ],

  [
    151,
    {
      category: "congelados",
      filter: "papas_snacks",
      brand: "x",
      tag: "SNACK",
      name: "Aros de Cebolla",
      emoji: "🍗",
      presentation: "empaquetado",
      description:
        "Pechuga fileteada delgada, lista para empanizar, plancha o relleno. Cocción rápida y uniforme.",
      formats: [
        { id: "bolsa", label: "Bolsa", price: 142, unit: "bolsa 1 kg" },
        { id: "caja", label: "Caja", price: 1290, unit: "caja 10 kg" },
        { id: "granel", label: "Granel", price: 135, unit: "kg" },
      ],
      slides: [
        {
          icon: "🍳",
          title: "Sartén",
          text: "Calienta 1 cda de aceite a fuego medio-alto. Sella 3–4 min por lado hasta dorar. Temperatura interna 74 °C.",
        },
        {
          icon: "🔥",
          title: "Horno",
          text: "Precalienta a 200 °C. Hornea 18–22 min. Barniza con aceite y reposa 5 min antes de cortar.",
        },
        {
          icon: "🍖",
          title: "Parrilla",
          text: "Brasas a fuego medio. Asa 5–6 min por lado y marca en diagonal. Pincela con aceite para que no se pegue.",
        },
        {
          icon: "💨",
          title: "Freidora de aire",
          text: "180 °C por 12–14 min, voltea a la mitad. Rocía aceite ligero: dorado por fuera, jugoso por dentro.",
        },
      ],
    },
  ],
  [
    152,
    {
      category: "congelados",
      filter: "papas_snacks",
      brand: "x",
      tag: "SNACK",
      name: "Camote a la Francesa",
      emoji: "🍗",
      presentation: "empaquetado",
      description:
        "Pechuga fileteada delgada, lista para empanizar, plancha o relleno. Cocción rápida y uniforme.",
      formats: [
        { id: "bolsa", label: "Bolsa", price: 142, unit: "bolsa 1 kg" },
        { id: "caja", label: "Caja", price: 1290, unit: "caja 10 kg" },
        { id: "granel", label: "Granel", price: 135, unit: "kg" },
      ],
      slides: [
        {
          icon: "🍳",
          title: "Sartén",
          text: "Calienta 1 cda de aceite a fuego medio-alto. Sella 3–4 min por lado hasta dorar. Temperatura interna 74 °C.",
        },
        {
          icon: "🔥",
          title: "Horno",
          text: "Precalienta a 200 °C. Hornea 18–22 min. Barniza con aceite y reposa 5 min antes de cortar.",
        },
        {
          icon: "🍖",
          title: "Parrilla",
          text: "Brasas a fuego medio. Asa 5–6 min por lado y marca en diagonal. Pincela con aceite para que no se pegue.",
        },
        {
          icon: "💨",
          title: "Freidora de aire",
          text: "180 °C por 12–14 min, voltea a la mitad. Rocía aceite ligero: dorado por fuera, jugoso por dentro.",
        },
      ],
    },
  ],
  [
    153,
    {
      category: "congelados",
      filter: "papas_snacks",
      brand: "y",
      tag: "PAPAS",
      name: "Papas Gajo",
      emoji: "🍗",
      presentation: "empaquetado",
      description:
        "Pechuga fileteada delgada, lista para empanizar, plancha o relleno. Cocción rápida y uniforme.",
      formats: [
        { id: "bolsa", label: "Bolsa", price: 142, unit: "bolsa 1 kg" },
        { id: "caja", label: "Caja", price: 1290, unit: "caja 10 kg" },
        { id: "granel", label: "Granel", price: 135, unit: "kg" },
      ],
      slides: [
        {
          icon: "🍳",
          title: "Sartén",
          text: "Calienta 1 cda de aceite a fuego medio-alto. Sella 3–4 min por lado hasta dorar. Temperatura interna 74 °C.",
        },
        {
          icon: "🔥",
          title: "Horno",
          text: "Precalienta a 200 °C. Hornea 18–22 min. Barniza con aceite y reposa 5 min antes de cortar.",
        },
        {
          icon: "🍖",
          title: "Parrilla",
          text: "Brasas a fuego medio. Asa 5–6 min por lado y marca en diagonal. Pincela con aceite para que no se pegue.",
        },
        {
          icon: "💨",
          title: "Freidora de aire",
          text: "180 °C por 12–14 min, voltea a la mitad. Rocía aceite ligero: dorado por fuera, jugoso por dentro.",
        },
      ],
    },
  ],
  [
    154,
    {
      category: "congelados",
      filter: "papas_snacks",
      brand: "x",
      tag: "PAPAS",
      name: "Papas a la Francesa Crunch",
      emoji: "🍗",
      presentation: "empaquetado",
      description:
        "Pechuga fileteada delgada, lista para empanizar, plancha o relleno. Cocción rápida y uniforme.",
      formats: [
        { id: "bolsa", label: "Bolsa", price: 142, unit: "bolsa 1 kg" },
        { id: "caja", label: "Caja", price: 1290, unit: "caja 10 kg" },
        { id: "granel", label: "Granel", price: 135, unit: "kg" },
      ],
      slides: [
        {
          icon: "🍳",
          title: "Sartén",
          text: "Calienta 1 cda de aceite a fuego medio-alto. Sella 3–4 min por lado hasta dorar. Temperatura interna 74 °C.",
        },
        {
          icon: "🔥",
          title: "Horno",
          text: "Precalienta a 200 °C. Hornea 18–22 min. Barniza con aceite y reposa 5 min antes de cortar.",
        },
        {
          icon: "🍖",
          title: "Parrilla",
          text: "Brasas a fuego medio. Asa 5–6 min por lado y marca en diagonal. Pincela con aceite para que no se pegue.",
        },
        {
          icon: "💨",
          title: "Freidora de aire",
          text: "180 °C por 12–14 min, voltea a la mitad. Rocía aceite ligero: dorado por fuera, jugoso por dentro.",
        },
      ],
    },
  ],
  [
    155,
    {
      category: "congelados",
      filter: "papas_snacks",
      brand: "x",
      tag: "PAPAS",
      name: "Tortita de Papa",
      emoji: "🍗",
      presentation: "empaquetado",
      description:
        "Pechuga fileteada delgada, lista para empanizar, plancha o relleno. Cocción rápida y uniforme.",
      formats: [
        { id: "bolsa", label: "Bolsa", price: 142, unit: "bolsa 1 kg" },
        { id: "caja", label: "Caja", price: 1290, unit: "caja 10 kg" },
        { id: "granel", label: "Granel", price: 135, unit: "kg" },
      ],
      slides: [
        {
          icon: "🍳",
          title: "Sartén",
          text: "Calienta 1 cda de aceite a fuego medio-alto. Sella 3–4 min por lado hasta dorar. Temperatura interna 74 °C.",
        },
        {
          icon: "🔥",
          title: "Horno",
          text: "Precalienta a 200 °C. Hornea 18–22 min. Barniza con aceite y reposa 5 min antes de cortar.",
        },
        {
          icon: "🍖",
          title: "Parrilla",
          text: "Brasas a fuego medio. Asa 5–6 min por lado y marca en diagonal. Pincela con aceite para que no se pegue.",
        },
        {
          icon: "💨",
          title: "Freidora de aire",
          text: "180 °C por 12–14 min, voltea a la mitad. Rocía aceite ligero: dorado por fuera, jugoso por dentro.",
        },
      ],
    },
  ],
  [
    156,
    {
      category: "congelados",
      filter: "papas_snacks",
      brand: "y",
      tag: "PAPAS",
      name: "Papa Wafle",
      emoji: "🍗",
      presentation: "empaquetado",
      description:
        "Pechuga fileteada delgada, lista para empanizar, plancha o relleno. Cocción rápida y uniforme.",
      formats: [
        { id: "bolsa", label: "Bolsa", price: 142, unit: "bolsa 1 kg" },
        { id: "caja", label: "Caja", price: 1290, unit: "caja 10 kg" },
        { id: "granel", label: "Granel", price: 135, unit: "kg" },
      ],
      slides: [
        {
          icon: "🍳",
          title: "Sartén",
          text: "Calienta 1 cda de aceite a fuego medio-alto. Sella 3–4 min por lado hasta dorar. Temperatura interna 74 °C.",
        },
        {
          icon: "🔥",
          title: "Horno",
          text: "Precalienta a 200 °C. Hornea 18–22 min. Barniza con aceite y reposa 5 min antes de cortar.",
        },
        {
          icon: "🍖",
          title: "Parrilla",
          text: "Brasas a fuego medio. Asa 5–6 min por lado y marca en diagonal. Pincela con aceite para que no se pegue.",
        },
        {
          icon: "💨",
          title: "Freidora de aire",
          text: "180 °C por 12–14 min, voltea a la mitad. Rocía aceite ligero: dorado por fuera, jugoso por dentro.",
        },
      ],
    },
  ],

  [
    201,
    {
      category: "congelados",
      filter: "alitas_boneless",
      brand: "x",
      tag: "PECHUGAS",
      name: "Trozos de Pechuga Empanizadas",
      emoji: "🍗",
      presentation: "empaquetado",
      description:
        "Pechuga fileteada delgada, lista para empanizar, plancha o relleno. Cocción rápida y uniforme.",
      formats: [
        { id: "bolsa", label: "Bolsa", price: 142, unit: "bolsa 1 kg" },
        { id: "caja", label: "Caja", price: 1290, unit: "caja 10 kg" },
        { id: "granel", label: "Granel", price: 135, unit: "kg" },
      ],
      slides: [
        {
          icon: "🍳",
          title: "Sartén",
          text: "Calienta 1 cda de aceite a fuego medio-alto. Sella 3–4 min por lado hasta dorar. Temperatura interna 74 °C.",
        },
        {
          icon: "🔥",
          title: "Horno",
          text: "Precalienta a 200 °C. Hornea 18–22 min. Barniza con aceite y reposa 5 min antes de cortar.",
        },
        {
          icon: "🍖",
          title: "Parrilla",
          text: "Brasas a fuego medio. Asa 5–6 min por lado y marca en diagonal. Pincela con aceite para que no se pegue.",
        },
        {
          icon: "💨",
          title: "Freidora de aire",
          text: "180 °C por 12–14 min, voltea a la mitad. Rocía aceite ligero: dorado por fuera, jugoso por dentro.",
        },
      ],
    },
  ],
  [
    202,
    {
      category: "congelados",
      filter: "alitas_boneless",
      brand: "x",
      tag: "BONELESS",
      name: "Boneless Naturales",
      emoji: "🍗",
      presentation: "empaquetado",
      description:
        "Pechuga fileteada delgada, lista para empanizar, plancha o relleno. Cocción rápida y uniforme.",
      formats: [
        { id: "bolsa", label: "Bolsa", price: 142, unit: "bolsa 1 kg" },
        { id: "caja", label: "Caja", price: 1290, unit: "caja 10 kg" },
        { id: "granel", label: "Granel", price: 135, unit: "kg" },
      ],
      slides: [
        {
          icon: "🍳",
          title: "Sartén",
          text: "Calienta 1 cda de aceite a fuego medio-alto. Sella 3–4 min por lado hasta dorar. Temperatura interna 74 °C.",
        },
        {
          icon: "🔥",
          title: "Horno",
          text: "Precalienta a 200 °C. Hornea 18–22 min. Barniza con aceite y reposa 5 min antes de cortar.",
        },
        {
          icon: "🍖",
          title: "Parrilla",
          text: "Brasas a fuego medio. Asa 5–6 min por lado y marca en diagonal. Pincela con aceite para que no se pegue.",
        },
        {
          icon: "💨",
          title: "Freidora de aire",
          text: "180 °C por 12–14 min, voltea a la mitad. Rocía aceite ligero: dorado por fuera, jugoso por dentro.",
        },
      ],
    },
  ],
  [
    203,
    {
      category: "congelados",
      filter: "alitas_boneless",
      brand: "y",
      tag: "BONELESS",
      name: "Boneless Pimienta Limón",
      emoji: "🍗",
      presentation: "empaquetado",
      description:
        "Pechuga fileteada delgada, lista para empanizar, plancha o relleno. Cocción rápida y uniforme.",
      formats: [
        { id: "bolsa", label: "Bolsa", price: 142, unit: "bolsa 1 kg" },
        { id: "caja", label: "Caja", price: 1290, unit: "caja 10 kg" },
        { id: "granel", label: "Granel", price: 135, unit: "kg" },
      ],
      slides: [
        {
          icon: "🍳",
          title: "Sartén",
          text: "Calienta 1 cda de aceite a fuego medio-alto. Sella 3–4 min por lado hasta dorar. Temperatura interna 74 °C.",
        },
        {
          icon: "🔥",
          title: "Horno",
          text: "Precalienta a 200 °C. Hornea 18–22 min. Barniza con aceite y reposa 5 min antes de cortar.",
        },
        {
          icon: "🍖",
          title: "Parrilla",
          text: "Brasas a fuego medio. Asa 5–6 min por lado y marca en diagonal. Pincela con aceite para que no se pegue.",
        },
        {
          icon: "💨",
          title: "Freidora de aire",
          text: "180 °C por 12–14 min, voltea a la mitad. Rocía aceite ligero: dorado por fuera, jugoso por dentro.",
        },
      ],
    },
  ],
  [
    204,
    {
      category: "congelados",
      filter: "alitas_boneless",
      brand: "x",
      tag: "BONELESS",
      name: "Boneless Valentina",
      emoji: "🍗",
      presentation: "empaquetado",
      description:
        "Pechuga fileteada delgada, lista para empanizar, plancha o relleno. Cocción rápida y uniforme.",
      formats: [
        { id: "bolsa", label: "Bolsa", price: 142, unit: "bolsa 1 kg" },
        { id: "caja", label: "Caja", price: 1290, unit: "caja 10 kg" },
        { id: "granel", label: "Granel", price: 135, unit: "kg" },
      ],
      slides: [
        {
          icon: "🍳",
          title: "Sartén",
          text: "Calienta 1 cda de aceite a fuego medio-alto. Sella 3–4 min por lado hasta dorar. Temperatura interna 74 °C.",
        },
        {
          icon: "🔥",
          title: "Horno",
          text: "Precalienta a 200 °C. Hornea 18–22 min. Barniza con aceite y reposa 5 min antes de cortar.",
        },
        {
          icon: "🍖",
          title: "Parrilla",
          text: "Brasas a fuego medio. Asa 5–6 min por lado y marca en diagonal. Pincela con aceite para que no se pegue.",
        },
        {
          icon: "💨",
          title: "Freidora de aire",
          text: "180 °C por 12–14 min, voltea a la mitad. Rocía aceite ligero: dorado por fuera, jugoso por dentro.",
        },
      ],
    },
  ],
  [
    251,
    {
      category: "huevo",
      filter: "huevo",
      tag: "HUEVO",
      name: "Huevo Blanco",
      emoji: "🥚",
      presentation: "empaquetado",
      description:
        "Huevo blanco fresco de gallina, calibre mediano. Fuente de proteína para todos los días.",
      formats: [
        { id: "bolsa", label: "Bolsa", price: 89, unit: "cartón 30 pzas" },
        { id: "caja", label: "Caja", price: 1080, unit: "caja 360 pzas" },
        { id: "granel", label: "Granel", price: 2.9, unit: "pieza" },
      ],
      slides: [
        {
          icon: "🍳",
          title: "Revuelto",
          text: "Bate con una pizca de sal, vierte en sartén con mantequilla a fuego bajo y mueve hasta cuajar suave.",
        },
        {
          icon: "☀️",
          title: "Estrellado",
          text: "Aceite caliente, rompe el huevo y cuece 2 min. Para yema líquida, tapa 30 seg al final.",
        },
        {
          icon: "💧",
          title: "Pochado",
          text: "Agua a punto de hervir con un chorrito de vinagre. Cuece 3 min sin que hierva fuerte.",
        },
      ],
    },
  ],
  [
    252,
    {
      category: "huevo",
      filter: "huevo",
      tag: "HUEVO",
      name: "Huevo Moreno",
      emoji: "🥚",
      presentation: "empaquetado",
      description:
        "Huevo blanco fresco de gallina, calibre mediano. Fuente de proteína para todos los días.",
      formats: [
        { id: "bolsa", label: "Bolsa", price: 89, unit: "cartón 30 pzas" },
        { id: "caja", label: "Caja", price: 1080, unit: "caja 360 pzas" },
        { id: "granel", label: "Granel", price: 2.9, unit: "pieza" },
      ],
      slides: [
        {
          icon: "🍳",
          title: "Revuelto",
          text: "Bate con una pizca de sal, vierte en sartén con mantequilla a fuego bajo y mueve hasta cuajar suave.",
        },
        {
          icon: "☀️",
          title: "Estrellado",
          text: "Aceite caliente, rompe el huevo y cuece 2 min. Para yema líquida, tapa 30 seg al final.",
        },
        {
          icon: "💧",
          title: "Pochado",
          text: "Agua a punto de hervir con un chorrito de vinagre. Cuece 3 min sin que hierva fuerte.",
        },
      ],
    },
  ],
  [
    253,
    {
      category: "huevo",
      filter: "huevo",
      tag: "HUEVO",
      name: "Huevo por Kilo",
      emoji: "🥚",
      presentation: "empaquetado",
      description:
        "Huevo blanco fresco de gallina, calibre mediano. Fuente de proteína para todos los días.",
      formats: [
        { id: "bolsa", label: "Bolsa", price: 89, unit: "cartón 30 pzas" },
        { id: "caja", label: "Caja", price: 1080, unit: "caja 360 pzas" },
        { id: "granel", label: "Granel", price: 2.9, unit: "pieza" },
      ],
      slides: [
        {
          icon: "🍳",
          title: "Revuelto",
          text: "Bate con una pizca de sal, vierte en sartén con mantequilla a fuego bajo y mueve hasta cuajar suave.",
        },
        {
          icon: "☀️",
          title: "Estrellado",
          text: "Aceite caliente, rompe el huevo y cuece 2 min. Para yema líquida, tapa 30 seg al final.",
        },
        {
          icon: "💧",
          title: "Pochado",
          text: "Agua a punto de hervir con un chorrito de vinagre. Cuece 3 min sin que hierva fuerte.",
        },
      ],
    },
  ],
]);

let cart = JSON.parse(localStorage.getItem("grupolloCart")) || [];

const container = document.getElementById("toastContainer");
const cartModal = document.getElementById("cartModal");
const cartOverlay = document.getElementById("cartOverlay");
const cartBtn = document.getElementById("cartBtn");
const closeCartBtns = document.querySelectorAll(".close-cart");
const cartItemsContainer = document.getElementById("cartItems");
const cartTotalElement = document.getElementById("cartTotal");
const cartCountElements = document.querySelectorAll(".cart-count");
const waCartBtn = document.getElementById("waCartBtn");

const branches = [
  {
    id: "cuajimalpa",
    name: "Cuajimalpa",
    address: "Av. Jesús del Monte 100, Adolfo López Mateos, 05260",
    phone: "55 63 49 94 51",
  },
  {
    id: "sanbernabe",
    name: "San Bernabé",
    address:
      "Av. Guerrero 40, San Bernabé Ocotepec, La Magdalena Contreras, 10300",
    phone: "55 3614 3307",
  },
  {
    id: "tacubaya",
    name: "Tacubaya",
    address: "Héroes de 1810, Tacubaya, Miguel Hidalgo, 11870 CDMX",
    phone: "55 36 14 30 37",
  },
  {
    id: "pedregal",
    name: "Pedregal",
    address:
      "Carretera federal a cuernavaca #5857 bis San Andrés Totoltepec Tlalpan CDMX C.P 14400",
    phone: "56 10 30 98 49",
  },
  {
    id: "sanpedro",
    name: "San Pedro Mártir",
    address:
      "Carr. Federal A Cuernavaca 5857, San Pedro Mártir, Tlalpan, 14659 Ciudad de México, CDMX",
    phone: "55 69 66 68 83",
  },
];

let selectedBranchId = null;

function showToast(message, type = "success") {
  if (!container) return;
  const toast = document.createElement("div");
  const bgColor = type === "success" ? "bg-[#4A2C10]" : "bg-[#D15E1D]";
  const icon =
    type === "success"
      ? '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" /></svg>'
      : '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" /></svg>';

  toast.className = `toast ${bgColor} text-white px-5 py-3 rounded-2xl shadow-xl flex items-center gap-3 max-w-sm`;
  toast.innerHTML = `${icon}<span class="text-sm font-semibold">${message}</span>`;

  container.appendChild(toast);
  console.log(toast, "toast");

  // Auto remove
  setTimeout(() => {
    toast.classList.add("hide");
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

function renderBranches() {
  const list = document.getElementById("branchList");
  if (!list) return;
  list.innerHTML = "";

  branches.forEach((b) => {
    const card = document.createElement("div");
    card.id = "branch-card-" + b.id;
    card.className = "branch-card";
    card.innerHTML = `
      <div class="branch-dot" id="branch-dot-${b.id}"></div>
      <div>
        <p class="branch-name">${b.name}</p>
        <p class="branch-phone">📞 ${b.phone}</p>
      </div>
    `;
    card.addEventListener("click", () => selectBranch(b.id));
    list.appendChild(card);
  });
}

function selectBranch(id) {
  selectedBranchId = id;
  const err = document.getElementById("branchError");
  if (err) err.classList.add("hidden");

  branches.forEach((b) => {
    const card = document.getElementById("branch-card-" + b.id);
    if (b.id === id) {
      card.classList.add("selected");
    } else {
      card.classList.remove("selected");
    }
  });
}

function openCart() {
  if (!cartOverlay || !cartModal) return;
  document.body.classList.add("cart-open");
  cartOverlay.classList.remove("hidden");
  requestAnimationFrame(() => {
    cartOverlay.classList.remove("opacity-0");
    cartModal.classList.remove("translate-x-full");
  });
}

function closeCart() {
  if (!cartOverlay || !cartModal) return;
  cartModal.classList.add("translate-x-full");
  cartOverlay.classList.add("opacity-0");
  setTimeout(() => {
    cartOverlay.classList.add("hidden");
    document.body.classList.remove("cart-open");
  }, 300);
}

if (cartBtn) cartBtn.addEventListener("click", openCart);
closeCartBtns.forEach((btn) => btn.addEventListener("click", closeCart));
if (cartOverlay) cartOverlay.addEventListener("click", closeCart);

// Add to cart buttons

function addCart(e, id) {
  const target = e.currentTarget;
  // const id = target.dataset.id;
  // const name = target.dataset.name;
  // const price = parseFloat(target.dataset.price);

  // Button pop animation
  gsap.to(target, { scale: 0.85, duration: 0.1, yoyo: true, repeat: 1 });

  let padre = target.parentNode;
  let presentacion = padre.querySelector(".gp-pill.active");
  // if (!cantidadInput) return;
  // let cantidad = parseInt(cantidadInput.value);
  // addItemToCart(id, name, price);

  if (!cart[id]) {
    // Object.fromEntries(PRODUCTS.map((p) => [p.id, { format: "granel", qty: 0 }]))
    let productosActuales = Object.entries(cart).map(([key, val]) => [
      key,
      val,
    ]);
    const product = PRODUCTS[id] || null;
    if (!product) {
      showToast("Producto no encontrado", "warning");
      return;
    }
    productosActuales.push([
      id,
      { format: presentacion.dataset.format || "", qty: 0 },
    ]);

    cart = Object.fromEntries(productosActuales);
  }
  cart[id].qty += 1;
  saveCart();
  updateCartUI();
  renderProducts();

  // Show toast
  showToast(`${name} agregado al pedido`, "success");

  // Bounce cart icon
  if (cartBtn) {
    gsap.fromTo(
      cartBtn,
      { scale: 1 },
      {
        scale: 1.4,
        duration: 0.2,
        yoyo: true,
        repeat: 1,
        ease: "back.out(3)",
      },
    );
  }
}
function botonesAddToCart() {
  document.querySelectorAll(".add-to-cart").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      addCart(e, btn);
    });
  });
}

function saveCart() {
  localStorage.setItem("grupolloCart", JSON.stringify(cart));
}

function addItemToCart(id, name, price, quantity = 1) {
  const existing = cart.find((item) => item.id === id);
  if (existing) {
    existing.quantity += quantity;
  } else {
    cart.push({ id, name, price, quantity: quantity });
  }
  saveCart();
  updateCartUI();
}

function removeItemFromCart(id) {
  // cart = cart.filter((item) => item.id !== id);
  delete cart[id];
  saveCart();
  updateCartUI();
  renderProducts();
}

function updateQuantity(id, delta, btn = null) {
  // const item = cart.find((item) => item.id === id);
  const item = cart[id];
  if (item) {
    if (item.qty + delta > 0) {
      item.qty += delta;
      saveCart();
      updateCartUI();
      renderProducts();
    }
    return;
  }
  if (!btn) return;
  const name = btn.dataset.name;
  const price = parseFloat(btn.dataset.price);

  addItemToCart(id, name, price, delta);
}

function updateCartUI() {
  if (!cartItemsContainer || !cartTotalElement) return;

  cartItemsContainer.innerHTML = "";
  let total = 0;
  let count = 0;

  // Get discount from current user
  const currentUser = JSON.parse(localStorage.getItem("grupolloCurrentUser"));
  const discountPercent =
    currentUser && currentUser.discount ? currentUser.discount : 0;

  const productsIds = Object.keys(cart);
  // if (cart.length === 0) {
  if (productsIds.length === 0) {
    cartItemsContainer.innerHTML = `
             <div class="text-center mt-20">
                 <div class="text-7xl mb-6">🍗</div>
                 <p class="text-brandBlack font-black text-2xl uppercase tracking-tighter">Tu carrito está vacío</p>
                 <p class="text-[#6B7280] text-lg mt-2">¡El mejor pollo te está esperando!</p>
             </div>`;
  } else {
    // for (const p of PRODUCTS) {
    //   const e = cart[p.id];
    //   if (!e || !e.qty) continue;
    //   const f = p.formats.find((x) => x.id === e.format) || p.formats[0];
    //   items += e.qty;
    //   subtotal += f.price * e.qty;
    // }

    // cart.forEach((item) => {
    for (let i = 0; i < productsIds.length; i++) {
      const id = productsIds[i];
      const p = PRODUCTS[id];
      const item = cart[id];
      const f = p.formats.find((x) => x.id === item.format) || p.formats[0];
      // total += item.price * item.quantity;
      // count += item.quantity;
      total += f.price * item.qty;
      count += item.qty;

      const el = document.createElement("div");
      el.className =
        "cart-item bg-gradient-to-r from-white to-[#FFF4D2] p-5 rounded-3xl mb-4 shadow-md border-2 border-[#F2B50F]/50 hover:border-[#E31E24] transition-all";
      el.innerHTML = `
                 <div class="flex justify-between items-start mb-3">
                     <div class="flex-1">
                         <h4 class="font-black text-brandBlack text-lg uppercase tracking-tight">${p.name}</h4>
                         <p class="text-sm text-[#2B2B2B] mt-1">${item.qty} x $${f.price.toFixed(2)}</p>
                     </div>
                     <button class="text-[#9CA3AF] hover:text-brandRed transition-colors remove-item" data-id="${id}">
                         <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                     </button>
                 </div>
                 <div class="flex justify-between items-center">
                     <p class="text-brandRed font-black text-xl">$${(f.price * item.qty).toFixed(2)}</p>
                     <div class="flex items-center gap-3 bg-white p-1 rounded-full shadow-inner border-2 border-[#F2B50F]">
                         <button class="w-10 h-10 rounded-full bg-[#FFF4D2] text-brandBlack font-black flex items-center justify-center hover:bg-[#111111] hover:text-[#F2B50F] transition-colors qty-minus" data-id="${id}">−</button>
                         <span class="font-black text-brandBlack w-8 text-center text-lg">${item.qty}</span>
                         <button class="w-10 h-10 rounded-full bg-[#FFF4D2] text-brandBlack font-black flex items-center justify-center hover:bg-[#111111] hover:text-[#F2B50F] transition-colors qty-plus" data-id="${id}">+</button>
                     </div>
                 </div>
             `;
      cartItemsContainer.appendChild(el);
      // });
    }
    // Bind cart item buttons
    cartItemsContainer.querySelectorAll(".remove-item").forEach((btn) => {
      btn.addEventListener("click", () => removeItemFromCart(btn.dataset.id));
    });
    cartItemsContainer.querySelectorAll(".qty-minus").forEach((btn) => {
      btn.addEventListener("click", () => updateQuantity(btn.dataset.id, -1));
    });
    cartItemsContainer.querySelectorAll(".qty-plus").forEach((btn) => {
      btn.addEventListener("click", () => updateQuantity(btn.dataset.id, 1));
    });
  }

  // Calculate totals with discount
  const subtotal = total;
  const discountAmount = subtotal * (discountPercent / 100);
  const finalTotal = subtotal - discountAmount;

  // Update cart badge
  cartCountElements.forEach((el) => {
    if (count > 0) {
      el.textContent = count;
      el.classList.remove("hidden");
    } else {
      el.classList.add("hidden");
    }
  });

  // Update cart subtotal
  const subtotalEl = document.getElementById("cartSubtotal");
  if (subtotalEl) subtotalEl.textContent = `$${subtotal.toFixed(2)}`;

  // Update discount display
  const discountDisplay = document.getElementById("discountDisplay");
  const discountBanner = document.getElementById("discountBanner");
  const discountRow = document.getElementById("discountRow");
  const discountAmountBig = document.getElementById("discountAmountBig");
  const discountAmountSmall = document.getElementById("discountAmountSmall");

  if (discountPercent > 0) {
    if (discountDisplay) discountDisplay.classList.remove("hidden");
    if (discountBanner) discountBanner.classList.remove("hidden");
    if (discountRow) discountRow.classList.remove("hidden");
    if (discountAmountBig)
      discountAmountBig.textContent = discountAmount.toFixed(2);
    if (discountAmountSmall)
      discountAmountSmall.textContent = discountAmount.toFixed(2);
  } else {
    if (discountDisplay) discountDisplay.classList.add("hidden");
    if (discountBanner) discountBanner.classList.add("hidden");
    if (discountRow) discountRow.classList.add("hidden");
  }

  // Update final total
  cartTotalElement.textContent = `$${finalTotal.toFixed(2)}`;
}

function applyDiscount() {
  updateCartUI();
  const user = JSON.parse(localStorage.getItem("grupolloCurrentUser"));
  if (user && user.discount) {
    showToast(
      `🎁 ¡Descuento de ${user.discount}% activado en tu carrito!`,
      "success",
    );
  }
}

// Interrupción inteligente: Mostrar/ocultar input de dirección según método seleccionado
document.querySelectorAll('input[name="deliveryType"]').forEach((radio) => {
  radio.addEventListener("change", (e) => {
    const addressContainer = document.getElementById("addressContainer");
    if (!addressContainer) return;

    if (e.target.value === "domicilio") {
      addressContainer.classList.remove("hidden");
      gsap.fromTo(
        addressContainer,
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, duration: 0.3 },
      );
    } else {
      addressContainer.classList.add("hidden");
    }
  });
});

// WhatsApp Checkout unificado y condicional

function sendCartViaWhatsApp() {
  if (cart.length === 0) {
    showToast("¡Tu carrito está vacío!", "error");
    return;
  }

  // const deliveryTypeEl = document.querySelector(
  //   'input[name="deliveryType"]:checked',
  // );
  // const paymentMethodEl = document.querySelector(
  //   'input[name="paymentMethod"]:checked',
  // );
  // const addressInput = document.getElementById("checkoutAddress");
  // const notesInput = document.getElementById("checkoutNotes");

  // if (!deliveryTypeEl) {
  //   showToast("Por favor, selecciona un método de entrega", "error");
  //   return;
  // }
  // if (!paymentMethodEl) {
  //   showToast("Por favor, selecciona un método de pago", "error");
  //   return;
  // }
  if (!selectedBranchId) {
    showToast("Por favor, selecciona una sucursal", "error");
    const err = document.getElementById("branchError");
    if (err) err.classList.remove("hidden");
    return;
  }

  // const deliveryType = deliveryTypeEl.value;
  // const paymentMethod = paymentMethodEl.value;
  // const address = addressInput ? addressInput.value.trim() : "";

  // if (deliveryType === "domicilio" && !address) {
  //   showToast("Por favor, escribe tu dirección de entrega", "error");
  //   if (addressInput) addressInput.focus();
  //   return;
  // }

  const user = JSON.parse(localStorage.getItem("grupolloCurrentUser"));
  const userName = user ? user.name : "Cliente";
  const userDiscount = user && user.discount ? user.discount : 0;
  const userCoupon = user && user.discountCode ? user.discountCode : null;
  const branch = branches.find((b) => b.id === selectedBranchId);

  // ✅ message se declara AQUÍ, antes de usarlo
  let message = `¡Hola Grupollo! 👋\n\nMi nombre es *${userName}* y me gustaría realizar el siguiente pedido:\n\n`;
  let total = 0;

  cart.forEach((item) => {
    const subtotal = item.price * item.quantity;
    total += subtotal;
    message += `✅ *${item.name}* (x${item.quantity}) - $${subtotal.toFixed(2)}\n`;
  });

  const subtotalAmount = total;
  const discountAmount = subtotalAmount * (userDiscount / 100);
  const finalTotal = subtotalAmount - discountAmount;

  message += `\n📊 *RESUMEN*\n`;
  message += `Subtotal: $${subtotalAmount.toFixed(2)}\n`;
  if (userDiscount > 0) {
    message += `Descuento (${userDiscount}%): -$${discountAmount.toFixed(2)}\n`;
    message += `Cupón: *${userCoupon}*\n`;
  }
  message += `\n💰 *TOTAL A PAGAR: $${finalTotal.toFixed(2)}*\n\n`;

  message += `🏪 *SUCURSAL:* ${branch.name} — ${branch.address}\n`;
  message += `📞 Tel sucursal: ${branch.phone}\n\n`;

  // message += `🛵 *MÉTODO DE ENTREGA:* ${deliveryType === "domicilio" ? "A Domicilio" : "Retiro en Local"}\n`;
  // if (deliveryType === "domicilio") {
  //   message += `📍 *DIRECCIÓN:* ${address}\n`;
  // }

  // message += `💳 *MÉTODO DE PAGO:* ${
  //   paymentMethod === "efectivo"
  //     ? "Efectivo"
  //     : paymentMethod === "transferencia"
  //       ? "Transferencia Bancaria / Digital"
  //       : "Datáfono contra entrega"
  // }\n`;

  // if (notesInput && notesInput.value.trim() !== "") {
  //   message += `📝 *NOTAS:* ${notesInput.value.trim()}\n`;
  // }

  message += `\n¡Quedo atento a la confirmación de mi pedido! 🍗✨`;

  const encodedMsg = encodeURIComponent(message);
  const wn = branch.phone.trim().replaceAll(" ", "");

  window.open(`https://wa.me/${wn}?text=${encodedMsg}`, "_blank");

  showToast("📲 ¡Pedido enviado a WhatsApp!", "success");
}

function soloNumeros(e) {
  const tecla = e.key;
  // Permite números y teclas de control como 'Backspace' o 'Tab'
  if (
    !/^[0-9]$/.test(tecla) &&
    e.key !== "Backspace" &&
    e.key !== "ArrowLeft" &&
    e.key !== "ArrowRight" &&
    e.key !== "Delete"
  ) {
    e.preventDefault();
  }
}

function add(e, btn, add = true) {
  let padre = btn.parentNode;
  let cantidad = padre.querySelector("input");
  if (!cantidad) return;
  let total = parseInt(cantidad.value);
  if (add) {
    cantidad.value = total + 1;
    e.stopPropagation();
    return;
  }
  if (total === 1) return;
  cantidad.value = total - 1;
  // updateQuantity(btn.dataset.id, add ? total : total * -1, btn);
  e.stopPropagation();
}

// document.addEventListener("DOMContentLoaded", function () {
function addEventStopPropagation(elem) {
  if (!elem) return;
  elem.addEventListener("click", (e) => e.stopPropagation());
}
function initShopingCart() {
  renderBranches();
  updateCartUI();

  waCartBtn.addEventListener("click", sendCartViaWhatsApp);

  document.querySelectorAll(".qty-minus").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      add(e, btn, false);
    });
  });

  document.querySelectorAll(".qty-plus").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      add(e, btn);
    });
  });

  document.querySelectorAll(".container-qty").forEach((div) => {
    addEventStopPropagation(div);
  });

  document.querySelectorAll("input").forEach((input) => {
    input.addEventListener("keydown", (e) => soloNumeros(e));
  });
}
// });
