(() => {
  const form=document.querySelector('#archive-form');
  if(!form)return;
  const query=form.querySelector('#archive-query');
  const section=form.querySelector('#archive-section');
  const results=document.querySelector('#archive-results');
  const status=document.querySelector('#archive-status');
  const cards=[...results.children];
  const normalize=text=>text.toLocaleLowerCase('tr-TR').normalize('NFD').replace(/[\u0300-\u036f]/g,'');
  let data=[];
  const params=new URLSearchParams(location.search);
  query.value=params.get('q')||'';
  if([...section.options].some(o=>o.value===params.get('bolum')))section.value=params.get('bolum');
  function filter(){
    const terms=normalize(query.value.trim()).split(/\s+/).filter(Boolean);
    let count=0;
    cards.forEach((card,i)=>{
      const text=normalize(card.textContent);
      const visible=terms.every(term=>text.includes(term))&&(section.value==='all'||data[i]?.section===section.value);
      card.hidden=!visible;if(visible)count++;
    });
    status.textContent=count?`${count} içerik bulundu`:'Bu aramada içerik bulunamadı. Başka bir kelime veya bölüm deneyin.';
    const next=new URLSearchParams();
    if(query.value.trim())next.set('q',query.value.trim());
    if(section.value!=='all')next.set('bolum',section.value);
    history.replaceState(null,'',location.pathname+(next.size?'?'+next:''));
  }
  form.addEventListener('submit',event=>{event.preventDefault();filter();});
  query.addEventListener('input',filter);
  section.addEventListener('change',filter);
  fetch('search-index.json').then(response=>{if(!response.ok)throw Error('Arşiv yüklenemedi');return response.json();}).then(items=>{data=items;filter();}).catch(()=>{
    section.disabled=true;section.value='all';filter();
  });
})();
