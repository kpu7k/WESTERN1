(function() {
  "use strict";

  let galleryEl = document.getElementById('panel');
  let galleryOverlay = document.getElementById("galleryOverlay");
  console.log(galleryEl);
  console.log(galleryOverlay);

  galleryEl.addEventListener("click", event => {
    let img = event.target.closest("img");
    if (img) {
      let url = img.src.replace("/small/", "/large/");
      displayLargeImage(url);
    }
  });

  function displayLargeImage(url) {
    let img = new Image();
    img.classList.add("preview");
    img.onload = () => {
      galleryOverlay.append(img);
      document.addEventListener("click", function listener() {
        document.removeEventListener("click", listener);
        img.remove();
      });
    };
    img.src = url;
  }
})();
