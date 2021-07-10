import Gallery from './Gallery';

export default class GalleryForm {
  constructor(gallery) {
    this.form = document.querySelector('.gallery-form');
    this.imageName = document.querySelector('.image-name');
    this.imageUrl = document.querySelector('.image-url');
    this.addButton = document.querySelector('.gallery-form__button');
    this.gallery = gallery;
  }

  init() {
    this.form.addEventListener('submit', this.addItem.bind(this));
    document.addEventListener('click', GalleryForm.removeItem);
  }

  addItem(event) {
    event.preventDefault();
    const name = this.imageName.value;
    const url = this.imageUrl.value;
    this.imageName.value = '';
    this.imageUrl.value = '';
    this.gallery.galleryContainer.appendChild(Gallery.createGalleryItem(name, url));
  }

  static removeItem(event) {
    if (!event.target.classList.contains('gallery__item-close')) {
      return;
    }
    event.target.closest('.gallery__item').remove();
  }
}
