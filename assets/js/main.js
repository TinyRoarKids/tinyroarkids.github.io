// Tiny Roar Studio – minimal JS: mobile menu + click-to-load YouTube (privacy-enhanced, nothing loads until a parent clicks).
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('.nav-toggle'), nav = document.querySelector('.nav');
  if (btn && nav) btn.addEventListener('click', () => { const open = nav.classList.toggle('open'); btn.setAttribute('aria-expanded', open); });

  // <a class="video" data-youtube-id="VIDEO_ID" href="channel link">: with an id, clicking swaps in a youtube-nocookie player;
  // without an id (video not published yet) the link simply opens the YouTube channel.
  document.querySelectorAll('.video[data-youtube-id]').forEach(el => {
    const id = el.dataset.youtubeId.trim(); if (!id) return;
    el.addEventListener('click', e => {
      e.preventDefault();
      const f = document.createElement('iframe');
      f.src = `https://www.youtube-nocookie.com/embed/${encodeURIComponent(id)}?autoplay=1&rel=0`;
      f.title = el.getAttribute('aria-label') || 'Video'; f.allow = 'autoplay; encrypted-media; picture-in-picture'; f.allowFullscreen = true;
      el.replaceChildren(f);
    });
  });
});
