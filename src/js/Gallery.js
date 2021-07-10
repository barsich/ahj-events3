/* eslint-disable no-return-assign */
import noImage from '../img/no-image-found.jpg';

export default class Gallery {
  constructor() {
    this.galleryContainer = document.querySelector('.gallery');
  }

  static createGalleryItem(name, url) {
    const item = document.createElement('div');
    item.classList.add('gallery__item');
    const image = document.createElement('img');
    image.classList.add('gallery__item-image');
    image.alt = name;
    image.src = url;
    image.onerror = () => image.src = noImage;
    item.appendChild(image);
    const closeButton = document.createElement('span');
    closeButton.classList.add('gallery__item-close');
    closeButton.innerText = '\u00D7';
    item.appendChild(closeButton);
    return item;
  }
}
