import { loadMoreDataFromAPI } from './API';
import { renderMarkup } from './render-gallery';

const loadMoreBtn = document.querySelector('.load-more');

loadMoreBtn.addEventListener('click', onBtnClickLoadMore);

function onBtnClickLoadMore() {
  hideButton();
  loadMoreDataFromAPI().then(renderMarkup);
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
