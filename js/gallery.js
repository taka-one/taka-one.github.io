
document.addEventListener('DOMContentLoaded', function() {
  const categories = ['original', 'name', 'papicci', 'collaboration'];

  categories.forEach(category => {
    fetchImages(category);
  });

  function fetchImages(category) {
    const galleryDiv = document.getElementById(category + '-gallery');

    fetch(`assets/${category}/`)
      .then(response => response.text())
      .then(data => {
        const parser = new DOMParser();
        const htmlDoc = parser.parseFromString(data, 'text/html');
        const links = htmlDoc.querySelectorAll('a');

        links.forEach(link => {
          const href = link.getAttribute('href');
          if (href.match(/\.(jpg|jpeg|png|gif)$/i)) {
            const img = document.createElement('img');
            img.src = `assets/${category}/${href}`;
            img.className = 'gallery-image';

            const caption = document.createElement('p');
            caption.innerText = href;

            const wrapper = document.createElement('div');
            wrapper.className = 'gallery-item';
            wrapper.appendChild(img);
            wrapper.appendChild(caption);

            galleryDiv.appendChild(wrapper);
          }
        });
      });
  }
});
