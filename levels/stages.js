window.LEVELS = [

    {
    // Babak 1 — pengenalan sederhana
    prompt: "Ambil minimal 1 bintang. Maksimal 10 langkah.",
    maxSteps: 10,
    start: { r: 5, c: 0, dir: 0 }, // 0 = kanan (Timur)
    blocks: [
      { r: 2, c: 0 }, { r: 2, c: 1 }, { r: 2, c: 2 },{ r: 3, c: 0 }, { r:4 , c: 0 }, { r: 4, c: 2 }
    ],
    stars: [
      { r: 3, c: 2 }, // mudah dijangkau (➡ ➡)
      { r: 4, c: 1 },
      { r: 5, c: 3 }
    ]
  },

    {
    // Babak 2 — butuh belok dan perencanaan
    prompt: "Ambil minimal 1 bintang. Maksimal 12 langkah.",
    maxSteps: 12,
    start: { r: 5, c: 0, dir: 0 },
    blocks: [
      { r: 1, c: 2 }, { r: 1, c: 3 }, { r: 1, c: 4 },{ r: 0, c: 4 }, { r: 2, c: 4 }, { r: 4, c: 2 }, { r: 4, c: 3 }, { r: 4, c: 5 }
    ],
    stars: [
      { r: 3, c: 2 }, // bisa dicapai dengan kombinasi ➡
      { r: 3, c: 5 },
      { r: 5, c: 4 }
    ]
  },

    {
    // Babak 3 — rintangan lebih rapat
    prompt: "Ambil minimal 1 bintang. Maksimal 20 langkah.",
    maxSteps: 20,
    start: { r: 5, c: 0, dir: 0 },
    blocks: [
      { r: 1, c: 2 }, { r: 1, c: 3 }, { r: 1, c: 4 }, { r: 1, c: 5 }, { r: 3, c: 2 }, { r: 4, c: 1 }, { r: 4, c: 3 }, { r: 4, c: 5 }, { r: 5, c: 3 }
    ],
    stars: [
      { r: 0, c: 2 },
      { r: 0, c: 4 },
      { r: 3, c: 3 }
    ]
  },
 
];