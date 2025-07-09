# HijabEase - Aplikasi Panduan Hijab

## 📱 Deskripsi Aplikasi
HijabEase adalah aplikasi mobile React Native yang membantu pengguna menemukan dan memahami berbagai jenis hijab. Aplikasi ini menyediakan panduan lengkap tentang 14 jenis hijab beserta karakteristik, bahan, gaya, dan tips penggunaannya.

## ✨ Fitur Utama
- **15 Halaman Lengkap** - 4 halaman utama + 14 halaman detail hijab (sesuai permintaan)
- **Navigasi Tab** - Bottom navigation dengan 4 tab utama
- **Informasi Lengkap** - Detail bahan, gaya, kelebihan untuk setiap jenis hijab
- **Favorit** - Simpan hijab favorit untuk akses cepat
- **Design Modern** - UI yang bersih dan user-friendly
- **Web Support** - Dapat dijalankan di web browser

## 📋 Struktur Halaman (15 Halaman)

### Halaman Utama (4)
1. **Home** - Beranda dengan kategori populer dan tips
2. **Catalog** - Daftar semua kategori hijab
3. **Favorite** - Hijab yang disimpan sebagai favorit
4. **Profile** - Profil pengguna dan pengaturan

### Halaman Detail Hijab (14)
1. **Hijab Segi Empat** - Hijab klasik yang fleksibel
2. **Hijab Pashmina Kaos** - Nyaman untuk aktivitas harian
3. **Hijab Sport** - Khusus olahraga, ringan dan breathable
4. **Hijab Bergo** - Instan dengan pet, praktis dipakai
5. **Hijab Syar'i** - Panjang menutupi dada, sesuai syariat
6. **Hijab Khimar** - Panjang hingga punggung, syar'i stylish
7. **Hijab Turban** - Dililit tanpa menjuntai, modis dan elegan
8. **Hijab Hoodie** - Design menyatu seperti tudung modern
9. **Hijab Layer** - Bertumpuk untuk kesan mewah
10. **Pashmina Voal** - Ringan, tidak licin, mudah dibentuk
11. **Pashmina Ceruty** - Ringan, flowy, tekstur lembut
12. **Pashmina Crinkle** - Tekstur kerut alami tanpa setrika
13. **Pashmina Satin** - Mewah dengan efek mengilap
14. **Pashmina Plisket** - Lipit-lipit kekinian langsung bentuk

## 🛠 Teknologi yang Digunakan
- **React Native** - Framework utama
- **Expo** - Development platform
- **React Navigation** - Navigation stack dan tabs
- **TypeScript** - Type safety
- **React Native Web** - Web support

## 📦 Dependencies
```json
{
  "@expo/metro-runtime": "~5.0.4",
  "@react-navigation/bottom-tabs": "^7.4.2",
  "@react-navigation/native": "^7.1.14",
  "@react-navigation/stack": "^7.1.1",
  "expo": "~53.0.17",
  "expo-status-bar": "~2.2.3",
  "react": "19.0.0",
  "react-dom": "19.0.0",
  "react-native": "0.79.5",
  "react-native-gesture-handler": "~2.24.0",
  "react-native-reanimated": "~3.17.4",
  "react-native-safe-area-context": "5.4.0",
  "react-native-screens": "~4.11.1",
  "react-native-web": "^0.20.0"
}
```

## 🚀 Cara Menjalankan

### Instalasi Dependencies
```bash
cd frontend
npm install
```

### Menjalankan Aplikasi
```bash
# Development mode
npm start

# Untuk Android
npm run android

# Untuk iOS
npm run ios

# Untuk Web
npm run web
```

## 📱 Struktur Folder
```
frontend/
├── App.tsx                 # Main app component
├── screens/               
│   ├── HomeScreen.tsx      # Halaman beranda
│   ├── CatalogScreen.tsx   # Halaman katalog
│   ├── FavoriteScreen.tsx  # Halaman favorit
│   ├── ProfileScreen.tsx   # Halaman profil
│   └── hijab/             # Detail hijab screens
│       ├── SegiEmpatScreen.tsx
│       ├── PashminaKaosScreen.tsx
│       ├── SportScreen.tsx
│       ├── BergoScreen.tsx
│       ├── SyariScreen.tsx
│       ├── KhimarScreen.tsx
│       ├── TurbanScreen.tsx
│       ├── HoodieScreen.tsx
│       ├── LayerScreen.tsx
│       ├── PashminaVoalScreen.tsx
│       ├── PashminaCerutyScreen.tsx
│       ├── CrinkleScreen.tsx
│       ├── SatinScreen.tsx
│       └── PlisketScreen.tsx
└── assets/                # Images dan assets
```

## 🎨 Design Features
- **Color Scheme**: Primary color #FF6B6B (merah coral)
- **Typography**: Clean, readable fonts
- **Layout**: Card-based design dengan shadows
- **Navigation**: Intuitive tab navigation
- **Responsive**: Works on different screen sizes

## 📋 Status
✅ **Completed Features:**
- 15 halaman lengkap sesuai permintaan
- Navigation system (tabs + stack)
- UI/UX design yang menarik
- Data statis lengkap untuk setiap jenis hijab
- Web support dengan react-native-web
- Favorite functionality
- Back navigation

## 🔮 Future Enhancements
- Search functionality
- Tutorial videos
- Real images from assets folder
- User authentication
- Community features
- Push notifications

## 👥 Target Pengguna
- Wanita muslimah yang ingin belajar tentang hijab
- Penjual hijab yang butuh referensi produk
- Siapa saja yang tertarik dengan fashion hijab

---
*Aplikasi ini dibuat dengan ❤️ untuk membantu komunitas hijab Indonesia*