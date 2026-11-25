// Builds the static pages of the Tiny Roar Studio website (shared header/footer). Copy from docs/TESTI_SITO.md (approved).
// Usage: node _build/genera_pagine.js   → writes index.html, characters.html, parents.html, contact.html, privacy.html, 404.html
const fs = require('fs'), path = require('path');
const SITE = path.resolve(__dirname, '..');
const YT_CHANNEL = 'https://www.youtube.com/@leoandthedinos';
const EP001_YOUTUBE_ID = ''; // ← paste the YouTube video id of EP001 here once it is published (then rerun this script)
const EMAIL = 'info@tinyroarkids.com';
const TITLE = 'Tiny Roar Studio – Leo and the Dinos';
const DESC = 'Calm dinosaur stories for kids aged 3–8. Leo the T-Rex and his dino friends learn colors, numbers and friendship in a little world of blocks.';
const BASE = 'https://tinyroarkids.com/';

const toy = t => `<span class="toy">${[...t].map((c, i) => c === ' ' ? ' ' : `<span class="c${(i % 7) + 1}">${c}</span>`).join('')}</span>`;
const NAV = [['index.html', 'Home'], ['characters.html', 'Meet the Dinos'], ['parents.html', 'For Parents'], ['contact.html', 'Contact']];
const page = (file, title, body, desc = DESC) => `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${title}</title>
<meta name="description" content="${desc}">
<meta property="og:title" content="${title}">
<meta property="og:description" content="${desc}">
<link rel="canonical" href="${BASE}${file === 'index.html' ? '' : file}">
<meta property="og:url" content="${BASE}${file === 'index.html' ? '' : file}">
<meta property="og:image" content="${BASE}assets/img/og_image.jpg">
<meta property="og:type" content="website">
<meta name="theme-color" content="#4A2A6B">
<link rel="icon" href="assets/img/icon-32.png" sizes="32x32">
<link rel="apple-touch-icon" href="assets/img/icon-192.png">
<link rel="preload" href="assets/fonts/Fredoka.ttf" as="font" type="font/ttf" crossorigin>
<link rel="stylesheet" href="assets/css/style.css">
<script src="assets/js/main.js" defer></script>
</head>
<body>
<a class="skip" href="#main">Skip to content</a>
<header class="site-header">
  <div class="wrap">
    <a class="brand" href="index.html" aria-label="Tiny Roar Studio – home"><picture><source srcset="assets/img/logo.webp" type="image/webp"><img src="assets/img/logo.png" alt="Tiny Roar Studio" width="640" height="288"></picture></a>
    <button class="nav-toggle" aria-expanded="false" aria-controls="nav">Menu</button>
    <nav class="nav" id="nav" aria-label="Main"><ul>
      ${NAV.map(([h, l]) => `<li><a href="${h}"${h === file ? ' aria-current="page"' : ''}>${l}</a></li>`).join('\n      ')}
    </ul></nav>
  </div>
</header>
<main id="main">
${body}
</main>
<footer class="site-footer">
  <div class="wrap">
    <img src="assets/img/logo.webp" alt="" width="640" height="288" loading="lazy">
    <p>© 2026 Tiny Roar Studio · <a href="mailto:${EMAIL}">${EMAIL}</a> · <a href="privacy.html">Privacy</a></p>
    <p>Made with care, reviewed by people.</p>
  </div>
</footer>
</body>
</html>
`;

const CARDS = [['🔢', 'var(--yellow)', 'Numbers & colors', 'Counting blocks, mixing colors, spotting shapes.'], ['💛', 'var(--pink)', 'Feelings', 'Naming emotions like anger, fear and joy, and learning what helps.'],
  ['🤝', 'var(--green)', 'Kindness', 'Sharing, saying please and thank you, helping a friend.'], ['🪥', 'var(--sky)', 'Healthy habits', 'Brushing teeth, eating fruit, going to bed on time.']];
const video = `<a class="video" href="${YT_CHANNEL}" data-youtube-id="${EP001_YOUTUBE_ID}" aria-label="Leo and the Night Bus – watch on YouTube" target="_blank" rel="noopener">
      <img src="assets/img/ep001_thumb.webp" alt="Leo and the Night Bus: Grandma Rose's pink bus arrives at the village stop" width="1280" height="720" loading="lazy"><span class="play" aria-hidden="true"></span></a>`;

const index = page('index.html', TITLE, `
<section class="hero">
  <div class="wrap"><div class="hero-box">
    <img class="series" src="assets/img/logo_leo_and_the_dinos.webp" alt="Leo and the Dinos" width="900" height="225">
    <h1>${toy('Big hearts.')}<br>${toy('Tiny roars.')}</h1>
    <p>Gentle animated adventures for children aged 3 to 8, starring Leo the T-rex and his dinosaur friends.</p>
    <a class="btn btn-yt" href="${YT_CHANNEL}" target="_blank" rel="noopener">Watch on YouTube</a>
  </div></div>
</section>
<section class="section">
  <div class="wrap split">
    <div><h2>A world where everyone is a friend</h2>
      <p class="lead">In Leo's colorful world made of blocks, dinosaurs of every kind live side by side. Big or small, fast or slow, they never chase, scare or eat each other. When something goes wrong, they work it out together.</p>
      <a class="btn btn-soft" href="characters.html">Meet the Dinos</a></div>
    <div class="frame"><img class="loop-anim" src="assets/img/loops/friendship_tree.webp" alt="Leo and his friends hug under the glowing Friendship Tree" width="720" height="402" loading="lazy">
      <img class="loop-still" style="display:none" src="assets/img/meet_the_dinos.webp" alt="" loading="lazy"></div>
  </div>
</section>
<section class="section alt">
  <div class="wrap center"><h2>What little ones learn</h2>
    <div class="grid grid-4" style="text-align:left;margin-top:28px">
      ${CARDS.map(([e, c, h, t]) => `<div class="card"><div class="dot" style="background:${c}" aria-hidden="true">${e}</div><h3>${h}</h3><p>${t}</p></div>`).join('\n      ')}
    </div>
  </div>
</section>
<section class="section">
  <div class="wrap split">
    <div>${video}</div>
    <div><h2>Latest adventure</h2><h3>Leo and the Night Bus</h3>
      <p class="lead">When the night feels big, Leo learns a balloon breath and finds out that helping friends makes scared feel small.</p>
      <a class="btn btn-yt" href="${YT_CHANNEL}" target="_blank" rel="noopener">Watch on YouTube</a></div>
  </div>
</section>
<section class="section night">
  <div class="wrap center"><h2>${toy('Short, calm, safe')}</h2>
    <p class="lead">Our stories are short, calm and free from scary scenes, so they fit naturally into a busy family day.</p>
    <a href="parents.html">Read our promises to parents →</a></div>
</section>`);

const DINOS = [['leo', 'Leo', 'T-rex', 'The biggest of the group and the softest heart. He is strong, curious and a little afraid of the dark.'],
  ['max', 'Max', 'Velociraptor', 'The fastest dino around. Always in a hurry, slowly learning that some things are worth waiting for.'],
  ['emma', 'Emma', 'Triceratops', 'Brave and protective, a bit stubborn, always the first to stand up for a friend.'],
  ['ben', 'Ben', 'Stegosaurus', 'Slow, calm and funny. He reminds everyone to take a deep breath.'],
  ['ava', 'Ava', 'Brachiosaurus', 'Her long neck lets her see the whole world. Shy, but full of good ideas.'],
  ['sam', 'Sam', 'Ankylosaurus', 'Small and sturdy, he loves building anything out of blocks.'],
  ['zoe', 'Zoe', 'Pteranodon', "She flies high and brings news from far away. (Fun fact: pteranodons aren't dinosaurs, but she's still part of the family!)"],
  ['ollie', 'Ollie', 'Elasmosaurus', 'The chatty friend from the lagoon who tells stories from under the water.'],
  ['grandma_rose', 'Grandma Rose', 'Parasaurolophus', 'Kind and wise, she plays music with her crest and always knows what to say.']];
const characters = page('characters.html', 'Meet the Dinos – Tiny Roar Studio', `
<section class="section">
  <div class="wrap center"><h1>${toy('Meet Leo and his friends')}</h1>
    <p class="lead">Nine friends, nine different talents, one big group that always sticks together.</p>
    <div class="frame" style="margin-top:28px"><img src="assets/img/meet_the_dinos.webp" alt="All nine friends: Leo, Max, Emma, Ben, Ava, Sam, Zoe, Ollie and Grandma Rose" width="1600" height="900"></div>
  </div>
</section>
<section class="section alt">
  <div class="wrap">
    ${DINOS.map(([k, n, s, t]) => `<article class="dino" id="${k}">
      <img src="assets/img/dinos/${k}.webp" alt="${n} the ${s}" width="560" height="700" loading="lazy">
      <div><span class="species">${s}</span><h2>${n}</h2><p class="lead">${t}</p></div>
    </article>`).join('\n    ')}
  </div>
</section>`, 'Meet Leo the T-rex and his dinosaur friends: Max, Emma, Ben, Ava, Sam, Zoe, Ollie and Grandma Rose.');

const parents = page('parents.html', 'For Parents – Tiny Roar Studio', `
<section class="section">
  <div class="wrap"><h1>${toy('For parents and teachers')}</h1>
    <p class="lead">We make the kind of videos we'd happily watch next to our own children.</p></div>
</section>
<section class="section alt">
  <div class="wrap split">
    <div><h2>Our promises</h2><ul class="promises">
      <li>No scary or violent scenes. No villains.</li><li>No products, toys or brands to sell.</li>
      <li>Calm pacing, clear voices, big readable subtitles.</li><li>Every story has something gentle to learn.</li>
      <li>We never ask children to comment, subscribe or share.</li><li>Our videos are set as "made for kids" on YouTube.</li></ul></div>
    <div class="frame"><img class="loop-anim" src="assets/img/loops/night_bus.webp" alt="Grandma Rose drives the pink night bus, everyone wears a seatbelt" width="720" height="402" loading="lazy">
      <img class="loop-still" style="display:none" src="assets/img/ep001_thumb.webp" alt="" loading="lazy"></div>
  </div>
</section>
<section class="section">
  <div class="wrap split">
    <div><h2>How we make our stories</h2><p class="lead">Every episode starts with an idea and a lesson chosen by our team. We use AI tools to help draw and animate our world, and every story is written, checked and approved by people before it is published.</p></div>
    <div class="card"><h2>Use in classrooms</h2><p>Teachers are welcome to use our videos in class. Write to us for themed playlists.</p>
      <a class="btn btn-soft" href="mailto:${EMAIL}">${EMAIL}</a></div>
  </div>
</section>`);

const contact = page('contact.html', 'Contact – Tiny Roar Studio', `
<section class="section">
  <div class="wrap split">
    <div><h1>${toy('Say hello')}</h1><p class="lead">Questions, ideas or feedback from parents and teachers are always welcome.</p>
      <a class="btn btn-soft" href="mailto:${EMAIL}">${EMAIL}</a></div>
    <div class="frame"><img class="loop-anim" src="assets/img/loops/building_blocks.webp" alt="Leo and Sam build a tower of soft blocks" width="720" height="402" loading="lazy">
      <img class="loop-still" style="display:none" src="assets/img/dinos/meet_leo.webp" alt="" loading="lazy"></div>
  </div>
</section>`);

const privacy = page('privacy.html', 'Privacy – Tiny Roar Studio', `
<section class="section">
  <div class="wrap"><h1>Privacy</h1>
    <p class="lead">This website does not use profiling or advertising cookies and does not collect personal data from visitors. Videos are embedded in YouTube's privacy-enhanced mode and load only when you click play. If you write to us by email, we use your address only to reply.</p>
    <p>The website is hosted on GitHub Pages. Like every web server, GitHub may log visitors' IP addresses for security reasons. See the <a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement" rel="noopener">GitHub Privacy Statement</a>.</p>
    <p>Data controller: Tiny Roar Studio – <a href="mailto:${EMAIL}">${EMAIL}</a></p>
  </div>
</section>`);

const notFound = page('404.html', 'Page not found – Tiny Roar Studio', `
<section class="section">
  <div class="wrap center"><h1>${toy('Oops! Max ran too fast.')}</h1>
    <p class="lead">This page doesn't exist. Let's go back home.</p>
    <a class="btn btn-soft" href="index.html">Back to home</a></div>
</section>`);

for (const [f, html] of [['index.html', index], ['characters.html', characters], ['parents.html', parents], ['contact.html', contact], ['privacy.html', privacy], ['404.html', notFound]]) {
  fs.writeFileSync(path.join(SITE, f), html); console.log('OK', f);
}
const today = new Date().toISOString().slice(0, 10);
const urls = ['', 'characters.html', 'parents.html', 'contact.html', 'privacy.html'];
fs.writeFileSync(path.join(SITE, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => `  <url><loc>${BASE}${u}</loc><lastmod>${today}</lastmod></url>`).join('\n')}
</urlset>
`);
fs.writeFileSync(path.join(SITE, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${BASE}sitemap.xml\n`);
console.log('OK sitemap.xml, robots.txt');
