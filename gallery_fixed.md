
---
layout: default
title: Gallery
---

# GALLERY

## Name
<div class="gallery">
{% for file in site.static_files %}
  {% if file.path contains 'assets/name/' and (file.extname == '.jpg' or file.extname == '.jpeg') %}
    <div class="item">
      <img src="{{ file.path }}" alt="{{ file.name | split: '.' | first }}">
      <div class="title">{{ file.name | split: '.' | first }}</div>
    </div>
  {% endif %}
{% endfor %}
</div>

## Original
<div class="gallery">
{% for file in site.static_files %}
  {% if file.path contains 'assets/original/' and (file.extname == '.jpg' or file.extname == '.jpeg') %}
    <div class="item">
      <img src="{{ file.path }}" alt="{{ file.name | split: '.' | first }}">
      <div class="title">{{ file.name | split: '.' | first }}</div>
    </div>
  {% endif %}
{% endfor %}
</div>

## PAPICCI
<div class="gallery">
{% for file in site.static_files %}
  {% if file.path contains 'assets/papicci/' and (file.extname == '.jpg' or file.extname == '.jpeg') %}
    <div class="item">
      <img src="{{ file.path }}" alt="{{ file.name | split: '.' | first }}">
      <div class="title">{{ file.name | split: '.' | first }}</div>
    </div>
  {% endif %}
{% endfor %}
</div>

## Collaboration
<div class="gallery">
{% for file in site.static_files %}
  {% if file.path contains 'assets/collaboration/' and (file.extname == '.jpg' or file.extname == '.jpeg') %}
    <div class="item">
      <img src="{{ file.path }}" alt="{{ file.name | split: '.' | first }}">
      <div class="title">{{ file.name | split: '.' | first }}</div>
    </div>
  {% endif %}
{% endfor %}
</div>
