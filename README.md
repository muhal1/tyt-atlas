# TYT Atlas

[Canlı site](https://muhal1.github.io/tyt-atlas/)

2027 TYT için temel ve orta seviye kaynak rehberi. 20 Eylül 2026 tarihli TYT kaynak araştırması konuşmasındaki video kampları, soru bankaları ve video ders kitapları tabloya aktarıldı.

## Özellikler

- Kaynak türüne, derse ve seviyeye göre filtreleme; metin araması
- Video bağlantılarında ders videosu ile oynatma listesi ayrımı
- Kaydetme ve tamamlandı işaretleri (`localStorage`)
- Açık/koyu tema; CRN Atlas renkleri ve arayüz dili
- Telefonda yatay kaydırılabilir kaynak tablosu

Memnuniyet oranları için resmî bir veri yoktur; liste öznel araştırma önerileridir. Kitaplarda baskı ve bulunabilirlik satın almadan önce kontrol edilmelidir. Satış bağlantısı olmayan ürünler için rastgele mağaza bağlantısı eklenmemiştir.

## Yerel kullanım

`index.html` dosyasını tarayıcıda açın. Derleme veya paket kurulumu gerekmez.

## GitHub Pages

`.github/workflows/pages.yml`, `main` dalına gönderimde siteyi yayımlar. Depo ayarlarında **Settings → Pages → Build and deployment → Source: GitHub Actions** seçilmelidir. Statik dosyalar kök dizindedir.

## Kaynak verisini düzenleme

`app.js` başındaki `kaynaklar` dizisinde her satırın sırası: ders, yayıncı/hoca, ad, tür (`video`, `kitap`, `foy`), seviye (`temel`, `orta`), not, isteğe bağlı URL ve bağlantı etiketi.


