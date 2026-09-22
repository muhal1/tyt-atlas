# TYT Atlas

[Canlı site](https://muhal1.github.io/tyt-atlas/)

2027 TYT için temel ve orta seviye kaynak rehberi. 20 Eylül 2026 tarihli TYT kaynak araştırması konuşmasındaki video kampları, soru bankaları ve video ders kitapları tabloya aktarıldı.

## Özellikler

- Genel bakışta ders kutuları ve seçilen video, soru bankası, VDK / föy kaynakları
- Ders gizleme ve Genel bakış altındaki açılır bölümden geri getirme
- Ayrı Kaynaklar sayfasında video, soru bankası ve VDK filtreleri; ders/seviye filtresi ve metin araması
- Bağımsız Alışveriş Sepeti sayfasında ürün bağlantısı, isteğe bağlı ad/not ve kaldırma
- Video bağlantılarında ders videosu ile oynatma listesi ayrımı
- Supabase üzerinden telefon ve bilgisayarlarda ortak seçim, gizleme, tamamlandı işaretleri ve alışveriş sepeti
- Herkese ortak okuma; yalnızca giriş yapan aile hesaplarına düzenleme
- Mobil uyumlu Aile Girişi ekranı; düzenleme isteğinde otomatik yönlendirme ve giriş sonrası kaldığı sayfaya dönüş
- Açık/koyu tema; CRN Atlas renkleri ve arayüz dili
- Telefonda yatay kaydırılabilir kaynak tablosu

Memnuniyet oranları için resmî bir veri yoktur; liste öznel araştırma önerileridir. Kitaplarda baskı ve bulunabilirlik satın almadan önce kontrol edilmelidir. Satış bağlantısı olmayan ürünler için rastgele mağaza bağlantısı eklenmemiştir.

Mert Hoca ve Özcan Aykın kaynaklarının 2027 etiketli kamp videolarından bazıları önceki yıllarda yüklenmiştir. Güncel kitap baskısı, videoların yeniden çekildiği anlamına gelmez.

## Yerel kullanım

`index.html` dosyasını tarayıcıda açın. Derleme veya paket kurulumu gerekmez.

## GitHub Pages

`.github/workflows/pages.yml`, `main` dalına gönderimde siteyi yayımlar. Depo ayarlarında **Settings → Pages → Build and deployment → Source: GitHub Actions** seçilmelidir. Statik dosyalar kök dizindedir.

## Ortak pano kurulumu

1. Supabase'te bir proje oluşturun.
2. SQL Editor'da [`supabase/setup.sql`](supabase/setup.sql) dosyasını çalıştırın.
3. Authentication → Providers → Email bölümünde yeni kullanıcı kaydını kapatın.
4. Authentication → Users bölümünde yalnızca düzenleme yapacak aile üyelerini oluşturun.
5. Project Settings → Data API bölümündeki proje URL'sini ve **publishable key** değerini [`supabase-config.js`](supabase-config.js) içine yazın.

Tarayıcıya `secret` veya `service_role` anahtarı koymayın. İlk yetkili girişte ortak tabloda kayıt yoksa o tarayıcıdaki eski seçimler ve sepet ortak panoya aktarılır. Sonraki ziyaretçiler aynı kaydı görür; düzenlemek için giriş yapar.

## Kaynak verisini düzenleme

`app.js` başındaki `kaynaklar` dizisinde her satırın sırası: ders, yayıncı/hoca, ad, tür (`video`, `kitap`, `foy`), seviye (`temel`, `orta`), not, isteğe bağlı URL ve bağlantı etiketi.
