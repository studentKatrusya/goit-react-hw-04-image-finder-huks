import { Image, Item } from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({
  id,
  webformatURL,
  tags,
  largeImageUrl,
  onClickItem,
  modalImageLoad,
}) => {
  return (
    <Item key={id}>
      <Image
        alt={tags}
        src={webformatURL}
        data-source={largeImageUrl}
        onClick={onClickItem}
        modalImageLoad={modalImageLoad}
      />
    </Item>
  );
};

ImageGalleryItem.propTypes = {
  id: PropTypes.number,
  tags: PropTypes.string.isRequired,
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  onClickItem: PropTypes.func,
};

export default ImageGalleryItem;
