import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { toast } from 'react-toastify';
import { getImages } from 'components/services/getImages';
import css from './ImageGallery.module.css';
import { Loader } from 'components/Loader/Loader';
import Button from 'components/Button/Button';

const { Component } = require('react');

class ImageGallery extends Component {
    state = {
        gallery: [],
        page: 1,
        total: 0,
        isLoading: false,
    };

    componentDidUpdate(prevProps, prevState) {
        // console.log(this.props);
        if (
            prevProps.searchText !== this.props.searchText ||
            prevState.page < this.state.page
        ) {
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
                    toast.success('Wow so easy!', { autoClose: 500 });
                    // console.log(response);
                    this.setState({
                        gallery: [...prevState.gallery, ...response.hits],
                    });

                    const totalPages = Math.round(response.totalHits / 12);
                    this.setState({ total: totalPages });
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
    hedleLoadMore = event => {
        this.setState(({ page }) => ({ page: page + 1 }));
        console.log(this.state);
    };
    render() {
        return (
            <>
                {this.state.isLoading && <Loader />}
                {this.state.gallery && (
                    <>
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
                        {this.state.total > this.state.page && (
                            <Button onLoadMore={this.hedleLoadMore} />
                        )}
                    </>
                )}
            </>
        );
    }
}

export default ImageGallery;
