window.addEventListener("load", function() {
    let e = document.querySelector(".sphinxsidebarwrapper");
    let ul = document.createElement("ul");
    let elements = window.location.href.split('/');
    let index = elements.findIndex((e, i) => e == "docs") + 2;
    let version = elements[index] ?? "unknown";

    ul.innerHTML = `
        <li class="toctree-l1"><a class="reference internal">Version: <strong>${version}</strong></a></li>
        <li class="toctree-l1"><a class="reference internal" href="/docs">Back to overview</a></li>
    `;
    e.insertBefore(ul, e.firstChild);
    Array(...document.querySelectorAll("dt.py")).forEach((e) => e.classList.add("highlight"));
});
