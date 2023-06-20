import { toast } from 'react-toastify';

import css from './Searchbar.module.css';
const { Component } = require('react');

export class Searchbar extends Component {
    state = {
        searchText: '',
    };

    handleChange = event => {
        this.setState({ searchText: event.target.value });
    };

    handleSubmit = event => {
        event.preventDefault();
        // console.log('from form', this.state);

        if (this.state.searchText.trim() === '') {
            // alert('Please enter key words for search');
            toast.warn('Please enter key words for search');
            return;
        }
        // toast.success('Wow so easy!', { autoClose: 500 });

        this.props.handleSearch(this.state.searchText);
        this.setState({ searchText: '' });
        event.currentTarget.reset();
        // console.log('state from SearchForm: ', this.state);
    };

    render() {
        // console.log(this.props);
        return (
            <div className={css.Searchbar}>
                <form className={css.SearchForm} onSubmit={this.handleSubmit}>
                    <button className={css.SearchForm__button} type="submit">
                        <span className={css.SearchForm__button__label}>
                            Search
                        </span>
                    </button>
                    <input
                        className={css.SearchForm__input}
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        onChange={this.handleChange}
                        value={this.state.searchText}
                    />
                </form>
            </div>
        );
    }
}
