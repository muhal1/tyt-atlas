// Kaynaklar, 20 Eylül 2026 tarihli TYT Kaynak Araştırması konuşmasından derlendi.
// Bağlantısı doğrulanmamış ürünler için satış bağlantısı uydurulmaz.
const kaynaklar = [
  ['Matematik','Bıyıklı Matematik','55 Günde TYT Matematik 2027','video','temel','Ana kamp · temel → orta','https://www.youtube.com/watch?v=DV0tZzKFbw0','Ders videosu'],
  ['Matematik','Bıyıklı Matematik','55 Günde TYT Matematik oynatma listesi','video','temel','Eski kamp oynatma listesi','https://youtube.com/playlist?list=PL2wqvRc1FjTkbSgOYlcnLhgojLISWQKPQ','Oynatma listesi'],
  ['Matematik','Rehber Matematik','49 Günde TYT Matematik 2027','video','temel','Daha yavaş anlatım alternatifi','https://www.youtube.com/watch?v=2_p7WgLjshw','Ders videosu'],
  ['Matematik','Bıyıklı Matematik','10 Günde Matematik Temeli Atma','video','temel','Dört işlem ve kesirlerde eksik varsa önce bunu izle'],
  ['Matematik','Bıyıklı Matematik','55 Günde TYT Video Ders Kitabı 2027','foy','temel','Ana kamp ile eşleşir'],
  ['Matematik','345 Yayınları','TYT Matematik Soru Bankası','kitap','temel','İlk soru bankası · temel → orta'],
  ['Matematik','Bilgi Sarmal','TYT Matematik Soru Bankası','kitap','orta','345 sonrasında'],
  ['Matematik','Matematiğin İlacı / Aktif Matematik','Temel Matematik','kitap','temel','Matematik gerçekten sıfırsa'],
  ['Problemler','Bilgi Sarmal','Problemler Soru Bankası','kitap','orta','Temel yerleşince'],
  ['Geometri','Kenan Kara','2027 TYT-AYT Geometri Kampı','video','temel','Temel kavramlardan başlar','https://www.youtube.com/watch?v=LvbYFvig5qI','Ders videosu'],
  ['Geometri','Kenan Kara','TYT-AYT Geometri Video Ders Kitabı','foy','temel','Kamp ile eşleşir'],
  ['Geometri','345 Yayınları','TYT-AYT Geometri Soru Bankası','kitap','temel','Temel → orta geçiş'],
  ['Geometri','Geometrinin İlacı','Geometri Soru Bankası','kitap','temel','Geometri tamamen sıfırsa'],
  ['Türkçe','Türkçenin Matematiği','21 Günde Dil Bilgisi 2027','video','temel','Ana dil bilgisi kampı','https://www.youtube.com/watch?v=KSpuVe7Mfc4','Ders videosu'],
  ['Türkçe','Türkçenin Matematiği','21 Günde Dil Bilgisi Video Ders Kitabı','foy','temel','Kamp ile eşleşir'],
  ['Türkçe','Hız ve Renk','TYT Türkçe Soru Bankası','kitap','temel','Başlangıç için'],
  ['Türkçe','Bilgi Sarmal','TYT Türkçe Soru Bankası','kitap','orta','İkinci aşama'],
  ['Dil Bilgisi','Rüştü Hoca','Dil Bilgisi Dersleri','video','temel','Alternatif anlatım; belirli seri bağlantısı verilmedi'],
  ['Dil Bilgisi','Hız ve Renk','Dil Bilgisi Soru Bankası','kitap','temel','Başlangıç için'],
  ['Dil Bilgisi','Bilgi Sarmal','Dil Bilgisi Soru Bankası','kitap','orta','İkinci aşama'],
  ['Paragraf','Hız ve Renk','Paragraf Soru Bankası','kitap','temel','Günlük soru pratiği'],
  ['Paragraf','Bilgi Sarmal','Paragraf Soru Bankası','kitap','orta','Başlangıç kaynağından sonra'],
  ['Paragraf','Paragrafın Ritmi','Paragraf Soru Bankası','kitap','orta','Alternatif'],
  ['Fizik','VIP Fizik','50 Günde TYT Fizik','video','temel','Fizik sıfırsa ana kamp','https://www.youtube.com/watch?v=2qtDQBP7Avs','Ders videosu'],
  ['Fizik','Altuğ Güneş','45 Günde TYT Fizik 2027 Tarz Kampı','video','orta','Biraz fizik temeli varsa','https://www.youtube.com/watch?v=XpL2sYzSwRs','Ders videosu'],
  ['Fizik','VIP Fizik','TYT Fizik Video Ders Kitabı','foy','temel','VIP kampı ile eşleşir'],
  ['Fizik','Altuğ Güneş','Tarz Kamp Kitabı','foy','orta','Altuğ Güneş kampı ile eşleşir'],
  ['Fizik','Hız ve Renk / Ulti','TYT Fizik Soru Bankası','kitap','temel','Temel çok zayıfsa'],
  ['Fizik','345 Yayınları','TYT Fizik Soru Bankası','kitap','orta','Konu oturduktan sonra'],
  ['Kimya','Ferrum · Yakup Hoca','2027 TYT Kimya Kampı','video','temel','22 günlük kamp · Orbital ödevleriyle','https://www.youtube.com/watch?v=Uzz4Z_iV4cA','Ders videosu'],
  ['Kimya','Ferrum','TYT Kimya Video Ders Kitabı','foy','temel','Kamp ile eşleşir'],
  ['Kimya','Orbital','TYT Kimya Soru Bankası','kitap','temel','Ferrum kampı ödev kaynağı'],
  ['Biyoloji','Biosem','39 Günde TYT Biyolojiyi Bitir 2026–27','video','temel','Ana kamp','https://www.youtube.com/watch?list=PLqLwBmByktJWbDXnjbl5CMRrm5nEwMFOg&v=4TSDgTt83yw','Oynatma listesi'],
  ['Biyoloji','Betül Biyoloji','2027 TYT Biyoloji Kampı','video','temel','Sıfırdan başlayanlar için alternatif','https://www.youtube.com/watch?v=52AVCgjN6tM','Ders videosu'],
  ['Biyoloji','Biosem','TYT Biyoloji Video Ders Kitabı','foy','temel','Kamp ile eşleşir'],
  ['Biyoloji','Biyotik','TYT Biyoloji Soru Bankası','kitap','temel','Temel → orta seviye'],
  ['Coğrafya','Coğrafyanın Kodları','39 Günde TYT Coğrafya 2026–27','video','temel','Ana kamp · harita kampıyla destekle','https://www.youtube.com/watch?v=l5tQfbL89G4','Ders videosu'],
  ['Coğrafya','Coğrafyanın Kodları','1 Kitap 3 Kamp Video Ders Kitabı','foy','temel','Kamp ile eşleşir'],
  ['Tarih','Ramazan Yetgin / Benim Hocam','TYT Tarih Kampı','video','temel','Tarih ana anlatımı; belirli seri bağlantısı verilmedi'],
  ['Tarih','Gökhan Öz / Benim Hocam','TYT Tarih Ders Notu 2027','foy','temel','Alternatif güncel ders notu'],
  ['Tarih','Gökhan Öz / Benim Hocam','TYT Tarih Soru Bankası 2027','kitap','temel','Ders notuyla birlikte'],
  ['Felsefe / Din','Yusuf Mert Aslan / Bilgin Gürek','Kısa Konu Anlatımı','video','temel','Kısa özet + soru çözümü; belirli seri bağlantısı verilmedi'],
  ['Sosyal','Apotemi','TYT Sosyal Bilimler Konu Özeti','foy','orta','Genel tekrar'],
  ['Genel','ÖSYM / OGM','Çıkmış TYT Soruları ve Ücretsiz Materyaller','kitap','temel','Resmî ücretsiz kaynakları da programa kat'],
  // Yeni kayıtlar sonda: önceki localStorage kimlikleri korunur.
  ['Matematik','Mert Hoca','70 Günde TYT Matematik · 2027 etiketli seri','video','orta','Temeli biraz oturanlar için ayrıntılı alternatif; video eski tarihte yüklenmiş olabilir','https://www.youtube.com/watch?v=8F-ojRKYTVU','Ders videosu'],
  ['Matematik','Mert Hoca Yayınları','70 Günde TYT Matematik Video Ders Kitabı 2027','foy','orta','70 günlük kamp ile eşleşir','https://www.merthoca.com/70-gunde-tyt-matematik-video-ders-kitabi-2027-model-','Yayıncı sayfası'],
  ['Matematik','Mert Hoca Yayınları','TYT Matematik Soru Bankası 2027','kitap','orta','Temel oturduktan sonra; önce tek soru bankası seç','https://www.merthoca.com/-tyt-matematik-soru-bankasi-2027-model-','Yayıncı sayfası'],
  ['Fizik','Özcan Aykın','55 Günde TYT Fizik · 2027 etiketli seri','video','temel','Kavramsal ve ayrıntılı; uzun kamp, eski videolar güncel başlıkla sunuluyor','https://www.youtube.com/watch?v=7aVrdQ7uSQ4','Ders videosu'],
  ['Fizik','Özcan Aykın','55 Günde TYT Fizik Video Ders Takip Kitabı 2027','foy','temel','Kamp ile eşleşir; alırken baskı yılını kontrol et']
].map(([ders,yayinci,ad,tur,seviye,not,url,baglanti],index)=>({id:index+1,ders,yayinci,ad,tur,seviye,not,url,baglanti}));

const turAdlari={video:'Video kampı',kitap:'Soru bankası',foy:'VDK / Föy'};
const $=s=>document.querySelector(s);
let view='genel';
const readSet=key=>{try{return new Set(JSON.parse(localStorage.getItem(key)||'[]'))}catch{return new Set()}};
const saved=readSet('tyt_kaydedilen');
const done=readSet('tyt_tamamlanan');
const persist=()=>{try{localStorage.setItem('tyt_kaydedilen',JSON.stringify([...saved]));localStorage.setItem('tyt_tamamlanan',JSON.stringify([...done]))}catch{}};
const text=(tag,value,className)=>{const el=document.createElement(tag);el.textContent=value;if(className)el.className=className;return el};

function render(){
  const term=$('#search').value.trim().toLocaleLowerCase('tr');
  const subject=$('#subject-filter').value;
  const level=$('#level-filter').value;
  const rows=kaynaklar.filter(k=>(view==='genel'||view===k.tur||view==='kaydedilen'&&saved.has(k.id))&&(!subject||k.ders===subject)&&(!level||k.seviye===level)&&(!term||`${k.ders} ${k.yayinci} ${k.ad} ${k.not}`.toLocaleLowerCase('tr').includes(term)));
  const tbody=$('#resource-rows');tbody.replaceChildren();
  for(const k of rows){
    const tr=document.createElement('tr');if(done.has(k.id))tr.classList.add('done');
    const subjectCell=document.createElement('td');subjectCell.append(text('span',k.ders,'subject'));tr.append(subjectCell);
    const nameCell=document.createElement('td');const name=text('div',k.ad,'resource-name');name.append(text('small',k.yayinci));nameCell.append(name);tr.append(nameCell);
    const typeCell=document.createElement('td');typeCell.append(text('span',turAdlari[k.tur],`type-tag type-${k.tur}`));tr.append(typeCell);
    const levelCell=document.createElement('td');levelCell.append(text('span',k.seviye==='temel'?'Temel → Orta':'Orta',`level-tag ${k.seviye}`));tr.append(levelCell);
    tr.append(text('td',k.not,'note-cell'));
    const linkCell=document.createElement('td');linkCell.className='link-cell';if(k.url){const a=text('a',k.baglanti+' ↗');a.href=k.url;a.target='_blank';a.rel='noopener noreferrer';linkCell.append(a)}else linkCell.append(text('span','—','no-link'));tr.append(linkCell);
    const actions=document.createElement('td');actions.className='actions';for(const [kind,set,symbol,title] of [['save',saved,'☆','Kaydet'],['done',done,'✓','Tamamlandı']]){const button=text('button',symbol,`row-button ${set.has(k.id)?'selected':''}`);button.type='button';button.dataset.action=kind;button.dataset.id=k.id;button.title=title;button.setAttribute('aria-label',`${k.ad}: ${set.has(k.id)?title+' işaretini kaldır':title+' işaretle'}`);button.setAttribute('aria-pressed',String(set.has(k.id)));actions.append(button)}tr.append(actions);tbody.append(tr);
  }
  $('#empty-state').hidden=rows.length!==0;
  $('#result-count').textContent=`${rows.length} kaynak`;
  $('#saved-count').textContent=saved.size;
  $('#done-count').textContent=done.size;
}

document.addEventListener('DOMContentLoaded',()=>{
  $('#subject-count').textContent=new Set(kaynaklar.map(k=>k.ders)).size;
  $('#resource-count').textContent=kaynaklar.length;
  for(const subject of [...new Set(kaynaklar.map(k=>k.ders))].sort((a,b)=>a.localeCompare(b,'tr'))){const option=text('option',subject);option.value=subject;$('#subject-filter').append(option)}
  $('#nav').addEventListener('click',event=>{const button=event.target.closest('[data-view]');if(!button)return;view=button.dataset.view;document.querySelectorAll('.nav-item').forEach(item=>item.classList.toggle('active',item===button));const titles={genel:'Tüm kaynaklar',video:'Video kampları',kitap:'Soru bankaları',foy:'VDK / föyler',kaydedilen:'Kaydedilen kaynaklar'};$('#table-title').textContent=titles[view];render()});
  for(const id of ['search','subject-filter','level-filter'])$('#'+id).addEventListener(id==='search'?'input':'change',render);
  $('#clear-filters').addEventListener('click',()=>{$('#search').value='';$('#subject-filter').value='';$('#level-filter').value='';render()});
  $('#resource-rows').addEventListener('click',event=>{const button=event.target.closest('[data-action]');if(!button)return;const set=button.dataset.action==='save'?saved:done;const id=Number(button.dataset.id);if(set.has(id))set.delete(id);else set.add(id);persist();render()});
  $('#theme-toggle').addEventListener('click',()=>{const current=document.documentElement.dataset.tema|| (matchMedia('(prefers-color-scheme: dark)').matches?'koyu':'acik');const next=current==='koyu'?'acik':'koyu';document.documentElement.dataset.tema=next;try{localStorage.setItem('tyt_tema',next)}catch{}});
  render();
});
