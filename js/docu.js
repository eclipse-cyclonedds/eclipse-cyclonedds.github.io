window.addEventListener("load", function() {
    let e = document.querySelector(".sphinxsidebarwrapper");
    let ul = document.createElement("ul");
    let version = window.location.href.split('/').slice(-2)[0];
    ul.innerHTML = `
        <li class="toctree-l1"><a class="reference internal">Version: <strong>${version}</strong></a></li>
        <li class="toctree-l1"><a class="reference internal" href="/docs">Back to overview</a></li>
    `;
    e.insertBefore(ul, e.firstChild);
    Array(...document.querySelectorAll("dt.py")).forEach((e) => e.classList.add("highlight"));
});
