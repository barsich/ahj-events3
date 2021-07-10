import GalleryForm from '../GalleryForm';

jest.mock('../../img/no-image-found.jpg', () => null);

test('GalleryForm', () => {
  expect(new GalleryForm()).toBeInstanceOf(GalleryForm);
});
