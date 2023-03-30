const galleryEl = document.querySelector('.gallery');

export function renderMarkup(dataObject) {
  dataObject.hits.map(element => {
    const dataCard = `
        <div class="photo-card gallery__item">
 <a  href="${element.largeImageURL}">
  <img class="gallery__image" src="${element.webformatURL}" alt="${element.tags}" />
</a>
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
    galleryEl.insertAdjacentHTML('beforeend', dataCard);
  });
}

export function clearPage() {
  galleryEl.innerHTML = '';
}
