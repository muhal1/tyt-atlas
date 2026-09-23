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
const subjects=[...new Set(kaynaklar.map(item=>item.ders))];
let resourceType='all';
const cloudConfig=window.TYT_ATLAS_SUPABASE||{};
let cloudClient=null;
let cloudUser=null;
let userProfile=null;
let authReady=false;
let cloudLoading=false;
let cloudSaveTimer=null;
let pageBeforeLogin='#genel';

function persistLocal(){
  try{
    localStorage.setItem('tyt_kaydedilen',JSON.stringify([...saved]));
    localStorage.setItem('tyt_tamamlanan',JSON.stringify([...done]));
    localStorage.setItem('tyt_gizlenen_dersler',JSON.stringify([...hiddenSubjects]));
    return true;
  }catch{return false}
}

function setCloudStatus(label,state=''){
  const labelEl=$('#cloud-label');
  const dot=$('#cloud-dot');
  if(labelEl)labelEl.textContent=label;
  if(dot)dot.dataset.state=state;
}

function updateAccountUI(){
  const signedIn=Boolean(cloudUser);
  document.body.classList.toggle('auth-locked',!signedIn);
  $('#signed-out-panel').hidden=signedIn;
  $('#signed-in-panel').hidden=!signedIn;
  document.querySelectorAll('[data-page]:not([data-page="giris"])').forEach(link=>{link.hidden=!signedIn});
  if(signedIn){
    $('#profile-name').value=userProfile?.display_name||defaultDisplayName(cloudUser);
    $('#profile-email').value=cloudUser.email||'';
  }
  if(!cloudClient)setCloudStatus('Kurulum bekliyor','warning');
  else if(signedIn)setCloudStatus('Düzenleme açık','online');
  else setCloudStatus('Giriş yap','');
}

function defaultDisplayName(user){
  const metadataName=typeof user?.user_metadata?.display_name==='string'?user.user_metadata.display_name.trim():'';
  if(metadataName.length>=2)return metadataName.slice(0,60);
  const raw=(user?.email||'').split('@')[0].replace(/[._-]+/g,' ').trim();
  return (raw.length>=2?raw:'Kullanıcı').slice(0,60);
}

async function loadUserProfile(){
  userProfile=null;
  if(!cloudClient||!cloudUser)return;
  const {data,error}=await cloudClient.from('profiles').select('display_name').eq('id',cloudUser.id).maybeSingle();
  if(error){console.error('Profil yüklenemedi:',error);return}
  if(data){userProfile=data;return}
  const profile={id:cloudUser.id,display_name:defaultDisplayName(cloudUser),updated_at:new Date().toISOString()};
  const {error:insertError}=await cloudClient.from('profiles').insert(profile);
  if(insertError){console.error('Profil oluşturulamadı:',insertError);return}
  userProfile={display_name:profile.display_name};
}

function requireEditor(){
  if(!cloudClient)return true;
  if(cloudUser)return true;
  if(location.hash!=='#giris')pageBeforeLogin=location.hash||'#genel';
  location.hash='#giris';
  return false;
}

function replaceSet(target,values,convert=value=>value){
  target.clear();
  if(Array.isArray(values))for(const value of values)target.add(convert(value));
}

function applySharedState(row){
  cloudLoading=true;
  replaceSet(saved,(row.saved||[]).filter(id=>Number(id)!==2),Number);
  replaceSet(done,(row.done||[]).filter(id=>Number(id)!==2),Number);
  replaceSet(hiddenSubjects,row.hidden_subjects,String);
  persistLocal();
  renderAll();renderSchedule();
  cloudLoading=false;
}

function sharedPayload(){
  return {
    id:'main',
    saved:[...saved],
    done:[...done],
    hidden_subjects:[...hiddenSubjects],
    updated_at:new Date().toISOString(),
    updated_by:cloudUser.id
  };
}

async function saveSharedState(){
  if(!cloudClient||!cloudUser||cloudLoading)return;
  setCloudStatus('Kaydediliyor…','syncing');
  const {error}=await cloudClient.from('panel_state').upsert(sharedPayload(),{onConflict:'id'});
  if(error){
    console.error('Ortak pano kaydedilemedi:',error);
    setCloudStatus('Senkron hatası','error');
    return;
  }
  setCloudStatus('Düzenleme açık','online');
}

function queueCloudSave(){
  if(!cloudClient||!cloudUser||cloudLoading)return;
  clearTimeout(cloudSaveTimer);
  cloudSaveTimer=setTimeout(saveSharedState,250);
}

function persist(){
  persistLocal();
  queueCloudSave();
}

async function loadSharedState(seedWhenMissing=false){
  if(!cloudClient||!cloudUser)return;
  setCloudStatus('Yükleniyor…','syncing');
  const {data,error}=await cloudClient.from('panel_state').select('saved,done,hidden_subjects,updated_at').eq('id','main').maybeSingle();
  if(error){
    console.error('Ortak pano yüklenemedi:',error);
    setCloudStatus('Bağlantı hatası','error');
    return;
  }
  if(data)applySharedState(data);
  else if(seedWhenMissing&&cloudUser)await saveSharedState();
  setCloudStatus(cloudUser?'Düzenleme açık':'Ortak pano','online');
}

async function initCloud(){
  const configured=typeof cloudConfig.url==='string'&&cloudConfig.url.startsWith('https://')
    &&typeof cloudConfig.publishableKey==='string'&&cloudConfig.publishableKey.length>20;
  if(!configured||!window.supabase){
    authReady=true;
    updateAccountUI();
    showPage();
    return;
  }
  cloudClient=window.supabase.createClient(cloudConfig.url,cloudConfig.publishableKey);
  const {data:{session}}=await cloudClient.auth.getSession();
  cloudUser=session?.user||null;
  if(cloudUser)await loadUserProfile();
  authReady=true;
  updateAccountUI();
  showPage();
  if(cloudUser)await loadSharedState(true);
  cloudClient.auth.onAuthStateChange((_event,nextSession)=>{
    cloudUser=nextSession?.user||null;
    userProfile=null;
    setTimeout(async()=>{
      if(cloudUser){await loadUserProfile();await loadSharedState(true)}
      updateAccountUI();
      showPage();
    },0);
  });
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

function renderSchedule(){
  const fallback=kaynaklar.find(item=>item.ders==='Fizik'&&item.yayinci==='VIP Fizik'&&item.tur==='video');
  const selected=kaynaklar.find(item=>item.ders==='Fizik'&&item.tur==='video'&&saved.has(item.id));
  const source=selected||fallback;
  const physicsName=source?source.yayinci+' · '+source.ad:'Seçtiğin fizik kampı';
  const cell=(tag,title,detail,className='')=>`<td class="${className}"><span class="lesson-tag ${tag}">${tag==='practice'?'Uygulama':tag==='review'?'Tekrar':tag==='paragraph'?'Paragraf':tag==='math'?'Matematik':tag==='physics'?'Fizik':tag==='school'?'Okul':tag==='rest'?'Serbest':'Problem'}</span><strong>${title}</strong><small${tag==='physics'?' class="schedule-physics-name"':''}>${detail}</small></td>`;
  const morning=cell('math','10 paragraf + temel kamp','Süre tut, ardından 1 ders');
  const evening=cell('problem','Problem + tekrar','2 saatlik akşam çalışması');
  const school=cell('school','13:30 evden çıkış','19:30 eve dönüş');
  $('#weekly-plan').innerHTML=`
    <table class="weekly-plan weekday-plan">
      <thead><tr><th scope="col">Saat</th><th scope="col">Pazartesi</th><th scope="col">Salı</th><th scope="col">Çarşamba</th><th scope="col">Perşembe</th><th scope="col">Cuma</th></tr></thead>
      <tbody>
        <tr><th scope="row"><strong>09:00–10:45</strong><small>Sabah · 1. blok</small></th>${morning.repeat(5)}</tr>
        <tr><th scope="row"><strong>11:15–13:00</strong><small>Sabah · 2. blok</small></th>
          ${cell('practice','15 temel matematik','Sabahki konudan')}
          ${cell('physics','1 ders videosu',physicsName)}
          ${cell('practice','15 temel matematik','Yanlışları düzelt')}
          ${cell('physics','1 ders videosu',physicsName)}
          ${cell('practice','15 temel matematik','Haftalık eksikleri gör')}
        </tr>
        <tr class="school-row"><th scope="row"><strong>13:30–19:30</strong><small>Gün ortası</small></th>${school.repeat(5)}</tr>
        <tr><th scope="row"><strong>20:00–22:00</strong><small>Akşam çalışması</small></th>${evening.repeat(5)}</tr>
        <tr class="wind-down-row"><th scope="row"><strong>22:00–00:00</strong><small>Kapanış</small></th><td colspan="5"><strong>Ders bitti.</strong> Kalan zaman dinlenme ve uykuya hazırlık. <b>00:00'da uyku.</b></td></tr>
      </tbody>
    </table>
    <div class="weekend-plan-heading"><strong>Hafta sonu programı</strong><small>Cumartesi ve pazar · 3 × 2 saat</small></div>
    <table class="weekly-plan weekend-plan">
      <thead><tr><th scope="col">Saat</th><th scope="col" class="weekend">Cumartesi</th><th scope="col" class="weekend">Pazar</th></tr></thead>
      <tbody>
        <tr><th scope="row"><strong>09:00–11:00</strong><small>1. blok</small></th>${cell('math','10 paragraf + temel kamp','Video, kısa not ve temel soru','weekend')}${cell('review','10 paragraf + haftalık tekrar','Yanlışları gözden geçir','weekend')}</tr>
        <tr><th scope="row"><strong>12:00–14:00</strong><small>2. blok</small></th>${cell('physics','Fizik + soru çözümü',physicsName,'weekend')}${cell('math','Eksik ders + temel soru','Haftanın açığını kapat','weekend')}</tr>
        <tr><th scope="row"><strong>16:00–18:00</strong><small>3. blok</small></th>${cell('problem','Problem + yanlış analizi','Süre tut, yanlışları ayır','weekend')}${cell('review','Genel tekrar + planlama','Yeni haftayı hazırla','weekend')}</tr>
      </tbody>
    </table>`;
  $('#physics-priority-name').textContent=physicsName;
  const link=$('#physics-plan-source');
  link.querySelector('strong').textContent=physicsName;
  if(source&&source.url){link.href=source.url;link.removeAttribute('aria-disabled')}
  else{link.removeAttribute('href');link.setAttribute('aria-disabled','true')}
}

function showPage(){
  let page=location.hash==='#program'?'program':location.hash==='#kaynaklar'?'kaynaklar':location.hash==='#giris'?'giris':'genel';
  if(!authReady||!cloudUser){
    page='giris';
    if(authReady&&location.hash!=='#giris')history.replaceState(null,'','#giris');
  }
  $('#overview-page').hidden=page!=='genel';
  $('#schedule-page').hidden=page!=='program';
  $('#resources-page').hidden=page!=='kaynaklar';
  $('#login-page').hidden=page!=='giris';
  $('#page-title').textContent={genel:'Genel bakış',program:'Çalışma Programı',kaynaklar:'Kaynaklar',giris:cloudUser?'Profil':'Giriş yap'}[page];
  document.querySelectorAll('[data-page]').forEach(link=>{
    const current=link.dataset.page===page;
    link.classList.toggle('active',current);
    if(current)link.setAttribute('aria-current','page');else link.removeAttribute('aria-current');
  });
}

document.addEventListener('DOMContentLoaded',()=>{
  persistLocal(); // Kaldırılan kaynağın eski tarayıcı işaretlerini temizle.
  $('#subject-cards').addEventListener('click',event=>{
    const hide=event.target.closest('[data-hide-subject]');
    if(hide){if(!requireEditor())return;hiddenSubjects.add(hide.dataset.hideSubject);persist();$('#hidden-subjects').open=true;renderAll();return}
    const remove=event.target.closest('[data-remove-choice]');
    if(remove){if(!requireEditor())return;saved.delete(Number(remove.dataset.removeChoice));persist();renderAll();renderSchedule();return}
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
    if(!requireEditor())return;
    hiddenSubjects.delete(restore.dataset.restoreSubject);persist();renderAll();
  });
  $('#resource-rows').addEventListener('click',event=>{
    const pick=event.target.closest('[data-toggle-save]');
    if(pick){if(!requireEditor())return;const id=Number(pick.dataset.toggleSave);if(saved.has(id))saved.delete(id);else saved.add(id);persist();renderAll();renderSchedule();return}
    const complete=event.target.closest('[data-toggle-done]');
    if(complete){if(!requireEditor())return;const id=Number(complete.dataset.toggleDone);if(done.has(id))done.delete(id);else done.add(id);persist();renderAll()}
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
  $('#cloud-account').addEventListener('click',()=>{pageBeforeLogin=location.hash||'#genel';location.hash='#giris'});
  const switchAuthTab=signup=>{
    $('#login-tab').classList.toggle('active',!signup);
    $('#signup-tab').classList.toggle('active',signup);
    $('#login-tab').setAttribute('aria-selected',String(!signup));
    $('#signup-tab').setAttribute('aria-selected',String(signup));
    $('#login-form').hidden=signup;
    $('#signup-form').hidden=!signup;
  };
  $('#login-tab').addEventListener('click',()=>switchAuthTab(false));
  $('#signup-tab').addEventListener('click',()=>switchAuthTab(true));
  $('#login-form').addEventListener('submit',async event=>{
    event.preventDefault();
    const error=$('#login-error');error.hidden=true;
    if(!cloudClient){
      error.textContent='Bulut bağlantısı henüz yapılandırılmadı.';error.hidden=false;return;
    }
    const submit=event.currentTarget.querySelector('button[type="submit"]');submit.disabled=true;
    const {data:signInData,error:signInError}=await cloudClient.auth.signInWithPassword({
      email:$('#login-email').value.trim(),
      password:$('#login-password').value
    });
    submit.disabled=false;
    if(signInError){error.textContent='Giriş başarısız. E-posta veya şifreyi kontrol et.';error.hidden=false;return}
    cloudUser=signInData.user;
    await loadUserProfile();
    await loadSharedState(true);
    updateAccountUI();
    event.currentTarget.reset();
    location.hash=pageBeforeLogin==='#giris'?'#genel':pageBeforeLogin;
  });
  $('#signup-form').addEventListener('submit',async event=>{
    event.preventDefault();
    const error=$('#signup-error');
    const status=$('#signup-status');
    error.hidden=true;status.hidden=true;
    if(!cloudClient){error.textContent='Bağlantı kurulamadı.';error.hidden=false;return}
    const displayName=$('#signup-name').value.trim();
    const password=$('#signup-password').value;
    if(displayName.length<2){error.textContent='Ad en az 2 karakter olmalı.';error.hidden=false;return}
    if(password.length<8){error.textContent='Şifre en az 8 karakter olmalı.';error.hidden=false;return}
    const submit=event.currentTarget.querySelector('button[type="submit"]');submit.disabled=true;
    const {data:signupData,error:signupError}=await cloudClient.auth.signUp({
      email:$('#signup-email').value.trim(),
      password,
      options:{
        data:{display_name:displayName},
        emailRedirectTo:window.location.origin+window.location.pathname
      }
    });
    submit.disabled=false;
    if(signupError){
      error.textContent=signupError.code==='over_email_send_rate_limit'?'Bir süre sonra tekrar dene.':'Kayıt oluşturulamadı.';
      error.hidden=false;return;
    }
    event.currentTarget.reset();
    if(!signupData.session){status.textContent='E-postana gelen bağlantıyı aç.';status.hidden=false;return}
    cloudUser=signupData.user;
    await loadUserProfile();
    await loadSharedState(true);
    updateAccountUI();
    location.hash='#genel';
  });
  $('#profile-form').addEventListener('submit',async event=>{
    event.preventDefault();
    const error=$('#profile-error');
    const status=$('#profile-status');
    error.hidden=true;status.hidden=true;
    const displayName=$('#profile-name').value.trim();
    if(displayName.length<2||displayName.length>60){error.textContent='Görünen ad 2–60 karakter olmalı.';error.hidden=false;return}
    const submit=event.currentTarget.querySelector('button[type="submit"]');submit.disabled=true;
    const {error:profileError}=await cloudClient.from('profiles').upsert({id:cloudUser.id,display_name:displayName,updated_at:new Date().toISOString()},{onConflict:'id'});
    submit.disabled=false;
    if(profileError){error.textContent='Profil kaydedilemedi. Lütfen tekrar dene.';error.hidden=false;return}
    userProfile={display_name:displayName};
    updateAccountUI();
    status.textContent='Profil kaydedildi.';status.hidden=false;
  });
  $('#logout-button').addEventListener('click',async()=>{
    if(cloudClient)await cloudClient.auth.signOut();
    location.hash='#giris';
  });
  document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='visible')loadSharedState()});
  const toggleTheme=()=>{const current=document.documentElement.dataset.tema||(matchMedia('(prefers-color-scheme: dark)').matches?'koyu':'acik');const next=current==='koyu'?'acik':'koyu';document.documentElement.dataset.tema=next;try{localStorage.setItem('tyt_tema',next)}catch{}};
  $('#theme-toggle').addEventListener('click',toggleTheme);
  $('#auth-theme-toggle').addEventListener('click',toggleTheme);
  window.addEventListener('hashchange',showPage);
  renderAll();renderSchedule();showPage();
  initCloud();
});
