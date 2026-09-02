# FORTIAY — Telefon Ekosistemi Teknoloji Dergisi

**FORTIAY**, akıllı telefon ve geniş anlamda "telefon ekosistemi" (tabletler, giyilebilir teknoloji, kulaklıklar, dizüstü bilgisayarlar, yapay zekâ destekli yazılımlar) üzerine kurulmuş, haber peşinde koşan, sahaya çıkan, agresif ve hızlı bir Türkçe teknoloji dergisidir. CHIP ve benzeri büyük teknoloji dergilerinden ilham alır; golhat.com'da kurulan editöryel disiplin ve otomasyon modelinin teknoloji dünyasına uyarlanmış hâlidir.

## Misyon

- Türkiye'deki teknoloji/telefon ekosistemi haberciliğinde en hızlı, en doğru ve en sert (ama her zaman doğru) sesi olmak.
- Üreticilerin, sızıntı kaynaklarının, resmi lansmanların haberini ilk ve en doğru şekilde vermek.
- Karşılaştırmalı inceleme ve "sağlı sollu" (yani her rakip markaya eşit mesafede) sert eleştirel bakış açısı sunmak.

## Sabit Kurallar (asla ihlal edilmez)

1. **Her zaman Türkçe.**
2. **Hiçbir haber, fiyat, teknik özellik veya "resmi açıklama" iddiası UYDURULMAZ.** Her önemli iddia gerçek, tıklanabilir bir kaynak linkiyle desteklenir. En az 2 bağımsız kaynakla çapraz doğrulama yapılmadan bir şey "kesin/resmi" gibi sunulmaz; tek kaynaklıysa "iddia" olarak etiketlenir.
3. **Hiçbir alıntı uydurulmaz.** Yayınlanan her alıntı, doğrulanmış ve kaynak gösterilmiş bir haber metninden gelir.
4. **Görsel politikası** (GOLHAT'tan farklı — bkz. aşağıda).
5. **Kimlik bilgileri (token/şifre) hiçbir zaman elle girilmez/oluşturulmaz.**
6. Gerçekten yeni, kaynaklı bir gelişme yoksa hiçbir şey yayınlanmaz — zorlama yok.

## Görsel Politikası

GOLHAT'ın aksine (orada sıfır insan fotoğrafı kuralı vardır), FORTIAY'da **ürün** görselleri kullanılabilir, ancak katı kurallarla:

- Yalnızca **üreticinin resmi basın kiti / basın odası (newsroom, press kit)** kaynaklı ürün görselleri kullanılır.
- Her görselin altında **kaynak ve üretici adı açıkça belirtilir** (ör. "Görsel: Samsung Basın Odası").
- **Hiçbir yapay zekâ üretimi veya lisanssız/izinsiz görsel kullanılmaz.**
- **Gerçek kişilerin (yöneticiler, influencer'lar, kullanıcılar vb.) fotoğrafları** için de aynı katı kaynak/izin şartı geçerlidir; belirsizse fotoğraf hiç kullanılmaz, bunun yerine şu uyarı metni korunur:

  > *"Bu bir fotoğraf değildir; görsel, ilgili üreticinin resmi basın materyalinden alınmış ve kaynağı belirtilmiştir. Kaynağı doğrulanamayan hiçbir insan fotoğrafı bu sitede kullanılmaz."*

- Görsel kaynağı doğrulanamıyorsa, o alan boş bırakılır veya nötr bir yer tutucu (ikon/renk bloğu) kullanılır — asla tahmini/uydurma bir görsel eklenmez.

## Ekip Yapısı

GOLHAT'ta kanıtlanmış model uyarlanmıştır: **1 Baş Editör + kategori editörleri.**

| Editör | Sayfa | Alan |
|---|---|---|
| Baş Editör | `index.html` | Anasayfa manşetleri, en önemli 3 gelişme |
| Telefon Editörü | `telefon.html` | Akıllı telefon lansmanları, sızıntılar, fiyatlar |
| Tablet Editörü | `tablet.html` | Tablet lansmanları ve karşılaştırmaları |
| Giyilebilir Teknoloji Editörü | `giyilebilir.html` | Akıllı saat, kulaklık, bileklik |
| Bilgisayar Editörü | `bilgisayar.html` | Dizüstü/masaüstü, işlemci/donanım haberleri |
| Yapay Zekâ Editörü | `yapayzeka.html` | Telefon/ekosistem yazılımlarındaki AI özellikleri |
| İnceleme Editörü | `incelemeler.html` | Karşılaştırmalı ürün incelemeleri |
| Fırsat Editörü | `firsatlar.html` | Kampanya, indirim, resmi fiyat değişiklikleri |

Şimdilik otomasyon **manuel/yarı-otomatik** olarak Claude ile bu oturumda yürütülüyor; ileride GOLHAT'taki gibi tam otomatik (GitHub Actions + AI) modele geçilebilir.

## Teknik Yapı

Statik HTML/CSS sitesi, GitHub Pages ile yayınlanır. Her kategori sayfası aynı `dispatch` kart deseniyle tekrar eden haber blokları içerir (bkz. `index.html` kaynak kodu).
