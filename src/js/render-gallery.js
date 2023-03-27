const gallery = document.querySelector('.gallery');

export function renderMarkup(dataObject) {
  dataObject.hits.map(element => {
    const dataCard = `
        <div class="photo-card">
  <img src="${element.webformatURL}" alt="${element.tags}" loading="lazy" />
  <div class="info">
    <p class="info-item">
      <b>Likes</b> <span>${element.likes}</span>
    </p>
    <p class="info-item">
      <b>Views</b> <span>${element.views}</span>
    </p>
    <p class="info-item">
      <b>Comments</b> <span>${element.comments}</span>
    </p>
    <p class="info-item">
      <b>Downloads</b> <span>${element.downloads}</span>
    </p>
  </div>
</div>
      `;
    gallery.insertAdjacentHTML('afterbegin', dataCard);
  });
}

export function clearPage() {
  gallery.innerHTML = '';
}
