import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { toast } from 'react-toastify';
import { getImages } from 'components/services/getImages';
import css from './ImageGallery.module.css';

const { Component } = require('react');

class ImageGallery extends Component {
    state = {
        gallery: null,
        page: 1,
        isLoading: false,
    };

    componentDidUpdate(prevProps, prevState) {
        // console.log(this.props);
        if (prevProps.searchText !== this.props.searchText) {
            // console.log('fetch from gallery');
            // fetch(
            //     'https://pixabay.com/api/?q=cat&page=1&key=35752647-f3bb72efc92106ef6393a7805&image_type=photo&orientation=horizontal&per_page=12'
            // )
            //     .then(response => response.json())
            //     .then(
            //         // console.log,

            //         response => this.setState({ gallery: [...response.hits] })
            //     );
            // const response = getImages(this.props.searchText, this.state.page)
            this.setState({ isLoading: true });
            getImages(this.props.searchText, this.state.page)
                // .then((response) => response.json())
                .then(response => {
                    // обробка успішного запиту
                    // console.log(response);
                    this.setState({ gallery: response.hits });
                })
                .catch(function (error) {
                    // обробка помилки
                    // console.log(error);

                    toast.error(error.message, {
                        autoClose: 5000,
                        theme: 'colored',
                    });
                })
                .finally(() => {
                    // виконується завжди
                    this.setState({ isLoading: false });
                });

            // console.log(response);
            // console.log(this.state);
        }
    }

    render() {
        return (
            <>
                {this.state.isLoading && <p>Load...</p>}
                {/* <h1>{this.props.searchText}</h1> */}
                {this.state.gallery && (
                    <ul className={css.ImageGallery}>
                        {this.state.gallery.map(item => (
                            <ImageGalleryItem
                                webformatURL={item.webformatURL}
                                largeImageURL={item.largeImageURL}
                                description={item.tags}
                                key={item.id}
                            />
                        ))}
                    </ul>
                )}
                {/* <ul>
                    {this.state.gallery.map(item => (
                        <li>{item}</li>
                    ))}
                </ul> */}
            </>
        );
    }
}

export default ImageGallery;
