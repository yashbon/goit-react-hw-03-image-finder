import Modal from 'components/Modal/Modal';
import css from './ImageGalleryItem.module.css';

// const modalRoot = document.querySelector('#modal-root');

const ImageGalleryItem = props => {
    // console.log(props);
    const { webformatURL, largeImageURL, description, showModal, onClick } =
        props;
    console.log(largeImageURL);
    return (
        <li
            // class="gallery-item"
            className={css.ImageGalleryItem}
            onClick={onClick}
        >
            <img
                className={css.ImageGalleryItem__image}
                src={webformatURL}
                alt={description}
            />
            {showModal && <Modal imageURL={largeImageURL} />}
        </li>
    );
};

export default ImageGalleryItem;
