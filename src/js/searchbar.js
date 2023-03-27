import Notiflix from 'notiflix';
import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';

import getDataFromAPI from './API';

const searchForm = document.querySelector('#search-form');
const gallery = document.querySelector('.gallery');

searchForm.addEventListener('submit', inputSubmit);

function renderMarkup(array) {
  array.map(element => {
    const dataCard = `
        <div class="photo-card">
  <img src="${element.webformatURL}" alt="${element.tags}" loading="lazy" />
  <div class="info">
    <p class="info-item">
      <b>Likes ${element.likes}</b>
    </p>
    <p class="info-item">
      <b>Views ${element.vievs}</b>
    </p>
    <p class="info-item">
      <b>Comments ${element.comments}</b>
    </p>
    <p class="info-item">
      <b>Downloads ${element.downloads}</b>
    </p>
  </div>
</div>
      `;
    gallery.insertAdjacentHTML('afterbegin', dataCard);
  });
}

function inputSubmit(e) {
  e.preventDefault();
  const form = e.currentTarget.elements.searchQuery.value;
  getDataFromAPI(form).then(renderMarkup);
}
