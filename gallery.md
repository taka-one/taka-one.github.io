
---
layout: default
title: Gallery
---

<h1>Gallery</h1>
<nav>
  <a href="index.html">Home</a> | <a href="about.html">About</a>
</nav>

<h2>Original</h2>
{% assign original_files = site.static_files | where: "path", "/assets/original/" %}
{% for file in original_files %}
  <div class="gallery-item">
    <img src="{{ file.path }}" alt="{{ file.name }}" class="gallery-image">
    <p>{{ file.name }}</p>
  </div>
{% endfor %}

<h2>Name</h2>
{% assign name_files = site.static_files | where: "path", "/assets/name/" %}
{% for file in name_files %}
  <div class="gallery-item">
    <img src="{{ file.path }}" alt="{{ file.name }}" class="gallery-image">
    <p>{{ file.name }}</p>
  </div>
{% endfor %}

<h2>PAPICCI</h2>
{% assign papicci_files = site.static_files | where: "path", "/assets/papicci/" %}
{% for file in papicci_files %}
  <div class="gallery-item">
    <img src="{{ file.path }}" alt="{{ file.name }}" class="gallery-image">
    <p>{{ file.name }}</p>
  </div>
{% endfor %}

<h2>Collaboration</h2>
{% assign collab_files = site.static_files | where: "path", "/assets/collaboration/" %}
{% for file in collab_files %}
  <div class="gallery-item">
    <img src="{{ file.path }}" alt="{{ file.name }}" class="gallery-image">
    <p>{{ file.name }}</p>
  </div>
{% endfor %}
