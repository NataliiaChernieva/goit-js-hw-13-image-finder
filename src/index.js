import './css/styles.css';
import '../node_modules/material-design-icons';
import _debounce from '../node_modules/lodash.debounce';
import apiService from './js/apiService';
import galleryTmp from './templates/galleryTmp.hbs';
import imgCardTmp from './templates/imgCardTmp.hbs';

const refs = {
    searchForm: document.getElementById('#search-form'),
    gallerySection: document.querySelector('.gallery-section'),
    loadMoreBtn: document.querySelector('.load-more-btn'),
}
refs.searchForm.addEventListener('input', _debounce(() => {
    const seachQuery = e.currentTarget.elements.query.value;
    console.log('seachQuery :>> ', seachQuery);

}))


// loadMoreBtn.scrollIntoView({
//   behavior: 'smooth',
//   block: 'end',
// });