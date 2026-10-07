export const KANALLAR = {
  haber: { ad: 'Haber', aciklama: 'Lansmanlar, Türkiye fiyatları ve pazardaki gelişmeler.' },
  inceleme: { ad: 'İnceleme', aciklama: 'Cihaz incelemeleri ve FORTIAY 100 puanı.' },
  karsilastirma: { ad: 'Karşılaştırma', aciklama: 'Aynı fiyat bandındaki cihazlar yan yana.' },
  aksesuar: { ad: 'Aksesuar', aciklama: 'Ekran koruyucu, kılıf, şarj, kulaklık ve giyilebilir.' },
  rehber: { ad: 'Rehber', aciklama: 'Telefon alırken ve kullanırken bilmeniz gerekenler.' },
  kose: { ad: 'Editör', aciklama: 'Kurucu editörün köşesi.' },
} as const;
export type Kanal = keyof typeof KANALLAR;

export const MENU: { ad: string; url: string }[] = [
  { ad: 'Haber', url: '/haber/' },
  { ad: 'İnceleme', url: '/inceleme/' },
  { ad: 'Karşılaştırma', url: '/karsilastirma/' },
  { ad: 'Aksesuar', url: '/aksesuar/' },
  { ad: 'Fiyat rehberi', url: '/fiyat/' },
  { ad: 'Rehber', url: '/rehber/' },
  { ad: 'Editör', url: '/kose/' },
];

export const DAMGALAR = {
  olc: { ad: 'ÖLÇÜLDÜ', aciklama: 'FORTIAY’ın kendi ölçümü ya da yöntemi yazılı kendi hesabı.' },
  bag: { ad: 'BAĞIMSIZ', aciklama: 'Başka bir laboratuvarın ölçümü; ölçen ve tarih yanında yazılı.' },
  bey: { ad: 'BEYAN', aciklama: 'Üreticinin ya da satıcının kendi sözü; doğrulanmadı.' },
  bul: { ad: 'BULUNAMADI', aciklama: 'Kaynağı olan bir veri bulunamadı.' },
} as const;

// Magzter kaydı onaylandığında katalogUrl alanını doldurmak yeterlidir.
export const MAGZTER = {
  durum: 'hazirlik' as 'hazirlik' | 'yayinda',
  katalogUrl: '',
  yayinBasvuruUrl: 'https://publishers.magzter.com/publisher-signup',
  aciklama: 'FORTIAY’ın Magzter yayıncı başvurusu ve dağıtım dosyası hazırlanıyor.',
};

// Dergi sayıları. satinAl boş kalırsa düğme "Yakında" olarak görünür.
export const SAYILAR = [
  {
    no: '02', ad: 'Sayı 02', donem: 'Ekim–Aralık 2026', sayfa: 104, ucretli: true,
    kapak: '/dergi/sayi-02/kapak.jpg',
    ozet: 'Aksesuar masası, ölçüm masası, Çin masası ve 18 Pro ailesinin anatomisi.',
    fiyat: '500 TL',
    onizleme: [3, 9, 10, 11, 12, 26],
    satinAl: { magzter: '', dijital: '', basili: '' },
  },
  {
    no: '01', ad: 'Sayı 01', donem: 'Eylül 2026', sayfa: 94, ucretli: false,
    kapak: '/dergi/sayi-01/kapak.webp',
    ozet: 'Yeni Pro dönemi, iPhone Duo, Android amiral gemileri, fiyatın yarısı vergi.',
    pdf: '/dergi/sayi-01/FORTIAY-Sayi01.pdf', pdfBoyut: '19,1 MB', magzterHarici: true,
  },
];

export const tarihTR = (d: Date) =>
  d.toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'Europe/Istanbul' });
