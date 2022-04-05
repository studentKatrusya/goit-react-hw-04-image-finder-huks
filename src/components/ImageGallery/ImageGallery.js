import ImageGalleryItem from '../ImageGalleryItem';
import { List } from './ImageGallery.styled';
import PropTypes from 'prop-types';

function ImageGallery({ images, toggleModal, modalImageLoad }) {
  return (
    <List>
      {images.map(({ id, tags, webformatURL, largeImageURL }) => (
        <ImageGalleryItem
          key={id}
          tags={tags}
          webformatURL={webformatURL}
          modalImageLoad={modalImageLoad}
          largeImageURL={largeImageURL}
          onClickItem={() => {
            toggleModal();
          }}
        />
      ))}
    </List>
  );
}

ImageGallery.propTypes = {
  images: PropTypes.array,
  onClickItem: PropTypes.func,
};
export default ImageGallery;

//   key: PropTypes.number,
//   tags: PropTypes.string.isRequired,
//   webformatURL: PropTypes.string.isRequired,
//   largeImageURL: PropTypes.string.isRequired,
