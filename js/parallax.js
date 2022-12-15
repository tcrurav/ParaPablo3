function parallax() {
  let pandora = document.getElementById("pandora");
  let psicopata = document.getElementById("psicopata");
  let textparallax = document.getElementById("textparallax");

  window.addEventListener('scroll', function () {
      console.log("parllaxiando......")
      var value = window.scrollY;

      pandora.style.top = value * 0.5 + 'px';
      psicopata.style.left = value * 0.5 + 'px';
      textparallax.style.top = value * 0.15 + 'px';
  })
}

parallax();