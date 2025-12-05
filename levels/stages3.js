window.LEVELS = [

    {
    // Babak 1 — pengenalan sederhana
    prompt: "Ambil minimal 1 bintang. Maksimal 13 langkah.",
    maxSteps: 13,
    start: { r: 5, c: 0, dir: 0 }, // 0 = kanan (Timur)
    blocks: [
      { r: 4, c: 2 }, { r: 3, c: 4 }, { r: 3, c: 5 }
    ],
    stars: [
      { r: 5, c: 2 }, // mudah dijangkau (➡ ➡)
      { r: 4, c: 4 },
      { r: 2, c: 5 }
    ]
  },

    {
    // Babak 2 — butuh belok dan perencanaan
    prompt: "Ambil minimal 1 bintang. Maksimal 16 langkah.",
    maxSteps: 16,
    start: { r: 5, c: 0, dir: 0 },
    blocks: [
      { r: 2, c: 3 }, { r: 2, c: 4 }, { r: 2, c: 5 }
    ],
    stars: [
      { r: 5, c: 3 }, // bisa dicapai dengan kombinasi ➡
      { r: 3, c: 5 },
      { r: 1, c: 4 }
    ]
  },

  {
    // Babak 3 — rintangan lebih rapat
    prompt: "Ambil minimal 1 bintang. Maksimal 21 langkah.",
    maxSteps: 21,
    start: { r: 5, c: 0, dir: 0 },
    blocks: [
      { r: 5, c: 1 }, { r: 3, c: 0 }, { r: 3, c: 2 }, { r: 2, c: 2 }, { r: 1, c: 2 }, { r: 1, c: 4 }, { r: 2, c: 4 }, { r: 3, c: 4 }, { r: 4, c: 4 }, { r: 5, c: 4 }
    ],
    stars: [
      { r: 1, c: 1 },
      { r: 1, c: 3 },
      { r: 1, c: 5 }
    ]
  }

];