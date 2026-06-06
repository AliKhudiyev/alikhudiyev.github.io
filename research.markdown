---
layout: page
title: "Research Projects"
date: 2025-10-15 11:00:00 +0400
---

<!--
  Projects are managed in _includes/research-content.html — edit that file
  to add, update, or remove individual research projects.
-->

{% include projects-styles.html %}

<i>If you want to fund one of my research projects, you can <a target="_blank" href="https://buymeacoffee.com/alikhudiyev">buy me a coffee</a>.</i>

<div class="projects-filters">
  <div class="filter-group">
    <span class="filter-label">Status:</span>
    <button class="filter-btn active" data-filter="status" data-value="all">All</button>
    <button class="filter-btn" data-filter="status" data-value="ongoing">Ongoing</button>
    <button class="filter-btn" data-filter="status" data-value="finished">Finished</button>
  </div>
</div>

{% include research-content.html %}

{% include projects-filter-js.html mode="research" %}
