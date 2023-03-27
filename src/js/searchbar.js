import Notiflix from 'notiflix';
import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';

import getDataFromAPI from './API';
import { renderMarkup, clearPage } from './render-gallery';

const searchForm = document.querySelector('#search-form');
const gallery = document.querySelector('.gallery');

searchForm.addEventListener('submit', inputSubmit);

function inputSubmit(e) {
  e.preventDefault();
  const form = e.currentTarget.elements.searchQuery.value;
  getDataFromAPI(form).then(data => {
    if (data.hits.length === 0) {
      Notiflix.Notify.failure(
        'Sorry, there are no images matching your search query. Please try again.'
      );
      return;
    }
    clearPage();
    Notiflix.Notify.success(`Hooray! We found ${data.totalHits} images.`);
    renderMarkup(data);
  });
}
