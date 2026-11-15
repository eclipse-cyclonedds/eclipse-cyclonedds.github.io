(function () {
  var visual = document.getElementById('home-ecosystem-motion');
  var network = visual.querySelector('svg');
  var toggle = document.getElementById('home-motion-toggle');
  var motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
  var playing = false;

  function setPlaying(value) {
    playing = value;
    visual.classList.toggle('is-paused', !playing);
    if (playing) network.unpauseAnimations();
    else network.pauseAnimations();
    toggle.textContent = playing ? 'Pause animation' : 'Play animation';
  }

  toggle.hidden = false;
  setPlaying(!motionPreference.matches);
  toggle.addEventListener('click', function () { setPlaying(!playing); });
  motionPreference.addEventListener('change', function (event) { setPlaying(!event.matches); });
}());

(function () {
  var image = document.getElementById('home-cyclone');
  var toggle = document.getElementById('home-cyclone-toggle');
  var motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
  var playing = false;

  function setPlaying(value) {
    playing = value;
    image.src = playing ? '/images/cyclone-spinning.gif' : '/images/cyclone-still.png';
    toggle.textContent = playing ? 'Pause animation' : 'Play animation';
  }

  toggle.hidden = false;
  setPlaying(!motionPreference.matches);
  toggle.addEventListener('click', function () { setPlaying(!playing); });
  motionPreference.addEventListener('change', function (event) { setPlaying(!event.matches); });
}());
