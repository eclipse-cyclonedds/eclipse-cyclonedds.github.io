---
Title:       Tools
Template:    tools
---

<section class="tools-intro tools-container" aria-labelledby="tools-title">
  <div>
    <p class="tools-eyebrow">Developer tools</p>
    <h1 id="tools-title">See what your DDS<br class="tools-desktop-break"> system is doing.</h1>
    <p class="tools-lead">Discover applications, explore topics and understand how data moves through your system. Inspect your DDS network visually with Insight or work directly from the terminal.</p>
  </div>
  <nav class="tools-choices" aria-label="Choose a developer tool">
    <a href="#cyclonedds-insight"><span class="tools-choice-icon" aria-hidden="true"><i class="fas fa-desktop"></i></span><span><strong>Cyclone DDS Insight</strong><span>Graphical inspection and troubleshooting</span></span><span aria-hidden="true">&darr;</span></a>
    <a href="#cyclonedds-commandline-tool"><span class="tools-choice-icon" aria-hidden="true"><i class="fas fa-terminal"></i></span><span><strong>Command-line tools</strong><span>DDS discovery and inspection in your terminal</span></span><span aria-hidden="true">&darr;</span></a>
  </nav>
</section>

<section class="tools-insight" id="cyclonedds-insight" aria-labelledby="insight-title">
  <div class="tools-container">
    <div class="tools-insight-overview">
      <div>
        <p class="tools-eyebrow">Explore visually</p>
        <h2 id="insight-title">Cyclone DDS Insight</h2>
        <p class="tools-description">A graphical view of your DDS system, from discovered topics to individual readers and writers.</p>
        <p>Find the endpoints associated with a topic, examine their Quality of Service (QoS) settings and identify mismatches that can prevent communication.</p>
        <div class="tools-actions">
          <a class="tools-button" href="https://github.com/eclipse-cyclonedds/cyclonedds-insight/releases">Download Insight <span aria-hidden="true">&rarr;</span></a>
          <a class="tools-text-link" href="/docs/cyclonedds-insight/latest/index.html">Read the documentation <span aria-hidden="true">&rarr;</span></a>
        </div>
        <p class="tools-platforms">Windows &middot; macOS &middot; Linux<br>Light and dark themes</p>
        <a class="tools-source-link" href="https://github.com/eclipse-cyclonedds/cyclonedds-insight"><span class="fab fa-github" aria-hidden="true"></span> View source on GitHub</a>
      </div>
      <figure class="tools-screenshot">
        <a href="/images/cyclonedds-insight.png" aria-label="View the full-size Cyclone DDS Insight screenshot">
          <img src="/images/cyclonedds-insight.png" width="2424" height="1580" alt="Cyclone DDS Insight showing discovered topics and the readers and writers for a selected topic" fetchpriority="high">
        </a>
        <figcaption>Explore topics and the endpoints that publish and subscribe to them. Select the image to view it at full size.</figcaption>
      </figure>
    </div>
    <div class="tools-features">
      <div><span class="tools-feature-number" aria-hidden="true">01</span><h3>Discover your system</h3><p>Browse topics and participants across DDS domains. Identify applications using the available host and process information.</p></div>
      <div><span class="tools-feature-number" aria-hidden="true">02</span><h3>Inspect endpoints</h3><p>See which readers and writers use a topic. Examine topic types, partitions and the QoS settings of each endpoint.</p></div>
      <div><span class="tools-feature-number" aria-hidden="true">03</span><h3>Investigate data flow</h3><p>Spot QoS mismatches, import IDL definitions and create a reader to inspect the samples published on a topic.</p></div>
    </div>
  </div>
</section>

<section class="tools-cli tools-container" id="cyclonedds-commandline-tool" aria-labelledby="cli-title">
  <div class="tools-cli-description">
    <p class="tools-eyebrow">Work from the terminal</p>
    <h2 id="cli-title">The <code>cyclonedds</code><br> command-line tool</h2>
    <p class="tools-description">Inspect your DDS system without leaving your development environment.</p>
    <p>List discovered entities and their QoS, identify applications, inspect topic types or subscribe to live data. The command-line tool is included with the Cyclone DDS Python package.</p>
    <div class="tools-install">
      <span>Install the Python package</span>
      <code>python -m pip install cyclonedds</code>
      <a href="/docs/cyclonedds-python/latest/intro.html">Installation details <span aria-hidden="true">&rarr;</span></a>
    </div>
    <div class="tools-actions">
      <a class="tools-text-link" href="/docs/cyclonedds-python/latest/tools.html">Explore the command-line reference <span aria-hidden="true">&rarr;</span></a>
    </div>
    <a class="tools-source-link" href="https://github.com/eclipse-cyclonedds/cyclonedds-python"><span class="fab fa-github" aria-hidden="true"></span> View source on GitHub</a>
  </div>
  <div class="tools-terminal" role="region" aria-label="Example Cyclone DDS commands">
    <div class="tools-terminal-heading"><span class="fas fa-terminal" aria-hidden="true"></span> A few useful commands <span class="tools-terminal-badge">cyclonedds</span></div>
    <pre><code><span class="tools-terminal-comment"># Discover DDS entities and their QoS</span>
<span class="tools-terminal-prompt" aria-hidden="true">$ </span>cyclonedds ls

<span class="tools-terminal-comment"># List discovered applications</span>
<span class="tools-terminal-prompt" aria-hidden="true">$ </span>cyclonedds ps

<span class="tools-terminal-comment"># Inspect the type of a topic</span>
<span class="tools-terminal-prompt" aria-hidden="true">$ </span>cyclonedds typeof &lt;topic&gt;

<span class="tools-terminal-comment"># Subscribe to samples on a topic</span>
<span class="tools-terminal-prompt" aria-hidden="true">$ </span>cyclonedds subscribe &lt;topic&gt;

<span class="tools-terminal-comment"># Show commands and options</span>
<span class="tools-terminal-prompt" aria-hidden="true">$ </span>cyclonedds --help</code></pre>
    <p>Replace <code>&lt;topic&gt;</code> with a topic name from your DDS system.</p>
  </div>
</section>

<aside class="tools-next tools-container" aria-label="More troubleshooting resources">
  <div><p class="tools-eyebrow">Take a closer look</p><h2>Need to dig deeper?</h2><p>Explore practical guides and answers to common DDS questions.</p></div>
  <div class="tools-actions"><a class="tools-text-link" href="/content/guides/tracefile.html">Read Cyclone DDS trace files <span aria-hidden="true">&rarr;</span></a><a class="tools-text-link" href="/content/faq.html">Browse the FAQ <span aria-hidden="true">&rarr;</span></a></div>
</aside>
