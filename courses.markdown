---
layout: page
title: "Courses"
date:   2025-10-15 11:00:00 +0400
---

<div class="home">

  {% if site.paginate %}
    {% assign posts = paginator.posts %}
  {% else %}
    {% assign posts = site.categories.courses %}
  {% endif %}

  {%- if posts.size > 0 -%}
    {%- if page.list_title -%}
      <h2 class="post-list-heading">{{ page.list_title }}</h2>
    {%- endif -%}
    <ul class="post-list">
      {%- assign date_format = site.minima.date_format | default: "%b %-d, %Y" -%}
      {%- for post in posts -%}
      {% unless post.categories contains 'archive' or post.visibility contains 'hidden' %}
      <li>
        <span class="post-meta">{{ post.date | date: date_format }} • {{ post.author }} • 
        {% assign pass = 1 %}
        {% for category in post.categories %}
        {% if category != "courses" %}
            {% if pass == 0 %} | {% endif %}
            {{ category }}
            {% assign pass = 0 %}
        {% endif %}
        {% endfor %}
        </span>
        <h3 style="margin-top: 0;">
          <a class="post-link" href="{{ post.url | relative_url }}">
            {{ post.title | escape }}
          </a>
          <a style="color: red; font-size: 10pt; text-decoration: underline;" href="/tutoring">
            Get personal tutoring...
          </a>
        </h3>
        {%- if site.minima.show_excerpts -%}
          {{ post.excerpt }}
        {%- endif -%}
        <hr style="opacity: 0.1;">
      </li>
      {% endunless %}
      {%- endfor -%}
    </ul>

    {% if site.paginate %}
      <div class="pager">
        <ul class="pagination">
        {%- if paginator.previous_page %}
          <li>
            <a href="{{ paginator.previous_page_path | relative_url }}" class="previous-page" title="Go to Page {{ paginator.previous_page }}">
              {{ paginator.previous_page }}
            </a>
          </li>
        {%- else %}
          <li><div class="pager-edge">•</div></li>
        {%- endif %}
          <li><div class="current-page">{{ paginator.page }}</div></li>
        {%- if paginator.next_page %}
          <li>
            <a href="{{ paginator.next_page_path | relative_url }}" class="next-page" title="Go to Page {{ paginator.next_page }}">
              {{ paginator.next_page }}
            </a>
          </li>
        {%- else %}
          <li><div class="pager-edge">•</div></li>
        {%- endif %}
        </ul>
      </div>
    {%- endif %}
  {%- endif -%}

</div>
