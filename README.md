Nama: Regita Maulia Gani

NIM: H1D022021

Shift: C


## Login
Halaman awal adalah sebagai berikut.
![image](https://github.com/user-attachments/assets/fbbeff74-fd6c-4f3d-a551-c9e922fe378d)

Terdapat tombol Sign In With Google. Saat tombol diklik, aplikasi memanggil fungsi loginWithGoogle yang didefinisikan di dalam Pinia Store.

- Aplikasi mengkonfigurasi GoogleAuth dengan clientId dan izin (akses ke profil dan email pengguna).
- Pilih akun Google untuk login
  ![image](https://github.com/user-attachments/assets/30404218-d118-4c3b-98b7-29b38403b52f)
  ![image](https://github.com/user-attachments/assets/99148031-36a7-4883-8cb3-9b36b06c4a89)

- Setelah user berhasil login, aplikasi menerima id token dari google (autentikasi user)
- id token digunakan untuk membuat kredensial  Firebase untuk validasi, menggunakan GoogleAuthProvider. Jika berhasil, firebase memberikan informasi user seperti nama dan email, yang disimpan di variabel user di dalam Pinia Store.

## Berhasil Login
Jika berhasil login, user diarahkan ke halaman Home.
![image](https://github.com/user-attachments/assets/38e5e460-ac3b-4d83-9446-59348c8296f0)

Terdapat tab menu di bagian bawah untuk navigasi antara halaman Home dan Profile.

## Profile
Saat user mengklik ikon profil pada tab menu, user diarahkan ke halaman profile
![IMG-20241119-WA0020](https://github.com/user-attachments/assets/f2948e02-e469-4d9d-a56b-d2bc47fce860)

- nama pengguna diambil dari displayName
- email diambil dari email
- foto profil diambil dari photoURL.
Data ini diakses dari Pinia Store mengunakan variabel user dan ditampilkan.
Pada halaman profil, juga terdapat tombol Logout. Ketika diklik, aplikasi memanggil fungsi logout di Pinia Store. 
Fungsi ini melakukan sign out dari firebase, menghapus data user dari variabel user, dan mengarahkan user kembali ke halaman pertama yaitu login.
