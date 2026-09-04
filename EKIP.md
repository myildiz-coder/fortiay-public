# FORTIAY Editöryel Ekip Planı

Bu belge, FORTIAY'ın manuel/yarı-otomatik yayın döneminde (Claude ile bu oturumda yürütülen) editöryel ekibin rollerini, her masanın takip edeceği kaynakları ve yayın iş akışını tanımlar. GOLHAT'ta kanıtlanmış "Baş Editör + kategori editörü" modelinin FORTIAY'a uyarlanmış hâlidir. Ekip artık ölçeklenmiş durumda: **anasayfa ekibi ve dokuz masanın tamamı** (8 haber masası + Makaleler) birer Editör + Yardımcı Editör ikilisiyle çalışıyor.

## Genel İş Akışı (her masa için aynı)

1. **Araştır** — WebSearch/WebFetch ile masanın alanında bugüne ait gerçek bir gelişme var mı bak.
2. **Doğrula** — En az 2 bağımsız kaynakla çapraz doğrula (üretici basın odası + saygın teknoloji basını, veya 2 farklı saygın kaynak). Tek kaynaklıysa "iddia/sızıntı" olarak etiketle, "kesin" deme.
3. **Görsel kontrolü** — Görsel kullanılacaksa yalnızca üreticinin resmi basın kitinden, kaynağı belirtilerek. Belirsizse görsel kullanılmaz (`dispatch-noimg` deseni).
4. **Yaz** — `dispatch` kart deseniyle (bkz. `style.css` / kategori sayfaları kaynak kodu), Türkçe, sağlı sollu ve doğrudan bir dille; dış kaynaklı her haberin **tam ve ayrıntılı özeti site içinde verilir** (bkz. aşağıdaki Editöryel Politika).
5. **Yardımcı kontrolü** — Yardımcı Editör, Editörün taslağını yayına girmeden önce kaynak/denge/ton ve link politikasına uyum açısından ikinci bir göz olarak kontrol eder.
6. **Yayınla** — İlgili kategori sayfasına ekle, `desk-count`'u güncelle, `foot-updated` tarihini güncelle, `gunluk.html`'deki birleşik akışa da ekle.
7. **Baş Editöre bildir** — Eğer gelişme gerçekten önemliyse (büyük lansman, resmi fiyat, önemli sızıntı), anasayfaya da taşınması için işaretle.

Gerçek/kaynaklı bir gelişme yoksa hiçbir şey yayınlanmaz — zorlama yok, sakin gün normaldir.

## Editöryel Politika: Site İçi Kalış (Dış Bağlantı Yok)

FORTIAY'ı farklı kılan ve hayatta kalma stratejisinin merkezinde olan kural şudur: **okuru siteden asla dışarı yönlendirmiyoruz.**

- Dış kaynaklı her haberde, kaynağın adı yalnızca düz metin olarak belirtilir: `<span class="dispatch-source">Kaynak: X</span>` — tıklanabilir link, `href` veya ok işareti (→) **kesinlikle kullanılmaz**.
- Karşılığında, haberin **ayrıntılı ve doyurucu bir özeti** doğrudan sitede sunulur — okuyucunun kaynağa gitmesine gerek kalmayacak kadar eksiksiz olmalı (teknik detaylar, rakamlar, tarihler, bağlam).
- Bu kural **4 Eylül 2026 itibarıyla ("bundan böyle") tüm yeni içerikler için geçerlidir**. Bu tarihten önce yayınlanmış eski haberlerdeki tıklanabilir "Kaynak: X →" formatı geriye dönük olarak değiştirilmez — mevcut haliyle kalır.
- Dosya (Makaleler masası) ve inceleme yazıları, bu site-içi-kalış stratejisinin en güçlü aracıdır: okuru başka bir yerde bulamayacağı derinlemesine analizle sitede tutar.

## Anasayfa Ekibi — `index.html`

Anasayfa en yüksek görünürlüğe sahip olduğu için tek kişiye bırakılmıyor, iki kişilik bir onay zinciri var:

- **Baş Sayfa Sorumlusu (Baş Editör)** — Nihai karar verici. Tüm masalardan gelen adayları önceliklendirir, en fazla 3 manşeti seçer, yayına son onayı verir.
- **Baş Sayfa Yardımcısı** — Ön eleme yapar: masalardan gelen adayları toplar, kaynak/doğrulama kontrolünü ilk elden yapar, önem sırasına göre Sorumluya sunar. Sorumlu onaylamadan hiçbir şey anasayfaya çıkmaz.

## Masalar — Editör + Yardımcı Editör İkilileri

Ekip ölçeklendi: aşağıdaki dokuz masanın her biri artık bir Editör + Yardımcı Editör ikilisiyle çalışıyor. Yardımcı, Editör araştırırken paralel kaynak tarasın, ikisi çapraz doğrulamayı ve link politikasına uyumu birlikte kontrol etsin.

### Telefon Editörü + Yardımcısı — `telefon.html`
Derginin amiral gemisi masası (dergi adı bile "Telefon Ekosistemi"nden geliyor) — en yüksek haber hacmi burada bekleniyor.
**Kaynaklar:** Apple Newsroom, Samsung Newsroom, Google (Pixel) Blog, Xiaomi Global, Huawei, TCL, vivo, Redmi, OnePlus, Honor basın odaları; GSMArena, The Verge, 9to5Mac, Android Authority; Webtekno, ShiftDelete.Net, Donanımhaber.

### Yapay Zekâ Editörü + Yardımcısı — `yapayzeka.html`
En hızlı değişen, rekabetin en agresif olduğu alan — tek kişinin tüm duyuruları yakalaması zor, yardımcı ikinci bir tarama katmanı sağlıyor.
**Kaynaklar:** Apple/Google/Samsung/OpenAI/Qualcomm resmi duyuruları, 9to5Google, The Verge AI bölümü, TechCrunch, Android Central.

### İnceleme Editörü + Yardımcısı — `incelemeler.html`
"Sağlı sollu" tarafsızlık sözünün gerçekten tutulması için tek kişiye bırakılmıyor: Editör taslağı yazar, Yardımcı yayından önce dengeyi/kaynak tutarlılığını denetler.
**Kaynaklar:** Resmi teknik özellikler + GSMArena/The Verge/Engadget/Philstar Tech gibi saygın karşılaştırma verileri, açıkça kaynak gösterilerek.

### Tablet Editörü + Yardımcısı — `tablet.html`
**Kaynaklar:** Apple/Samsung/Lenovo/Huawei/TCL basın odaları, GSMArena, Engadget.

### Giyilebilir Teknoloji Editörü + Yardımcısı — `giyilebilir.html`
**Kaynaklar:** Apple/Samsung/Garmin/Xiaomi/Motorola/Oura basın odaları, Gadgets & Wearables, Wareable, The Verge wearables.

### Bilgisayar Editörü + Yardımcısı — `bilgisayar.html`
**Kaynaklar:** Intel/AMD/Nvidia/Apple/Lenovo/ASUS basın odaları, AnandTech, The Verge, Lenovo StoryHub, Donanımhaber.

### Fırsat Editörü + Yardımcısı — `firsatlar.html`
**Kaynaklar:** Üretici/operatör resmi kampanya duyuruları (Samsung Mobile Press, Google Store, 9to5Google), Amazon/Best Buy resmi fiyat sayfaları, Android Authority, Droid Life, Türkiye'deki yetkili satıcı fiyat değişiklikleri.

### Makaleler Editörü + Yardımcısı — `makaleler.html` (Yeni Masa)
FORTIAY'ın 4 Eylül 2026'da eklenen en yeni masası. Diğer masalardan farklı olarak tek bir günlük gelişmeyi değil, **pazar analizi, dosya ve derinlemesine inceleme yazılarını** kapsar — site-içi-kalış stratejisinin öncüsü. Editör, birden fazla haberi/veri noktasını sentezleyen uzun soluklu bir analiz taslağı hazırlar; Yardımcı, kullanılan tüm verilerin kaynaklarını tek tek doğrular ve analizin tarafsız kaldığından emin olur.
**Kaynaklar:** Pazar araştırma firmaları (Counterpoint, IDC, Canalys), üretici çeyreklik sonuç raporları, birden fazla teknoloji yayınının çapraz analizi.

## Günlük Haber Akışı — `gunluk.html`

Tüm masalarda yayınlanan haberlerin, hangi masadan geldiğine bakılmaksızın tarih sırasına göre tek bir akışta toplandığı sayfa. Ayrı bir editörü yok — Baş Sayfa Yardımcısı, zaten her masadan geleni gördüğü için bu akışı da günceller: bir masa editörü yeni bir haber yayınladığında aynı kart (aynı metin, kaynak, tarih) `gunluk.html`'e de eklenir, sadece hangi masadan geldiği bir etiketle belirtilir. Böylece okuyucu tek sayfadan "bugün ne oldu" diye takip edebiliyor.

## Ton ve Üslup

Sağlı sollu (her markaya eşit mesafede), doğrudan, agresif ama her zaman doğru. Övgü de eleştiri de kaynağa dayanmalı — "iyi/kötü" yorumları teknik veriye veya güvenilir üçüncü taraf değerlendirmesine bağlanmalı, kişisel/uydurma yargı değil. Dış kaynağa link vermeden okuru bilgilendirmek, FORTIAY'ın ayırt edici üslup hedefidir: özet, atıf yapılan haberden daha az ayrıntılı olmamalı.

## Durum

Ekip 4 Eylül 2026 itibarıyla tam ölçeğe ulaştı: Anasayfa ekibi (Sorumlu + Yardımcı) ve **dokuz masanın tamamı** (Telefon, Yapay Zekâ, İncelemeler, Tablet, Giyilebilir, Bilgisayar, Fırsatlar, Makaleler) artık birer Editör + Yardımcı Editör ikilisiyle çalışıyor — önceki dönemde yalnızca 3 masa (Telefon, Yapay Zekâ, İncelemeler) yardımcı editörle güçlendirilmişti. Aynı gün **23 yeni haber/inceleme/dosya** 8 masaya ve yeni açılan Makaleler masasına eklendi; tümü en az iki bağımsız kaynakla doğrulandı ve yeni site-içi-kalış politikasına (dış link yok, tam özet) uygun yazıldı. `gunluk.html` birleşik akışı artık toplam 46 haber içeriyor (23 eski + 23 yeni), kronolojik sırayla. Anasayfadaki "Öne Çıkanlar" güncellendi: Google Assistant'ın emekliye ayrılması (Yapay Zekâ), TCL P80 Ultra'nın OLED tabanlı NXTPAPER ekranı (Telefon) ve Lenovo'nun RTX Spark çipli Yoga Pro 9n'i (Bilgisayar). Site-içi-kalış politikası 4 Eylül 2026'dan itibaren geçerlidir; bu tarihten önceki haberlerdeki tıklanabilir "Kaynak: X →" formatı geriye dönük değiştirilmemiştir. Bundan sonraki iş, her masada güncel gelişmeleri takip ederek haber akışını canlı tutmak ve Makaleler masasında düzenli dosya/analiz üretimini sürdürmek.
