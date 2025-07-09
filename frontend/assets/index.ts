// Constants untuk path gambar hijab
export const HijabImages = {
  // Icon utama
  icon: require('./icon.png'),
  adaptiveIcon: require('./adaptive-icon.png'),
  favicon: require('./favicon.png'),
  splashIcon: require('./splash-icon.png'),

  // Gambar hijab by category
  hijab: {
    segiEmpat: require('./Segi empat/jilbab segi empat bela square.jpeg'),
    pashminaKaos: require('./Pashmina kaos/eadd2ca7-08dd-4ec1-bede-0312a4a470a1.jpeg'),
    sport: require('./Sport/fc77081c-5aa2-4714-82ad-931dd588051d.jpeg'),
    bergo: require('./Bergo/Hijab Instan Bergo.jpeg'),
    syari: require('./Syar_i/SQUARE HIJAB SYAR_I poly cotton_ Polycotton square hijab _ square hijab _ Hijab long square sya_i_ plain hijab _ Plain square hijab _.jpeg'),
    turban: require('./Turban/585cae96-c781-4287-abb3-c88fd7819448.jpeg'),
    hoodie: require('./Hoodie/Modefa Instant Criss-Cross Hoodie Jersey Hijab – Brown.jpeg'),
    layer: require('./Layer/Babesandbasicloop instant shawl by Naelofarhijab.jpeg'),
    satin: require('./Satin/dfaf7af2-2dcf-4942-a3f2-9c5683f83d57.jpeg'),
    plisket: require('./Plisket/Pashmina ceruty baby doll Hijab Pashmina Plisket Pleats Ceruti Hijab.jpeg'),
    ceruty: require('./Ceruty/6faebe3d-6c35-4876-808b-d259a91aa827.jpeg'),
    crinkle: require('./Crinkle/f8f3e621-9039-4c17-9a0a-0145db906996.jpeg'),
    // Untuk yang tidak ada gambar, gunakan icon default
    khimar: require('./icon.png'),
    pashminaVoal: require('./Pashmina voal/Nyari pashmina yang mudah dibentuk & bahannya halus + gak bikin gerah_ _Kheva shawl jawabannya 😍__New! Kheva Shawl - Rp 65_000_Detail cek @khevamauzakatalog __#khevashawlkhevamauza.jpeg'),
  }
};

// Data kategori hijab
export const HijabCategories = [
  { 
    id: 1, 
    name: 'Hijab Segi Empat', 
    screen: 'SegiEmpat', 
    color: '#FFE5E5', 
    emoji: '🔸',
    image: HijabImages.hijab.segiEmpat,
    price: 'Rp 89.000',
    description: 'Hijab segi empat premium dengan bahan berkualitas'
  },
  { 
    id: 2, 
    name: 'Hijab Pashmina Kaos', 
    screen: 'PashminaKaos', 
    color: '#E5F3FF', 
    emoji: '🧶',
    image: HijabImages.hijab.pashminaKaos,
    price: 'Rp 65.000',
    description: 'Pashmina kaos yang nyaman dan mudah diatur'
  },
  { 
    id: 3, 
    name: 'Hijab Sport', 
    screen: 'Sport', 
    color: '#FFF0E5', 
    emoji: '⚽',
    image: HijabImages.hijab.sport,
    price: 'Rp 75.000',
    description: 'Hijab sport untuk aktivitas olahraga'
  },
  { 
    id: 4, 
    name: 'Hijab Bergo', 
    screen: 'Bergo', 
    color: '#F0FFE5', 
    emoji: '🧕',
    image: HijabImages.hijab.bergo,
    price: 'Rp 55.000',
    description: 'Hijab bergo instant yang praktis'
  },
  { 
    id: 5, 
    name: 'Hijab Syar\'i', 
    screen: 'Syari', 
    color: '#F5E5FF', 
    emoji: '🕌',
    image: HijabImages.hijab.syari,
    price: 'Rp 95.000',
    description: 'Hijab syar\'i dengan coverage maksimal'
  },
  { 
    id: 6, 
    name: 'Hijab Khimar', 
    screen: 'Khimar', 
    color: '#FFE5F0', 
    emoji: '👑',
    image: HijabImages.hijab.khimar,
    price: 'Rp 85.000',
    description: 'Hijab khimar elegan dan sopan'
  },
  { 
    id: 7, 
    name: 'Hijab Turban', 
    screen: 'Turban', 
    color: '#E5FFFF', 
    emoji: '👒',
    image: HijabImages.hijab.turban,
    price: 'Rp 70.000',
    description: 'Hijab turban modern dan stylish'
  },
  { 
    id: 8, 
    name: 'Hijab Hoodie', 
    screen: 'Hoodie', 
    color: '#FFFFE5', 
    emoji: '🧥',
    image: HijabImages.hijab.hoodie,
    price: 'Rp 125.000',
    description: 'Hijab hoodie untuk gaya kasual'
  },
  { 
    id: 9, 
    name: 'Hijab Layer', 
    screen: 'Layer', 
    color: '#E5FFE5', 
    emoji: '📚',
    image: HijabImages.hijab.layer,
    price: 'Rp 80.000',
    description: 'Hijab layer dengan tampilan berlapis'
  },
  { 
    id: 10, 
    name: 'Pashmina Voal', 
    screen: 'PashminaVoal', 
    color: '#FFE5E5', 
    emoji: '🌸',
    image: HijabImages.hijab.pashminaVoal,
    price: 'Rp 90.000',
    description: 'Pashmina voal dengan tekstur halus'
  },
  { 
    id: 11, 
    name: 'Pashmina Ceruty', 
    screen: 'PashminaCeruty', 
    color: '#E5F3FF', 
    emoji: '💎',
    image: HijabImages.hijab.ceruty,
    price: 'Rp 85.000',
    description: 'Pashmina ceruty dengan kilau natural'
  },
  { 
    id: 12, 
    name: 'Hijab Crinkle', 
    screen: 'Crinkle', 
    color: '#FFF0E5', 
    emoji: '🌊',
    image: HijabImages.hijab.crinkle,
    price: 'Rp 78.000',
    description: 'Hijab crinkle dengan tekstur bergelombang'
  },
  { 
    id: 13, 
    name: 'Hijab Satin', 
    screen: 'Satin', 
    color: '#F0FFE5', 
    emoji: '✨',
    image: HijabImages.hijab.satin,
    price: 'Rp 110.000',
    description: 'Hijab satin dengan kilau mewah'
  },
  { 
    id: 14, 
    name: 'Hijab Plisket', 
    screen: 'Plisket', 
    color: '#F5E5FF', 
    emoji: '📏',
    image: HijabImages.hijab.plisket,
    price: 'Rp 88.000',
    description: 'Hijab plisket dengan lipatan rapi'
  }
];

export default HijabImages;
