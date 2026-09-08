---
layout: page
permalink: /contact/
title: contact
nav: true
nav_order: 4
---

<div class="row row-cols-1 row-cols-md-3">
  <div class="col mb-4">
    <div class="card h-100 z-depth-0">
      <div class="card-body">
        <h5 class="card-title">Email</h5>
        <p class="card-text"><a href="mailto:{{ site.email | encode_email }}">{{ site.email }}</a></p>
      </div>
    </div>
  </div>
  <div class="col mb-4">
    <div class="card h-100 z-depth-0">
      <div class="card-body">
        <h5 class="card-title">AIDE Lab</h5>
        <p class="card-text">Co-Director, Applied International Development Economics Lab</p>
        <p class="card-text"><a href="https://aidelab.arizona.edu/" target="_blank" rel="noopener">aidelab.arizona.edu &rarr;</a></p>
      </div>
    </div>
  </div>
  <div class="col mb-4">
    <div class="card h-100 z-depth-0">
      <div class="card-body">
        <h5 class="card-title">Department</h5>
        <p class="card-text"><a href="https://cals.arizona.edu/arec/faculty/anna-josephson" target="_blank" rel="noopener">Faculty Profile &rarr;</a></p>
      </div>
    </div>
  </div>
</div>

## find me here

<div class="social">
  <div class="contact-icons">
    {% include social.html %}
  </div>
</div>
