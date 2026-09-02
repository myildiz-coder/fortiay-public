# FORTIAY Editöryel Ekip Planı

Bu belge, FORTIAY'ın manuel/yarı-otomatik yayın döneminde (Claude ile bu oturumda yürütülen) editöryel ekibin rollerini, her masanın takip edeceği kaynakları ve yayın iş akışını tanımlar. GOLHAT'ta kanıtlanmış "Baş Editör + kategori editörü" modelinin FORTIAY'a uyarlanmış hâlidir.

## Genel İş Akışı (her masa için aynı)

1. **Araştır** — WebSearch/WebFetch ile masanın alanında bugüne ait gerçek bir gelişme var mı bak.
2. **Doğrula** — En az 2 bağımsız kaynakla çapraz doğrula (üretici basın odası + saygın teknoloji basını, veya 2 farklı saygın kaynak). Tek kaynaklıysa "iddia/sızıntı" olarak etiketle, "kesin" deme.
3. **Görsel kontrolü** — Görsel kullanılacaksa yalnızca üreticinin resmi basın kitinden, kaynağı belirtilerek. Belirsizse görsel kullanılmaz.
4. **Yaz** — `dispatch` kart deseniyle (bkz. `index.html`/kategori sayfaları kaynak kodu), Türkçe, sağlı sollu ve doğrudan bir dille.
5. **Yayınla** — İlgili kategori sayfasına ekle, `desk-count`'u güncelle, `foot-updated` tarihini güncelle.
6. **Baş Editöre bildir** — Eğer gelişme gerçekten önemliyse (büyük lansman, resmi fiyat, önemli sızıntı), anasayfaya da taşınması için işaretle.

Gerçek/kaynaklı bir gelişme yoksa hiçbir şey yayınlanmaz — zorlama yok, sakin gün normaldir.

## Editör Rolleri

### Baş Editör — `index.html`
Anasayfa manşetlerini yönetir. Her masadan gelen en önemli 3 gelişmeyi seçer, öncelik sırasına koyar. Kendi haber üretmez, kategori editörlerinin doğruladığı içerikten seçer.

### Telefon Editörü — `telefon.html`
**Takip edeceği kaynaklar:** Apple Newsroom, Samsung Newsroom, Google (Pixel) Blog, Xiaomi Global, Huawei, OnePlus, Honor basın odaları; GSMArena, The Verge, 9to5Mac, Android Authority; Türkiye tarafında Webtekno, ShiftDelete.Net, Donanımhaber.
**Alan:** Akıllı telefon lansmanları, sızıntılar, fiyat/satış haberleri, Türkiye pazarına özel fiyatlandırma.

### Tablet Editörü — `tablet.html`
**Kaynaklar:** Apple/Samsung/Lenovo/Huawei basın odaları, GSMArena, Engadget, Türkiye teknoloji basını.
**Alan:** Tablet lansmanları, ekosistem entegrasyonu (kalem/klavye aksesuarları), karşılaştırmalar.

### Giyilebilir Teknoloji Editörü — `giyilebilir.html`
**Kaynaklar:** Apple/Samsung/Garmin/Xiaomi basın odaları, Wareable, The Verge wearables bölümü.
**Alan:** Akıllı saat, kablosuz kulaklık, bileklik, sağlık sensörü haberleri.

### Bilgisayar Editörü — `bilgisayar.html`
**Kaynaklar:** Intel/AMD/Nvidia/Apple/Lenovo/ASUS basın odaları, AnandTech, The Verge, Donanımhaber.
**Alan:** Dizüstü/masaüstü lansmanları, işlemci/GPU haberleri, donanım karşılaştırmaları.

### Yapay Zekâ Editörü — `yapayzeka.html`
**Kaynaklar:** Apple/Google/Samsung/OpenAI/Qualcomm resmi duyuruları, The Verge AI bölümü, TechCrunch.
**Alan:** Telefon/ekosistem yazılımlarına gelen yapay zekâ özellikleri (kamera, asistan, çeviri vb.) — genel AI haberleri değil, ekosistemle doğrudan ilgili olanlar.

### İnceleme Editörü — `incelemeler.html`
**Kaynaklar:** Doğrudan ürün verileri (resmi teknik özellikler) + saygın inceleme kaynaklarının (GSMArena, The Verge, Engadget) yayınladığı karşılaştırmalı veriler — kendi elde test edilmemiş ürünler için üçüncü taraf inceleme verisi açıkça kaynak gösterilerek kullanılır.
**Alan:** Karşılaştırmalı, sağlı sollu ürün değerlendirmeleri; "hangisi daha iyi" tarzı doğrudan analizler.

### Fırsat Editörü — `firsatlar.html`
**Kaynaklar:** Üretici/operatör resmi kampanya duyuruları, Türkiye'deki yetkili satıcı fiyat değişiklikleri.
**Alan:** Kampanya, indirim, resmi fiyat değişikliği haberleri — yalnızca resmi kaynaklardan, üçüncü taraf "fırsat sitelerinden" değil.

## Ton ve Üslup

Sağlı sollu (her markaya eşit mesafede), doğrudan, agresif ama her zaman doğru. Övgü de eleştiri de kaynağa dayanmalı — "iyi/kötü" yorumları teknik veriye veya güvenilir üçüncü taraf değerlendirmesine bağlanmalı, kişisel/uydurma yargı değil.

## Durum

Şu an tüm masalar boş (0 haber) — iskelet hazır, ekip rolleri tanımlı. İçerik üretimi bu plan dahilinde, kullanıcının onayıyla masa masa başlayacak.

