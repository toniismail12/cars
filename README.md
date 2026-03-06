# Raja Mobil Prototype

Aplikasi katalog mobil berbasis Next.js untuk publik dan admin panel internal.

## Fitur Utama

- Landing page + katalog mobil publik
- Detail mobil publik
- Admin login berbasis cookie session
- CRUD data mobil dari admin panel
- Data disimpan di file JSON lokal (`data/cars.json`)

## Tech Stack

- Next.js 14 (App Router)
- React 18
- TypeScript

## Menjalankan Secara Lokal

### 1. Install dependency

```bash
npm install
```

### 2. Jalankan mode development

```bash
npm run dev
```

Akses aplikasi di `http://localhost:3000`.

## Akun Admin Default

Credential default ada di file `data/admin.json`:

- Email: `admin@rajamobil.local`
- Password: `Admin123!`

Login admin via halaman `http://localhost:3000/admin/login`.

## Environment Variable

Buat file `.env.local` jika ingin mengganti secret session:

```bash
ADMIN_SECRET=isi_dengan_secret_aman
```

Jika tidak diisi, aplikasi menggunakan nilai default development di kode.

## Struktur Folder Ringkas

- `app/` routing halaman dan API (App Router)
- `components/` komponen UI
- `lib/` utilitas auth, validasi, dan akses data
- `data/` sumber data JSON (admin + daftar mobil)

## Script NPM

- `npm run dev` menjalankan development server
- `npm run build` build untuk production
- `npm run start` menjalankan hasil build
- `npm run lint` menjalankan lint

## Catatan Penting

- Jangan commit folder `node_modules` ke Git.
- Untuk deployment production, ganti kredensial admin default dan `ADMIN_SECRET`.
