---
layout: page
title: "Products"
date: 2025-10-15 11:00:00 +0400
---

<!--
  Products are managed in _includes/products-content.html — edit that file
  to add, update, or remove individual product entries.
-->

{% include projects-styles.html %}

<div class="projects-filters">
  <div class="filter-group">
    <span class="filter-label">Status:</span>
    <button class="filter-btn active" data-filter="status" data-value="all">All</button>
    <button class="filter-btn" data-filter="status" data-value="ongoing">Ongoing</button>
    <button class="filter-btn" data-filter="status" data-value="finished">Finished</button>
  </div>
</div>

{% include products-content.html %}

{% include projects-filter-js.html mode="product" %}
