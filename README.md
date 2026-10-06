# FORTIAY — fortiay.com

Türkiye'nin telefon ekosistemi dergisinin sitesi. Astro ile üretilen statik site.

## Yayına alma (Cloudflare Pages)
- Build komutu: `npm run build`
- Çıktı klasörü: `dist`
- Node sürümü: 20 veya üstü

## İçerik
- Her yazı `src/content/yazilar/<adres>.md` dosyasıdır. Dosya adı adresin son parçası olur: `/<kanal>/<dosya-adı>/`.
- Ön bilgi alanları: `title`, `ozet`, `kanal` (haber · inceleme · karsilastirma · aksesuar · rehber · kose), `tarih`, isteğe bağlı `guncelleme`, `imza` (varsayılan "FORTIAY Masası"), `gorsel`, `gorselAlt`, `gorselKaynak`, `damga` (olc · bag · bey · bul), `mansetMi`, `ticariBeyan`.
- Fiyat rehberi: `src/data/fiyat.json`. Her satırda tutar, kaynak ve tarih zorunlu.
- Dergi sayıları ve satış bağlantıları: `src/data/site.ts` içindeki `SAYILAR`. Satış bağlantısı boşsa düğme "yakında" görünür.

## Kurallar
Yayın ilkeleri sitede `/yayin-ilkeleri/` sayfasında. Satılan sayıların PDF'i bu depoya konmaz.
