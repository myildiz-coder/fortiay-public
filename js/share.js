/* FORTIAY — sosyal paylaşım widget'ı
   Her sayfada ve her içerik biriminde (dispatch kartı, rehber/köşe kartı, tam makale)
   X / Instagram / Facebook / LinkedIn / WhatsApp paylaşım ikonları otomatik ekler. */
(function(){
  var ICONS = {
    x: '<path d="M17.53 3H20.6l-6.72 7.68L21.8 21h-6.19l-4.85-6.34L4.2 21H1.13l7.19-8.22L.7 3h6.35l4.38 5.79L17.53 3zm-1.08 16.17h1.7L6.64 4.74H4.82l11.63 14.43z"/>',
    instagram: '<rect x="3.2" y="3.2" width="17.6" height="17.6" rx="5.2" fill="none" stroke="currentColor" stroke-width="1.7"/><circle cx="12" cy="12" r="4.1" fill="none" stroke="currentColor" stroke-width="1.7"/><circle cx="17.4" cy="6.6" r="1.15" fill="currentColor"/>',
    facebook: '<path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.16 8.44 9.94v-7.03H7.9v-2.9h2.54V9.84c0-2.51 1.49-3.9 3.77-3.9 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.9h-2.34V22c4.78-.78 8.44-4.94 8.44-9.94z"/>',
    linkedin: '<path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.24 8.24h4.46V23H.24zM8.02 8.24h4.28v2.02h.06c.6-1.13 2.06-2.33 4.24-2.33 4.53 0 5.37 2.98 5.37 6.85V23h-4.46v-6.36c0-1.52-.03-3.47-2.11-3.47-2.12 0-2.44 1.66-2.44 3.36V23H8.02z" transform="translate(1.5 0)"/>',
    whatsapp: '<path d="M12.02 2C6.5 2 2 6.48 2 12c0 1.87.51 3.62 1.4 5.13L2 22l5.02-1.36A9.96 9.96 0 0 0 12.02 22C17.55 22 22 17.52 22 12S17.55 2 12.02 2zm0 18.13c-1.69 0-3.28-.47-4.63-1.29l-.33-.2-3.06.83.82-3-.22-.31a8.14 8.14 0 0 1-1.24-4.33c0-4.5 3.65-8.15 8.15-8.15s8.15 3.65 8.15 8.15-3.66 8.3-8.15 8.3zm4.48-6.09c-.24-.12-1.44-.71-1.67-.79-.22-.08-.38-.12-.55.12-.16.24-.63.79-.77.95-.14.16-.28.18-.53.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.43-1.34-1.67-.14-.24-.02-.37.11-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.55-1.33-.76-1.82-.2-.48-.4-.42-.55-.42-.14-.01-.3-.01-.46-.01a.9.9 0 0 0-.65.3c-.22.24-.85.83-.85 2.03s.87 2.36 1 2.52c.12.16 1.7 2.6 4.13 3.64.58.25 1.03.4 1.38.51.58.18 1.11.16 1.53.1.47-.07 1.44-.59 1.64-1.15.2-.57.2-1.05.14-1.15-.06-.1-.22-.16-.46-.28z"/>'
  };
  var LABELS = { x:'X\'te paylaş', instagram:'Instagram için kopyala', facebook:'Facebook\'ta paylaş', linkedin:'LinkedIn\'de paylaş', whatsapp:'WhatsApp\'ta paylaş' };

  function shareLinks(url, title){
    var u = encodeURIComponent(url), t = encodeURIComponent(title);
    return {
      x: 'https://twitter.com/intent/tweet?url=' + u + '&text=' + t,
      facebook: 'https://www.facebook.com/sharer/sharer.php?u=' + u,
      linkedin: 'https://www.linkedin.com/sharing/share-offsite/?url=' + u,
      whatsapp: 'https://wa.me/?text=' + t + '%20' + u
    };
  }

  function toast(msg, anchor){
    var el = document.createElement('div');
    el.className = 'share-toast';
    el.textContent = msg;
    document.body.appendChild(el);
    var r = anchor.getBoundingClientRect();
    el.style.left = (r.left + window.scrollX) + 'px';
    el.style.top = (r.top + window.scrollY - 34) + 'px';
    requestAnimationFrame(function(){ el.classList.add('show'); });
    setTimeout(function(){ el.classList.remove('show'); setTimeout(function(){ el.remove(); }, 200); }, 1600);
  }

  function buildShareRow(url, title, opts){
    opts = opts || {};
    var row = document.createElement('div');
    row.className = 'share-row' + (opts.small ? ' share-row-sm' : '') + (opts.page ? ' share-row-page' : '');
    if (opts.withLabel) {
      var lbl = document.createElement('span');
      lbl.className = 'share-label';
      lbl.textContent = opts.withLabel;
      row.appendChild(lbl);
    }
    var links = shareLinks(url, title);
    ['x','instagram','facebook','linkedin','whatsapp'].forEach(function(key){
      var btn = document.createElement('a');
      btn.className = 'share-btn share-' + key;
      btn.setAttribute('aria-label', LABELS[key]);
      btn.title = LABELS[key];
      btn.innerHTML = '<svg viewBox="0 0 24 24" fill="currentColor">' + ICONS[key] + '</svg>';
      if (key === 'instagram') {
        btn.href = '#';
        btn.addEventListener('click', function(e){
          e.preventDefault();
          var text = title + ' — ' + url;
          if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(text).then(function(){
              toast('Bağlantı kopyalandı — Instagram\'da paylaşabilirsiniz', btn);
            }).catch(function(){ toast('Kopyalanamadı', btn); });
          } else {
            toast('Bağlantı: ' + url, btn);
          }
        });
      } else {
        btn.href = links[key];
        btn.target = '_blank';
        btn.rel = 'noopener';
      }
      row.appendChild(btn);
    });
    return row;
  }

  function pageUrl(hash){
    var base = location.origin + location.pathname;
    return hash ? base + '#' + hash : base;
  }

  function initPageShare(){
    var right = document.querySelector('.ticker-bar .ticker-right');
    if (!right || right.querySelector('.share-row')) return;
    var row = buildShareRow(pageUrl(), document.title, {small:true, page:true});
    right.appendChild(row);
  }

  function initDispatchShares(){
    document.querySelectorAll('.dispatch-body').forEach(function(body){
      if (body.querySelector('.share-row')) return;
      var article = body.closest('article');
      var headline = body.querySelector('.dispatch-headline');
      var title = headline ? headline.textContent.trim() : document.title;
      var url = (article && article.id) ? pageUrl(article.id) : pageUrl();
      var row = buildShareRow(url, title, {small:true});
      var source = body.querySelector('.dispatch-source');
      if (source) source.insertAdjacentElement('afterend', row);
      else body.appendChild(row);
    });
  }

  function initCardShares(){
    document.querySelectorAll('.rehber-card').forEach(function(card){
      if (card.querySelector('.share-row')) return;
      var link = card.querySelector('a.go');
      var h3 = card.querySelector('h3');
      var title = h3 ? h3.textContent.trim() : document.title;
      var url = link ? new URL(link.getAttribute('href'), location.href).href : pageUrl();
      var row = buildShareRow(url, title, {small:true});
      if (link) link.insertAdjacentElement('afterend', row);
      else card.appendChild(row);
    });
  }

  function initArticleShare(){
    var dek = document.querySelector('.guide-dek');
    if (!dek || document.querySelector('main .share-row')) return;
    var row = buildShareRow(pageUrl(), document.title, {withLabel:'Bu yazıyı paylaş'});
    dek.insertAdjacentElement('afterend', row);
  }

  function init(){
    initPageShare();
    initDispatchShares();
    initCardShares();
    initArticleShare();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
