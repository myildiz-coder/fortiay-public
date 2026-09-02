# FORTIAY Editöryel Ekip Planı

Bu belge, FORTIAY'ın manuel/yarı-otomatik yayın döneminde (Claude ile bu oturumda yürütülen) editöryel ekibin rollerini, her masanın takip edeceği kaynakları ve yayın iş akışını tanımlar. GOLHAT'ta kanıtlanmış "Baş Editör + kategori editörü" modelinin FORTIAY'a uyarlanmış, öncelikli masalara yardımcı editör eklenmiş hâlidir.

## Genel İş Akışı (her masa için aynı)

1. **Araştır** — WebSearch/WebFetch ile masanın alanında bugüne ait gerçek bir gelişme var mı bak.
2. **Doğrula** — En az 2 bağımsız kaynakla çapraz doğrula (üretici basın odası + saygın teknoloji basını, veya 2 farklı saygın kaynak). Tek kaynaklıysa "iddia/sızıntı" olarak etiketle, "kesin" deme.
3. **Görsel kontrolü** — Görsel kullanılacaksa yalnızca üreticinin resmi basın kitinden, kaynağı belirtilerek. Belirsizse görsel kullanılmaz.
4. **Yaz** — `dispatch` kart deseniyle (bkz. `style.css` / kategori sayfaları kaynak kodu), Türkçe, sağlı sollu ve doğrudan bir dille.
5. **Yardımcı kontrolü** (yardımcısı olan masalarda) — Yardımcı editör, Baş editörün taslağını yayına girmeden önce kaynak/denge/ton açısından ikinci bir göz olarak kontrol eder.
6. **Yayınla** — İlgili kategori sayfasına ekle, `desk-count`'u güncelle, `foot-updated` tarihini güncelle.
7. **Baş Editöre bildir** — Eğer gelişme gerçekten önemliyse (büyük lansman, resmi fiyat, önemli sızıntı), anasayfaya da taşınması için işaretle.

Gerçek/kaynaklı bir gelişme yoksa hiçbir şey yayınlanmaz — zorlama yok, sakin gün normaldir.

## Anasayfa Ekibi — `index.html`

Anasayfa en yüksek görünürlüğe sahip olduğu için tek kişiye bırakılmıyor, iki kişilik bir onay zinciri var:

- **Baş Sayfa Sorumlusu (Baş Editör)** — Nihai karar verici. Tüm masalardan gelen adayları önceliklendirir, en fazla 3 manşeti seçer, yayına son onayı verir.
- **Baş Sayfa Yardımcısı** — Ön eleme yapar: masalardan gelen adayları toplar, kaynak/doğrulama kontrolünü ilk elden yapar, önem sırasına göre Sorumluya sunar. Sorumlu onaylamadan hiçbir şey anasayfaya çıkmaz.

## Yardımcı Editörlü (Öncelikli) Masalar

Aşağıdaki masalar, iş yükü veya denge/hassasiyet gereksinimi nedeniyle bir **Editör + Yardımcı Editör** ikilisiyle çalışır:

### Telefon Editörü + Yardımcısı — `telefon.html`
Derginin amiral gemisi masası (dergi adı bile "Telefon Ekosistemi"nden geliyor) — en yüksek haber hacmi burada bekleniyor. Yardımcı, Editör araştırırken paralel kaynak tarasın, ikisi çapraz doğrulamayı birlikte yapsın.
**Kaynaklar:** Apple Newsroom, Samsung Newsroom, Google (Pixel) Blog, Xiaomi Global, Huawei, OnePlus, Honor basın odaları; GSMArena, The Verge, 9to5Mac, Android Authority; Webtekno, ShiftDelete.Net, Donanımhaber.

### Yapay Zekâ Editörü + Yardımcısı — `yapayzeka.html`
En hızlı değişen, rekabetin en agresif olduğu alan — tek kişinin tüm duyuruları yakalaması zor, yardımcı ikinci bir tarama katmanı sağlıyor.
**Kaynaklar:** Apple/Google/Samsung/OpenAI/Qualcomm resmi duyuruları, The Verge AI bölümü, TechCrunch.

### İnceleme Editörü + Yardımcısı — `incelemeler.html`
"Sağlı sollu" tarafsızlık sözünün gerçekten tutulması için tek kişiye bırakılmıyor: Editör taslağı yazar, Yardımcı yayından önce dengeyi/kaynak tutarlılığını denetler.
**Kaynaklar:** Resmi teknik özellikler + GSMArena/The Verge/Engadget gibi saygın karşılaştırma verileri, açıkça kaynak gösterilerek.

## Günlük Haber Akışı — `gunluk.html`

Tüm masalarda yayınlanan haberlerin, hangi masadan geldiğine bakılmaksızın tarih sırasına göre tek bir akışta toplandığı sayfa. Ayrı bir editörü yok — Baş Sayfa Yardımcısı, zaten her masadan geleni gördüğü için bu akışı da günceller: bir masa editörü yeni bir haber yayınladığında aynı kart (aynı metin, kaynak, tarih) `gunluk.html`'e de eklenir, sadece hangi masadan geldiği bir etiketle belirtilir. Böylece okuyucu tek sayfadan "bugün ne oldu" diye takip edebiliyor.

## Tek Editörlü Masalar

Daha düşük haber hacmi beklenen masalar şimdilik tek editörle çalışıyor, iş yükü artarsa yardımcı eklenebilir:

- **Tablet Editörü** — `tablet.html` — Apple/Samsung/Lenovo/Huawei basın odaları, GSMArena, Engadget.
- **Giyilebilir Teknoloji Editörü** — `giyilebilir.html` — Apple/Samsung/Garmin/Xiaomi basın odaları, Wareable, The Verge wearables.
- **Bilgisayar Editörü** — `bilgisayar.html` — Intel/AMD/Nvidia/Apple/Lenovo/ASUS basın odaları, AnandTech, The Verge, Donanımhaber.
- **Fırsat Editörü** — `firsatlar.html` — Üretici/operatör resmi kampanya duyuruları, Türkiye'deki yetkili satıcı fiyat değişiklikleri.

## Ton ve Üslup

Sağlı sollu (her markaya eşit mesafede), doğrudan, agresif ama her zaman doğru. Övgü de eleştiri de kaynağa dayanmalı — "iyi/kötü" yorumları teknik veriye veya güvenilir üçüncü taraf değerlendirmesine bağlanmalı, kişisel/uydurma yargı değil.

## Durum

Anasayfa ekibi (Sorumlu + Yardımcı) ve 3 öncelikli masa (Telefon, Yapay Zekâ, İncelemeler) yardımcı editörle güçlendirildi. Tüm 7 masa en az bir gerçek, kaynağı doğrulanmış haberle dolu; Telefon ve Yapay Zekâ masalarında (öncelikli/yardımcı editörlü masalar) ikişer haber var, toplam 9 haber `gunluk.html`'deki günlük akışta masa etiketiyle ve doğru kronolojik sırada listeleniyor. En önemli 3'ü (Bilgisayar, Yapay Zekâ, Telefon) anasayfadaki "Öne Çıkanlar" bölümünde. İncelemeler ve Fırsatlar masalarındaki haberler, olayın gerçekleştiği tarihle (sırasıyla 2026-03-13 ve 2026-08-06) etiketlendi — FORTIAY'a eklendikleri gün değil, gelişmenin gerçek tarihi esas alınıyor. Bundan sonraki iş, her masada güncel gelişmeleri takip ederek haber akışını canlı tutmak.
