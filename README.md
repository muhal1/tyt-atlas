# TYT Atlas

[Canlı site](https://muhal1.github.io/tyt-atlas/)

2027 TYT için temel ve orta seviye kaynak rehberi. 20 Eylül 2026 tarihli TYT kaynak araştırması konuşmasındaki video kampları, soru bankaları ve video ders kitapları tabloya aktarıldı.

## Özellikler

- Genel bakışta ders kutuları ve seçilen video, soru bankası, VDK / föy kaynakları
- Ders gizleme ve Genel bakış altındaki açılır bölümden geri getirme
- Ayrı Kaynaklar sayfasında video, soru bankası ve VDK filtreleri; ders/seviye filtresi ve metin araması
- Video bağlantılarında ders videosu ile oynatma listesi ayrımı
- Seçim, gizleme ve tamamlandı işaretleri (`localStorage`)
- Açık/koyu tema; CRN Atlas renkleri ve arayüz dili
- Telefonda yatay kaydırılabilir kaynak tablosu

Memnuniyet oranları için resmî bir veri yoktur; liste öznel araştırma önerileridir. Kitaplarda baskı ve bulunabilirlik satın almadan önce kontrol edilmelidir. Satış bağlantısı olmayan ürünler için rastgele mağaza bağlantısı eklenmemiştir.

Mert Hoca ve Özcan Aykın kaynaklarının 2027 etiketli kamp videolarından bazıları önceki yıllarda yüklenmiştir. Güncel kitap baskısı, videoların yeniden çekildiği anlamına gelmez.

## Yerel kullanım

`index.html` dosyasını tarayıcıda açın. Derleme veya paket kurulumu gerekmez.

## GitHub Pages

`.github/workflows/pages.yml`, `main` dalına gönderimde siteyi yayımlar. Depo ayarlarında **Settings → Pages → Build and deployment → Source: GitHub Actions** seçilmelidir. Statik dosyalar kök dizindedir.

## Kaynak verisini düzenleme

`app.js` başındaki `kaynaklar` dizisinde her satırın sırası: ders, yayıncı/hoca, ad, tür (`video`, `kitap`, `foy`), seviye (`temel`, `orta`), not, isteğe bağlı URL ve bağlantı etiketi.
