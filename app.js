// Kaynaklar, 20 Eylül 2026 tarihli TYT Kaynak Araştırması konuşmasından derlendi.
// Bağlantısı doğrulanmamış ürünler için satış bağlantısı uydurulmaz.
const kaynaklar = [
  ['Matematik','Bıyıklı Matematik','55 Günde TYT Matematik 2027','video','temel','Ana kamp · temel → orta','https://www.youtube.com/watch?v=DV0tZzKFbw0','Ders videosu'],
  ['Matematik','Bıyıklı Matematik','55 Günde TYT Matematik oynatma listesi','video','temel','Eski kamp oynatma listesi','https://youtube.com/playlist?list=PL2wqvRc1FjTkbSgOYlcnLhgojLISWQKPQ','Oynatma listesi'],
  ['Matematik','Rehber Matematik','49 Günde TYT Matematik 2027','video','temel','Daha yavaş anlatım alternatifi','https://www.youtube.com/watch?v=2_p7WgLjshw','Ders videosu'],
  ['Matematik','Bıyıklı Matematik','10 Günde Matematik Temeli Atma','video','temel','Dört işlem ve kesirlerde eksik varsa önce bunu izle','https://www.youtube.com/playlist?list=PLmHUXVybN_QLYKnFoJz0jjkV1rW9ddQPN','Oynatma listesi'],
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
const $=selector=>document.querySelector(selector);
const text=(tag,value,className)=>{const el=document.createElement(tag);el.textContent=value;if(className)el.className=className;return el};
const readSet=(key,convert=value=>value)=>{try{const value=JSON.parse(localStorage.getItem(key)||'[]');return new Set(Array.isArray(value)?value.map(convert):[])}catch{return new Set()}};
const saved=readSet('tyt_kaydedilen',Number);
const done=readSet('tyt_tamamlanan',Number);
const hiddenSubjects=readSet('tyt_gizlenen_dersler',String);
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

function showPage(){
  const page=location.hash==='#kaynaklar'?'kaynaklar':'genel';
  $('#overview-page').hidden=page!=='genel';
  $('#resources-page').hidden=page!=='kaynaklar';
  $('#page-title').textContent=page==='genel'?'Genel bakış':'Kaynaklar';
  document.querySelectorAll('[data-page]').forEach(link=>{
    const current=link.dataset.page===page;
    link.classList.toggle('active',current);
    if(current)link.setAttribute('aria-current','page');else link.removeAttribute('aria-current');
  });
}

document.addEventListener('DOMContentLoaded',()=>{
  $('#subject-cards').addEventListener('click',event=>{
    const hide=event.target.closest('[data-hide-subject]');
    if(hide){hiddenSubjects.add(hide.dataset.hideSubject);persist();$('#hidden-subjects').open=true;renderAll();return}
    const remove=event.target.closest('[data-remove-choice]');
    if(remove){saved.delete(Number(remove.dataset.removeChoice));persist();renderAll();return}
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
    if(pick){const id=Number(pick.dataset.toggleSave);if(saved.has(id))saved.delete(id);else saved.add(id);persist();renderAll();return}
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
  $('#theme-toggle').addEventListener('click',()=>{const current=document.documentElement.dataset.tema||(matchMedia('(prefers-color-scheme: dark)').matches?'koyu':'acik');const next=current==='koyu'?'acik':'koyu';document.documentElement.dataset.tema=next;try{localStorage.setItem('tyt_tema',next)}catch{}});
  window.addEventListener('hashchange',showPage);
  renderAll();showPage();
});
