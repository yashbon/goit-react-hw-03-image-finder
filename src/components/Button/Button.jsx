import css from './Button.module.css';

const Button = props => {
    const { onLoadMore } = props;
    return (
        <button className={css.Button} type="button" onClick={onLoadMore}>
            Load more
        </button>
    );
};

export default Button;
