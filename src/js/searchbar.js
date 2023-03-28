import Notiflix from 'notiflix';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { getDataFromAPI } from './API';
import { renderMarkup, clearPage } from './render-gallery';
import { showButton, hideButton } from './load-more-button';

const searchForm = document.querySelector('#search-form');
const gallery = document.querySelector('.gallery');
const loadMoreBtn = document.querySelector('.load-more');

searchForm.addEventListener('submit', inputSubmit);

function inputSubmit(e) {
  e.preventDefault();
  hideButton();
  const form = e.currentTarget.elements.searchQuery.value;
  getDataFromAPI(form)
    .then(data => {
      if (data.hits.length === 0) {
        Notiflix.Notify.failure(
          'Sorry, there are no images matching your search query. Please try again.'
        );
        return;
      }
      clearPage();
      Notiflix.Notify.success(`Hooray! We found ${data.totalHits} images.`);
      renderMarkup(data);
      showButton();
      let gallery = new SimpleLightbox('.gallery a');
      gallery.refresh();
    })
    .catch(error => console.log(error));
}
