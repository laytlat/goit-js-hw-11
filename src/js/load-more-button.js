import { loadMoreDataFromAPI } from './API';
import { renderMarkup } from './render-gallery';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import Notiflix from 'notiflix';

const loadMoreBtn = document.querySelector('.load-more');

loadMoreBtn.addEventListener('click', onBtnClickLoadMore);

function onBtnClickLoadMore() {
  hideButton();
  loadMoreDataFromAPI()
    .then(data => {
      if (data.hits.length < 40) {
        hideButton();
        Notiflix.Notify.info(
          "We're sorry, but you've reached the end of search results."
        );
      }
      renderMarkup(data);
      let gallery = new SimpleLightbox('.gallery a');
      gallery.refresh();
    })
    .catch(error => console.log(error));
  showButton();
}

export function showButton() {
  if (loadMoreBtn.classList.contains('is-hidden')) {
    loadMoreBtn.classList.remove('is-hidden');
  }
}

export function hideButton() {
  if (!loadMoreBtn.classList.contains('is-hidden')) {
    loadMoreBtn.classList.add('is-hidden');
  }
}
