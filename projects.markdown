---
layout: page
title: "Projects"
date: 2025-10-15 11:00:00 +0400
---

<!--
  Research content  → edit _includes/research-content.html
  Products content  → edit _includes/products-content.html
  Shared styles     → _includes/projects-styles.html
  Filter logic      → _includes/projects-filter-js.html
-->

{% include projects-styles.html %}

<i>If you want to fund one of my research projects, you can <a target="_blank" href="https://buymeacoffee.com/alikhudiyev">buy me a coffee</a>.</i>

<!-- ── Filter bar ─────────────────────────────────────────────────────────── -->
<div class="projects-filters">
  <div class="filter-group">
    <span class="filter-label">Status:</span>
    <button class="filter-btn active" data-filter="status" data-value="all">All</button>
    <button class="filter-btn" data-filter="status" data-value="ongoing">Ongoing</button>
    <button class="filter-btn" data-filter="status" data-value="finished">Finished</button>
  </div>
  <div class="filter-group">
    <span class="filter-label">Type:</span>
    <!-- <button class="filter-btn active" data-filter="category" data-value="all">All</button> -->
    <button class="filter-btn active" data-filter="category" data-value="research">Research</button>
    <button class="filter-btn" data-filter="category" data-value="product">Products</button>
  </div>
</div>

<!-- ── Research section ───────────────────────────────────────────────────── -->
<section id="research-section" class="projects-section">
  <h2 class="projects-section-title">Research</h2>
  {% include research-content.html %}
</section>

<!-- ── Products section ──────────────────────────────────────────────────── -->
<section id="products-section" class="projects-section">
  <h2 class="projects-section-title">Products</h2>
  {% include products-content.html %}
</section>

<!-- ── Filter logic ──────────────────────────────────────────────────────── -->
{% include projects-filter-js.html mode="full" %}
