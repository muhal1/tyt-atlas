// Kaynaklar, 20 Eylül 2026 tarihli TYT Kaynak Araştırması konuşmasından derlendi.
// Bağlantısı doğrulanmamış ürünler için satış bağlantısı uydurulmaz.
const kaynaklar = [
  ['Matematik','Bıyıklı Matematik','2027 TYT Matematik Kamplarımız','video','temel','Ana kamp · temel → orta','https://www.youtube.com/playlist?list=PL2wqvRc1FjTlt-yzGniaw8APzbPI4fTxm','Oynatma listesi'],
  ['Matematik','Rehber Matematik','49 Günde TYT Matematik 2027','video','temel','Daha yavaş anlatım alternatifi','https://www.youtube.com/watch?v=2_p7WgLjshw','Ders videosu'],
  ['Matematik','Bıyıklı Matematik','10 Günde Matematik Temeli Atma','video','temel','Dört işlem ve kesirlerde eksik varsa önce bunu izle','https://www.youtube.com/playlist?list=PLmHUXVybN_QLYKnFoJz0jjkV1rW9ddQPN','Oynatma listesi'],
  ['Matematik','Bıyıklı Matematik','55 Günde TYT Matematik Video Ders Kitabı 2027','foy','temel','Ana kamp ile eşleşir; 2027 baskı','https://www.trendyol.com/biyikli-matematik/55-gunde-tyt-matematik-kampi-video-ders-kitabi-2027-tyt-p-313663039','Ürün sayfası'],
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
  ['Paragraf','Hız ve Renk','Paragraf Soru Bankası','kitap','temel','İlk paragraf kitabı · Trendyol 4,7/5 (Eyl 2026)','https://www.trendyol.com/hiz-ve-renk-yayinlari/hiz-ve-renk-tyt-ayt-kpss-ales-dgs-paragraf-soru-bankasi-2026-p-4482454','Ürün sayfası'],
  ['Paragraf','Bilgi Sarmal','Paragraf Soru Bankası','kitap','orta','Başlangıç kaynağından sonra'],
  ['Paragraf','Paragrafın Ritmi','Paragraf Soru Bankası','kitap','orta','Alternatif'],
  ['Fizik','VIP Fizik','50 Günde TYT Fizik','video','temel','Fizik sıfırsa ana kamp','https://www.youtube.com/watch?v=2qtDQBP7Avs','Ders videosu'],
  ['Fizik','Altuğ Güneş','45 Günde TYT Fizik 2027 Tarz Kampı','video','orta','Biraz fizik temeli varsa','https://www.youtube.com/watch?v=XpL2sYzSwRs','Ders videosu'],
  ['Fizik','VIP Fizik','TYT Fizik Video Ders Kitabı','foy','temel','VIP kampı ile eşleşir'],
  ['Fizik','Altuğ Güneş','Tarz Kamp Kitabı','foy','orta','Altuğ Güneş kampı ile eşleşir'],
  ['Fizik','Hız ve Renk / Ulti','TYT Fizik Soru Bankası','kitap','temel','Temel çok zayıfsa'],
  ['Fizik','345 Yayınları','TYT Fizik Soru Bankası','kitap','orta','Konu oturduktan sonra'],
  ['Kimya','Ferrum · Yakup Hoca','2027 TYT Kimya Kampı','video','temel','22 günlük kamp · Orbital ödevleriyle','https://www.youtube.com/playlist?list=PLB0hn7Hw33ssbcLtCDjnzgIWIALTQH-Mn','Oynatma listesi'],
  ['Kimya','Ferrum','TYT Kimya Video Ders Kitabı','foy','temel','Kamp ile eşleşir'],
  ['Kimya','Orbital','TYT Kimya Soru Bankası','kitap','temel','Ferrum kampı ödev kaynağı'],
  ['Biyoloji','Biosem','39 Günde TYT Biyoloji Kampı 2027','video','temel','Ana kamp','https://www.youtube.com/playlist?list=PLqLwBmByktJWEP58XKgI5LE1BeMTOkhjJ','Oynatma listesi'],
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
  ['Fizik','Özcan Aykın','55 Günde TYT Fizik Video Ders Takip Kitabı 2027','foy','temel','Kamp ile eşleşir; alırken baskı yılını kontrol et'],
  ['Matematik','Bıyıklı Matematik','10 Günde Matematik Temeli Atma Garanti Kampı Kitabı','foy','temel','10 günlük temel kampıyla birlikte kullan','https://biyiklimatematik.com/urun/10-Gunde-Matematik-Temeli-Atma-Garanti-Kampi-93','Yayıncı sayfası'],
  ['Problemler','Bıyıklı Matematik','10 Günde Problemler Temeli Atma Garanti Kampı Kitabı','foy','temel','Problem temeli için video ders kitabı','https://biyiklimatematik.com/urun/10-Gunde-PROBLEMLER-Temeli-Atma-Garanti-Kampi-94','Yayıncı sayfası'],
  ['Matematik','Bıyıklı Matematik','GPT TYT Matematik Soru Bankası','kitap','temel','Kolaydan zora video çözümlü sorular; baskı yılını kontrol et','https://biyiklimatematik.com/urun/GPT-TYT-Matematik-Soru-Bankasi-Biyikli-Matematik-Matronik-124','Yayıncı sayfası'],
  ['Problemler','Acil Yayınları','TYT Problemlerin İlacı 2027','kitap','temel','Temeli zayıf olanlara · Trendyol 4,7/5 (Eyl 2026)','https://www.trendyol.com/acil-yayinlari/acil-tyt-problemlerin-ilaci-2027-p-759815524','Ürün sayfası'],
  ['Problemler','Mikro Orijinal','TYT Problemler Fasikülü Soru Bankası','kitap','temel','Kolay → orta alternatif · Trendyol 4,6/5 (Eyl 2026)','https://www.trendyol.com/orijinal-yayinlari/orijinal-mikro-tyt-problemler-fasikulu-soru-bankasi-p-854656337','Ürün sayfası'],
  ['Paragraf','345 Yayınları','Sıfır Risk Paragraf Soru Bankası','kitap','temel','Kolaydan zora alternatif · Trendyol 4,7/5 (Eyl 2026)','https://www.trendyol.com/uc-dort-bes-yayincilik/345-paragraf-sifir-risk-guncel-baski-p-750677344','Ürün sayfası']
// Kimlik 2 kaldırılan eski oynatma listesine aitti; diğer kayıtların kimlikleri sabit kalır.
].map(([ders,yayinci,ad,tur,seviye,not,url,baglanti],index)=>({id:index===0?1:index+2,ders,yayinci,ad,tur,seviye,not,url,baglanti}));

const turAdlari={video:'Video kampı',kitap:'Soru bankası',foy:'VDK / Föy'};
const $=selector=>document.querySelector(selector);
const text=(tag,value,className)=>{const el=document.createElement(tag);el.textContent=value;if(className)el.className=className;return el};
const readSet=(key,convert=value=>value)=>{try{const value=JSON.parse(localStorage.getItem(key)||'[]');return new Set(Array.isArray(value)?value.map(convert):[])}catch{return new Set()}};
const saved=new Set([...readSet('tyt_kaydedilen',Number)].filter(id=>id!==2));
const done=new Set([...readSet('tyt_tamamlanan',Number)].filter(id=>id!==2));
const hiddenSubjects=readSet('tyt_gizlenen_dersler',String);
const cartKey='tyt_alisveris_sepeti';
const cart=(()=>{try{const value=JSON.parse(localStorage.getItem(cartKey)||'[]');return Array.isArray(value)?value.filter(item=>item&&typeof item.id==='string'&&typeof item.url==='string'&&typeof item.name==='string'&&typeof item.note==='string'&&cartUrl(item.url)):[]}catch{return []}})();
const subjects=[...new Set(kaynaklar.map(item=>item.ders))];
let resourceType='all';

function persist(){
  try{
    localStorage.setItem('tyt_kaydedilen',JSON.stringify([...saved]));
    localStorage.setItem('tyt_tamamlanan',JSON.stringify([...done]));
    localStorage.setItem('tyt_gizlenen_dersler',JSON.stringify([...hiddenSubjects]));
  }catch{}
}

function actionButton(label,className,action,value,ariaLabel){
  const button=text('button',label,className);
  button.type='button';
  button.dataset[action]=String(value);
  button.setAttribute('aria-label',ariaLabel);
  return button;
}

function renderOverview(){
  const grid=$('#subject-cards');
  grid.replaceChildren();
  const visible=subjects.filter(subject=>!hiddenSubjects.has(subject));
  const countSelected=subject=>kaynaklar.filter(item=>item.ders===subject&&saved.has(item.id)).length;
  visible.sort((a,b)=>Number(countSelected(b)>0)-Number(countSelected(a)>0)||subjects.indexOf(a)-subjects.indexOf(b));
  for(const subject of visible){
    const chosen=kaynaklar.filter(item=>item.ders===subject&&saved.has(item.id));
    const card=document.createElement('article');
    card.className='subject-card'+(chosen.length?' has-choice':'');
    const head=document.createElement('div');
    head.className='subject-card-head';
    const title=text('h3',subject);
    const badge=text('span',chosen.length+' seçili','subject-card-count');
    head.append(title,badge);
    const hide=actionButton('Gizle','hide-subject','hideSubject',subject,subject+' dersini gizle');
    head.append(hide);
    card.append(head);
    if(chosen.length){
      const list=document.createElement('ul');
      list.className='chosen-list';
      for(const item of chosen){
        const row=document.createElement('li');
        const copy=document.createElement('div');
        copy.className='chosen-copy';
        copy.append(text('span',turAdlari[item.tur],'chosen-kind'));
        if(item.url){
          const link=text('a',item.ad);
          link.href=item.url;link.target='_blank';link.rel='noopener noreferrer';
          copy.append(link);
        }else copy.append(text('strong',item.ad));
        copy.append(text('small',item.yayinci+(done.has(item.id)?' · Tamamlandı':'')));
        row.append(copy,actionButton('Kaldır','remove-choice','removeChoice',item.id,item.ad+' seçimini kaldır'));
        list.append(row);
      }
      card.append(list);
    }else card.append(text('p','Henüz kaynak seçilmedi.','subject-empty'));
    const pick=text('a',chosen.length?'Başka kaynak seç →':'Kaynak seç →','choose-link');
    pick.href='#kaynaklar';
    pick.dataset.chooseSubject=subject;
    card.append(pick);
    grid.append(card);
  }
  if(!visible.length)grid.append(text('p','Tüm dersler gizli. Aşağıdaki bölümden geri getirebilirsin.','all-hidden'));
  const hiddenList=$('#hidden-list');
  hiddenList.replaceChildren();
  for(const subject of subjects.filter(item=>hiddenSubjects.has(item))){
    const row=document.createElement('div');
    row.className='hidden-row';
    row.append(text('span',subject),actionButton('Geri getir','restore-button','restoreSubject',subject,subject+' dersini geri getir'));
    hiddenList.append(row);
  }
  if(!hiddenSubjects.size)hiddenList.append(text('p','Gizlenen ders yok.','subject-empty'));
  $('#hidden-count').textContent=hiddenSubjects.size;
  $('#visible-subject-count').textContent=visible.length+' ders';
  $('#subject-count').textContent=visible.length;
  $('#resource-count').textContent=kaynaklar.length;
  $('#saved-count').textContent=saved.size;
  $('#done-count').textContent=done.size;
}

function updateSubjectOptions(){
  const select=$('#subject-filter');
  const value=select.value;
  select.replaceChildren();
  const all=text('option','Tüm dersler');all.value='';select.append(all);
  for(const subject of subjects.filter(item=>!hiddenSubjects.has(item)).sort((a,b)=>a.localeCompare(b,'tr'))){
    const option=text('option',subject);option.value=subject;select.append(option);
  }
  select.value=hiddenSubjects.has(value)?'':value;
}

function renderResources(){
  const term=$('#search').value.trim().toLocaleLowerCase('tr');
  const subject=$('#subject-filter').value;
  const level=$('#level-filter').value;
  const rows=kaynaklar.filter(item=>!hiddenSubjects.has(item.ders)
    &&(resourceType==='all'||item.tur===resourceType)
    &&(!subject||item.ders===subject)
    &&(!level||item.seviye===level)
    &&(!term||(item.ders+' '+item.yayinci+' '+item.ad+' '+item.not).toLocaleLowerCase('tr').includes(term)));
  const tbody=$('#resource-rows');tbody.replaceChildren();
  for(const item of rows){
    const tr=document.createElement('tr');if(done.has(item.id))tr.classList.add('done');
    tr.append(text('td',item.ders,'subject'));
    const nameCell=document.createElement('td');
    const name=text('div',item.ad,'resource-name');
    name.append(text('small',item.yayinci));nameCell.append(name);tr.append(nameCell);
    const typeCell=document.createElement('td');typeCell.append(text('span',turAdlari[item.tur],'type-tag type-'+item.tur));tr.append(typeCell);
    const levelCell=document.createElement('td');levelCell.append(text('span',item.seviye==='temel'?'Temel → Orta':'Orta','level-tag '+item.seviye));tr.append(levelCell);
    tr.append(text('td',item.not,'note-cell'));
    const linkCell=document.createElement('td');linkCell.className='link-cell';
    if(item.url){const a=text('a',(item.baglanti||'Bağlantı')+' ↗');a.href=item.url;a.target='_blank';a.rel='noopener noreferrer';linkCell.append(a)}
    else linkCell.append(text('span','—','no-link'));
    tr.append(linkCell);
    const actions=document.createElement('td');actions.className='actions';
    const selected=saved.has(item.id);
    const pick=actionButton(selected?'Seçildi':'Seç','select-source'+(selected?' selected':''),'toggleSave',item.id,item.ad+(selected?' seçimini kaldır':' kaynağını seç'));
    pick.setAttribute('aria-pressed',String(selected));
    const finished=done.has(item.id);
    const complete=actionButton('✓','row-button'+(finished?' selected':''),'toggleDone',item.id,item.ad+(finished?' tamamlandı işaretini kaldır':' tamamlandı işaretle'));
    complete.title='Tamamlandı';complete.setAttribute('aria-pressed',String(finished));
    actions.append(pick,complete);tr.append(actions);tbody.append(tr);
  }
  $('#empty-state').hidden=rows.length!==0;
  $('#result-count').textContent=rows.length+' kaynak';
}

function renderAll(){
  updateSubjectOptions();
  renderOverview();
  renderResources();
}

function cartUrl(value){
  try{const url=new URL(value.trim());return ['https:','http:'].includes(url.protocol)?url.href:null}catch{return null}
}

function persistCart(){
  try{localStorage.setItem(cartKey,JSON.stringify(cart));return true}catch{return false}
}

function renderCart(){
  const list=$('#cart-list');list.replaceChildren();
  $('#cart-count').textContent=cart.length+' ürün';
  $('#cart-empty').hidden=cart.length>0;
  for(const item of cart){
    const li=document.createElement('li');li.className='cart-item';
    const copy=document.createElement('div');copy.className='cart-item-copy';
    const link=text('a',item.name);link.href=item.url;link.target='_blank';link.rel='noopener noreferrer';
    copy.append(link,text('small',new URL(item.url).hostname));
    if(item.note)copy.append(text('p',item.note));
    li.append(copy,actionButton('Kaldır','quiet-button cart-remove','removeCart',item.id,item.name+' ürününü sepetten kaldır'));
    list.append(li);
  }
}

function renderSchedule(){
  const fallback=kaynaklar.find(item=>item.ders==='Fizik'&&item.yayinci==='VIP Fizik'&&item.tur==='video');
  const selected=kaynaklar.find(item=>item.ders==='Fizik'&&item.tur==='video'&&saved.has(item.id));
  const source=selected||fallback;
  const physicsName=source?source.yayinci+' · '+source.ad:'Seçtiğin fizik kampı';
  const cell=(tag,title,detail,className='')=>`<td class="${className}"><span class="lesson-tag ${tag}">${tag==='practice'?'Uygulama':tag==='review'?'Tekrar':tag==='paragraph'?'Paragraf':tag==='math'?'Matematik':tag==='physics'?'Fizik':tag==='school'?'Okul':tag==='rest'?'Serbest':'Problem'}</span><strong>${title}</strong><small${tag==='physics'?' class="schedule-physics-name"':''}>${detail}</small></td>`;
  const paragraph=cell('paragraph','10 soru','Süre tut + yanlış işaretle');
  const math=cell('math','Temel kamp · 1 ders','Videoyu izle, kısa not al');
  const problem=cell('problem','10 soru','Ağır konu yok');
  const school=cell('school','13:30 evden çıkış','19:30 eve dönüş');
  const rest=cell('rest','Dinlenme / sosyal zaman','Ek ders zorunlu değil','weekend');
  $('#weekly-plan').innerHTML=`
    <table class="weekly-plan">
      <thead><tr><th scope="col">Saat</th><th scope="col">Pazartesi</th><th scope="col">Salı</th><th scope="col">Çarşamba</th><th scope="col">Perşembe</th><th scope="col">Cuma</th><th scope="col" class="weekend">Cumartesi</th><th scope="col" class="weekend">Pazar</th></tr></thead>
      <tbody>
        <tr><th scope="row"><strong>10:00–10:25</strong><small>Güne giriş</small></th>${paragraph.repeat(5)}${cell('paragraph','10 soru','Süre tut + yanlış işaretle','weekend').repeat(2)}</tr>
        <tr><th scope="row"><strong>10:35–11:45</strong><small>Ana blok</small></th>${math.repeat(5)}${cell('math','Temel kamp · 1 ders','Eksik dersi de tamamla','weekend')}${cell('math','Temel kamp · 1 ders','Haftanın son dersi','weekend')}</tr>
        <tr><th scope="row"><strong>12:00–13:00</strong><small>Pekiştirme</small></th>
          ${cell('practice','15 temel matematik','Sabahki konudan')}
          ${cell('physics','1 ders videosu',physicsName)}
          ${cell('practice','15 temel matematik','Yanlışları düzelt')}
          ${cell('physics','1 ders videosu',physicsName)}
          ${cell('practice','15 temel matematik','Haftalık eksikleri gör')}
          ${cell('physics','1 ders + 10 soru',physicsName,'weekend')}
          ${cell('review','45 dk haftalık tekrar','Matematik + fizik yanlışları','weekend')}
        </tr>
        <tr class="school-row"><th scope="row"><strong>13:30–19:30</strong><small>Gün ortası</small></th>${school.repeat(5)}${rest}${cell('rest','Dinlenme / sosyal zaman','Yeni haftaya enerji bırak','weekend')}</tr>
        <tr><th scope="row"><strong>20:30–21:00</strong><small>Hafif akşam</small></th>${problem.repeat(5)}${cell('problem','10 soru','Ritmi koru','weekend').repeat(2)}</tr>
        <tr class="wind-down-row"><th scope="row"><strong>21:00–00:00</strong><small>Kapanış</small></th><td colspan="7"><strong>Ders bitti.</strong> En fazla 10 dakika yanlışlara bak; kalan zaman dinlenme ve uykuya hazırlık. <b>00:00'da uyku.</b></td></tr>
      </tbody>
    </table>`;
  $('#physics-priority-name').textContent=physicsName;
  const link=$('#physics-plan-source');
  link.querySelector('strong').textContent=physicsName;
  if(source&&source.url){link.href=source.url;link.removeAttribute('aria-disabled')}
  else{link.removeAttribute('href');link.setAttribute('aria-disabled','true')}
}

function showPage(){
  const page=location.hash==='#program'?'program':location.hash==='#kaynaklar'?'kaynaklar':location.hash==='#sepet'?'sepet':'genel';
  $('#overview-page').hidden=page!=='genel';
  $('#schedule-page').hidden=page!=='program';
  $('#resources-page').hidden=page!=='kaynaklar';
  $('#cart-page').hidden=page!=='sepet';
  $('#page-title').textContent={genel:'Genel bakış',program:'Çalışma Programı',kaynaklar:'Kaynaklar',sepet:'Alışveriş Sepeti'}[page];
  document.querySelectorAll('[data-page]').forEach(link=>{
    const current=link.dataset.page===page;
    link.classList.toggle('active',current);
    if(current)link.setAttribute('aria-current','page');else link.removeAttribute('aria-current');
  });
}

document.addEventListener('DOMContentLoaded',()=>{
  persist(); // Kaldırılan kaynağın eski tarayıcı işaretlerini temizle.
  $('#subject-cards').addEventListener('click',event=>{
    const hide=event.target.closest('[data-hide-subject]');
    if(hide){hiddenSubjects.add(hide.dataset.hideSubject);persist();$('#hidden-subjects').open=true;renderAll();return}
    const remove=event.target.closest('[data-remove-choice]');
    if(remove){saved.delete(Number(remove.dataset.removeChoice));persist();renderAll();renderSchedule();return}
    const choose=event.target.closest('[data-choose-subject]');
    if(choose){
      $('#search').value='';$('#level-filter').value='';
      resourceType='all';
      document.querySelectorAll('[data-type]').forEach(button=>{const active=button.dataset.type==='all';button.classList.toggle('active',active);button.setAttribute('aria-pressed',String(active))});
      $('#subject-filter').value=choose.dataset.chooseSubject;
      renderResources();
    }
  });
  $('#hidden-list').addEventListener('click',event=>{
    const restore=event.target.closest('[data-restore-subject]');
    if(!restore)return;
    hiddenSubjects.delete(restore.dataset.restoreSubject);persist();renderAll();
  });
  $('#resource-rows').addEventListener('click',event=>{
    const pick=event.target.closest('[data-toggle-save]');
    if(pick){const id=Number(pick.dataset.toggleSave);if(saved.has(id))saved.delete(id);else saved.add(id);persist();renderAll();renderSchedule();return}
    const complete=event.target.closest('[data-toggle-done]');
    if(complete){const id=Number(complete.dataset.toggleDone);if(done.has(id))done.delete(id);else done.add(id);persist();renderAll()}
  });
  $('#type-filters').addEventListener('click',event=>{
    const button=event.target.closest('[data-type]');
    if(!button)return;
    resourceType=button.dataset.type;
    document.querySelectorAll('[data-type]').forEach(item=>{const active=item===button;item.classList.toggle('active',active);item.setAttribute('aria-pressed',String(active))});
    renderResources();
  });
  for(const id of ['search','subject-filter','level-filter'])$('#'+id).addEventListener(id==='search'?'input':'change',renderResources);
  $('#clear-filters').addEventListener('click',()=>{$('#search').value='';$('#subject-filter').value='';$('#level-filter').value='';renderResources()});
  $('#cart-form').addEventListener('submit',event=>{
    event.preventDefault();
    const url=cartUrl($('#cart-url').value);
    const error=$('#cart-error');error.hidden=true;
    if(!url){error.textContent='Geçerli bir http veya https bağlantısı gir.';error.hidden=false;return}
    if(cart.some(item=>item.url===url)){error.textContent='Bu bağlantı zaten sepette var.';error.hidden=false;return}
    const name=$('#cart-name').value.trim()||new URL(url).hostname;
    const item={id:crypto.randomUUID(),url,name,note:$('#cart-note').value.trim()};
    cart.unshift(item);
    if(!persistCart()){
      cart.shift();error.textContent='Tarayıcı listeyi kaydedemedi. Depolama alanını kontrol et.';error.hidden=false;return;
    }
    $('#cart-form').reset();renderCart();$('#cart-url').focus();
  });
  $('#cart-list').addEventListener('click',event=>{
    const button=event.target.closest('[data-remove-cart]');if(!button)return;
    const index=cart.findIndex(item=>item.id===button.dataset.removeCart);if(index<0)return;
    const removed=cart.splice(index,1)[0];
    if(!persistCart()){cart.splice(index,0,removed);const error=$('#cart-error');error.textContent='Ürün kaldırma işlemi kaydedilemedi.';error.hidden=false;return}
    renderCart();
  });
  $('#theme-toggle').addEventListener('click',()=>{const current=document.documentElement.dataset.tema||(matchMedia('(prefers-color-scheme: dark)').matches?'koyu':'acik');const next=current==='koyu'?'acik':'koyu';document.documentElement.dataset.tema=next;try{localStorage.setItem('tyt_tema',next)}catch{}});
  window.addEventListener('hashchange',showPage);
  renderAll();renderCart();renderSchedule();showPage();
});
