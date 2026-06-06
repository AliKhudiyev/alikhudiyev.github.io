---
layout: page
title: "Random"
date:   2025-10-19 17:15:00 +0400
---

<div class="home">

    <ul class="post-list" id="random-posts">
      <li>
        <h3 style="margin-top: 0;">
          <a class="post-link" target="_blank" href="http://www.catb.org/~esr/jargon/html/story-of-mel.html">
            The Story of Mel
          </a>
        </h3>
        <hr style="opacity: 0.1;">
      </li>

      <li>
        <h3 style="margin-top: 0;">
          <a class="post-link" target="_blank" href="https://phrack.org/issues/7/3">
            Hacker's Manifesto
          </a>
        </h3>
        <hr style="opacity: 0.1;">
      </li>

      <li>
        <h3 style="margin-top: 0;">
          <a class="post-link" target="_blank" href="https://v.cx/2010/04/feynman-brazil-education">
            Richard Feynman on education in Brazil
          </a>
        </h3>
        <hr style="opacity: 0.1;">
      </li>

      <li>
        <h3 style="margin-top: 0;">
          <a class="post-link" target="_blank" href="https://spritely.institute/news/scheme-in-scheme-on-wasm-in-the-browser.html">
            Scheme in Scheme on Wasm in the browser
          </a>
        </h3>
        <hr style="opacity: 0.1;">
      </li>

      <li>
        <h3 style="margin-top: 0;">
          <a class="post-link" target="_blank" href="https://www.smart-words.org/jokes/real-programmers.html">
            Real Programmers &mdash; Do's & Dont's
          </a>
        </h3>
        <hr style="opacity: 0.1;">
      </li>

      <li>
        <h3 style="margin-top: 0;">
          <a class="post-link" target="_blank" href="http://steve-yegge.blogspot.com/2010/12/haskell-researchers-announce-discovery.html">
            Haskell Researchers Announce Discovery of Industry Programmer Who Gives a Shit
          </a>
        </h3>
        <hr style="opacity: 0.1;">
      </li>
    </ul>

</div>

<script>
window.onload = function() {
  const list = document.getElementById('random-posts');
  const items = Array.from(list.children);

  for (let i = items.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [items[i], items[j]] = [items[j], items[i]];
  }

  list.innerHTML = '';
  items.forEach(item => list.appendChild(item));
};
</script>
