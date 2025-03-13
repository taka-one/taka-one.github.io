
---
layout: default
title: Gallery
---

<h1>GALLERY</h1>

<h2>Name</h2>
<div class="gallery">
{% for file in site.static_files %}
  {% if file.path contains 'assets/name/' %}
  <div class="item">
    <img src="/{{ file.path }}" alt="{{ file.name | split: '.' | first }}">
    <div class="title">{{ file.name | split: '.' | first }}</div>
  </div>
  {% endif %}
{% endfor %}
</div>

<h2>Original</h2>
<div class="gallery">
{% for file in site.static_files %}
  {% if file.path contains 'assets/original/' %}
  <div class="item">
    <img src="/{{ file.path }}" alt="{{ file.name | split: '.' | first }}">
    <div class="title">{{ file.name | split: '.' | first }}</div>
  </div>
  {% endif %}
{% endfor %}
</div>

<h2>PAPICCI</h2>
<div class="gallery">
{% for file in site.static_files %}
  {% if file.path contains 'assets/papicci/' %}
  <div class="item">
    <img src="/{{ file.path }}" alt="{{ file.name | split: '.' | first }}">
    <div class="title">{{ file.name | split: '.' | first }}</div>
  </div>
  {% endif %}
{% endfor %}
</div>

<h2>Collaboration</h2>
<div class="gallery">
{% for file in site.static_files %}
  {% if file.path contains 'assets/collaboration/' %}
  <div class="item">
    <img src="/{{ file.path }}" alt="{{ file.name | split: '.' | first }}">
    <div class="title">{{ file.name | split: '.' | first }}</div>
  </div>
  {% endif %}
{% endfor %}
</div>
