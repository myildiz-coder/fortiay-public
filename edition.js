(()=>{
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
