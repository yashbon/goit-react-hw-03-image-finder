import css from './ImageGalleryItem.module.css';
const ImageGalleryItem = props => {
    // console.log(props);
    const { webformatURL, description } = props;
    return (
        <li
            // class="gallery-item"
            className={css.ImageGalleryItem}
        >
            <img
                className={css.ImageGalleryItem__image}
                src={webformatURL}
                alt={description}
            />
        </li>
    );
};

export default ImageGalleryItem;
