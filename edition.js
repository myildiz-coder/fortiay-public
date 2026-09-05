(()=>{
 const campaign=document.createElement('aside');
 campaign.className='sonora-campaign';
 campaign.setAttribute('aria-label','SONORA Teknoloji reklamı');
 campaign.innerHTML='<div class="sonora-campaign-meta">REKLAM · SONORA TEKNOLOJİ</div><div class="sonora-campaign-viewport"><a class="sonora-campaign-slide" style="--sonora-slide:0" href="https://sonora.tr/" target="_blank" rel="noopener sponsored" aria-label="Telefonunda sorun mu var? SONORA burada. sonora.tr adresini ziyaret et."><img src="https://www.sonsinyal.com/ads/sonora-burada.png" alt="Telefonunda sorun mu var? SONORA burada. Ekran, batarya ve teknik servis." width="2172" height="724"></a><a class="sonora-campaign-slide" style="--sonora-slide:1" href="https://sonora.tr/" target="_blank" rel="noopener sponsored" aria-label="30 dakikada ekran değişimi için sonora.tr adresini ziyaret et."><img src="https://www.sonsinyal.com/ads/sonora-ekran-degisimi.png" alt="Ekranın kırılsa da, günün bölünmesin. 30 dakikada ekran değişimi." width="2172" height="724"></a><a class="sonora-campaign-slide" style="--sonora-slide:2" href="https://sonora.tr/" target="_blank" rel="noopener sponsored" aria-label="30 dakikada batarya değişimi için sonora.tr adresini ziyaret et."><img src="https://www.sonsinyal.com/ads/sonora-batarya-degisimi.png" alt="Şarjın bitiyor, günün bitmesin. 30 dakikada batarya değişimi." width="2172" height="724"></a></div>';
 const masthead=document.querySelector('header');
 if(masthead) masthead.insertAdjacentElement('afterend',campaign);
 const tabs=[...document.querySelectorAll('.fx-cover-tabs [role="tab"]')];
 function selectTab(tab,focus=false){
  tabs.forEach(t=>{const selected=t===tab;t.setAttribute('aria-selected',String(selected));t.tabIndex=selected?0:-1;});
  const data=tab.dataset;
  const title=document.querySelector('#fx-cover-title a');
  title.textContent=data.title;title.href=data.href;
  document.querySelector('#fx-cover-summary').textContent=data.summary;
  document.querySelector('#fx-cover-topic').textContent=data.topic;
  document.querySelector('#fx-cover-read').href=data.href;
  document.querySelector('#fx-chip-label').textContent=data.glyph;
  document.querySelector('#fx-cover-panel').setAttribute('aria-labelledby',tab.id);
  if(focus){tab.focus();tab.scrollIntoView({block:'nearest',inline:'nearest',behavior:'instant'});}
 }
 tabs.forEach((tab,index)=>{
  tab.addEventListener('click',()=>selectTab(tab));
  tab.addEventListener('keydown',event=>{
   let target;if(event.key==='ArrowRight')target=tabs[(index+1)%tabs.length];if(event.key==='ArrowLeft')target=tabs[(index-1+tabs.length)%tabs.length];if(event.key==='Home')target=tabs[0];if(event.key==='End')target=tabs.at(-1);
   if(target){event.preventDefault();selectTab(target,true);}
  });
 });
 const filters=[...document.querySelectorAll('[data-news-topic]')];
 const stories=[...document.querySelectorAll('[data-news-section]')];
 filters.forEach(button=>button.addEventListener('click',()=>{
  filters.forEach(b=>b.setAttribute('aria-pressed',String(b===button)));
  let count=0;stories.forEach(story=>{const show=button.dataset.newsTopic==='all'||button.dataset.newsTopic===story.dataset.newsSection;story.hidden=!show;if(show)count++;});
  document.querySelector('#fx-news-count').textContent=count+' haber gösteriliyor';
 }));
})();
