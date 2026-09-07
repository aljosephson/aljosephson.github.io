---
layout: page
permalink: /publications/
title: publications
description: Book, journal articles, book chapters, and working papers, in reverse chronological order.
years: [2026, 2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2014]
nav: true
nav_order: 1
---
<!-- _pages/publications.md -->
<div class="publications">

<h2>book</h2>
{% bibliography -f papers -q @book %}

<h2>journal articles</h2>
{%- for y in page.years %}
  <h2 class="year">{{ y }}</h2>
  {% bibliography -f papers -q @article[year={{ y }}]* %}
{% endfor %}

<h2>book chapters</h2>
{% bibliography -f papers -q @incollection %}

<h2>papers under review</h2>
<ul class="pub-plain-list">
  <li>
    <strong>Josephson, Anna</strong>, R. Guerra Su, G. Collins, K. Jacobs. <a href="https://arxiv.org/abs/2411.16893" target="_blank" rel="noopener">The Economics of Climate Adaptation: An Assessment</a>.
  </li>
  <li>
    S.J.G. Wetherell, <strong>Anna Josephson</strong>. <a href="https://arxiv.org/abs/2409.17378" target="_blank" rel="noopener">The Cost of Climate Action: Experimental Evidence on the Impact of Climate Information on Charitable Donations to Climate Activism</a>.
  </li>
  <li>
    E. Benami, M. Cecil, <strong>Anna Josephson</strong>, G. Maskell, J. Michler. The Uses (and Misuses) of Weather and Earth Observation Data in Geospatial Impact Evaluations.
  </li>
  <li>
    M. Cecil, E. Benami, <strong>Anna Josephson</strong>, G. Maskell, J. Michler, P. Behrer, R. Heilmayr, E. Kirchner, S. Gourlay, K. Singh. Considerations and Resources for Integrating Earth Observation and Socioeconomic Data.
  </li>
  <li>
    W. Li, K. Kafle, <strong>Anna Josephson</strong>. <a href="https://arxiv.org/abs/2509.19556" target="_blank" rel="noopener">Gender and Agricultural Commercialization in Sub-Saharan Africa: Evidence from Three Panel Surveys</a>.
  </li>
</ul>

<h2>work in progress</h2>
<ul class="pub-plain-list">
  <li>E. Kee-Tui, J. Michler, <strong>Anna Josephson</strong>. Testing for Market Completeness Over Time in the Central Luzon Provinces in the Philippines (1971&ndash;2016).</li>
  <li>J.D. Michler, C.D. Agme, <strong>Anna Josephson</strong>, T. Kilic. Variable Selection in Economic Applications of Remotely Sensed Weather Data: Insights from the LSMS.</li>
  <li>K. Douglas, J.D. Michler, <strong>Anna Josephson</strong>. Mining Meaning: Conducting AI-Assisted Reviews of Economic Literature.</li>
  <li>R. Branham, J. Michler, <strong>Anna Josephson</strong>. Risk and Rainfall: How Farmers' Risk Preferences are Influenced by Experiences with Crop Shocks.</li>
  <li>R. Guerra Su, <strong>Anna Josephson</strong>. Understanding Food Crop Yield Dynamics in Sub-Saharan Africa.</li>
  <li>A. Paolantonio, E. Clemente, <strong>Anna Josephson</strong>. Weather or Not: The Potential for In-Situ Weather Sensors to Improve Measurement.</li>
  <li>N. Koyratty, <strong>Anna Josephson</strong>, C. Byker-Shanks, M. Niles, S. Bliss, L. Clay. Measuring Food Security in Disaster Contexts: Development and Validation of the Disaster Food Security Scale.</li>
  <li>J. Ricker-Gilbert, <strong>Anna Josephson</strong>. Riding the Wave or Drowning in the Sea? A Review of Generative AI in Applied Economics Research.</li>
</ul>

</div>
