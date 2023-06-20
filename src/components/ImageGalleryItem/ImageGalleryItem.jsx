import css from './ImageGalleryItem.module.css';

const ImageGalleryItem = props => {
    // console.log(props);
    const { webformatURL, largeImageURL, description, onClick } = props;
    // console.log(largeImageURL);
    // console.log(onClick);
    return (
        <li
            // class="gallery-item"
            className={css.ImageGalleryItem}
        >
            <img
                className={css.ImageGalleryItem__image}
                src={webformatURL}
                alt={description}
                onClick={() => onClick(largeImageURL)}
            />
        </li>
    );
};

export default ImageGalleryItem;
