import { Image, Item } from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({
  id,
  webformatURL,
  tags,
  largeImageURL,
  onClickItem,
  modalImageLoad,
}) => {
  return (
    <Item key={id}>
      <Image
        alt={tags}
        src={webformatURL}
        data-source={largeImageURL}
        // onClick={onClickItem}
        onClick={() => {
          modalImageLoad(largeImageURL);
          // onClickItem();
        }}
        // modalImageLoad={modalImageLoad}
      />
    </Item>
  );
};

// const ImageGalleryItem = ({ nameList, onToggleMenu, modalImageLoad }) => {
//   return (
//     <li className={s.ImageGalleryItem}>
//       <img
//         onClick={() => modalImageLoad(nameList.largeImageURL)}
//         className={s.ImageGalleryItemimage}
//         src={nameList.webformatURL}
//         alt={nameList.type}
//       />
//     </li>
//   );
// };

ImageGalleryItem.propTypes = {
  id: PropTypes.number,
  tags: PropTypes.string.isRequired,
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  onClickItem: PropTypes.func,
};

export default ImageGalleryItem;
